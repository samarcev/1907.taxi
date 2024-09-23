import { CarClass, type CarInterface } from "~/api/models/car";

const carScheme = gql`
  fragment CarScheme on cars {
    id
    date_created
    name
    mileage
    class {
      id
      title
    }
    year_release
    cost: coast
    worktime
    reg_number
    park {
      id
      address
      name
    }
    photos {
      file: directus_files_id {
        id
        filesize
        width
        height
        filename_disk
        filename_download
        title
      }
    }
    ransom
  }
`;

const carsQuery = gql`
  ${carScheme}
  query getCarsByClassId($carClass: ID!, $carClassId: GraphQLStringOrFloat!) {
    meta: classesCars_by_id(id: $carClass) {
      title
    }
    models: brands(filter: { items: { class: { id: { _eq: $carClassId } } } }) {
      title
      slug
      count: items_func {
        count
      }
    }
    cars(filter: { class: { id: { _eq: $carClassId } } }) {
      ...CarScheme
    }
  }
`;
const carsCategoryCounts = gql`
  query {
    classesCars {
      id
      title
      default_category: default
      count: items_func {
        count
      }
    }
  }
`;
const carsDefaultClass = gql`
  ${carScheme}
  query {
    classesCars(filter: { default: { _eq: true } }) {
      id
      title
      items {
        ...CarScheme
      }
      default
    }
  }
`;
const carsGetModel = gql`
  ${carScheme}
  query getCarsByClassAndModel(
    $classId: GraphQLStringOrFloat!
    $model: String
  ) {
    models: brands(filter: { items: { class: { id: { _eq: $classId } } } }) {
      title
      slug
      count: items_func {
        count
      }
    }
    cars(
      filter: {
        class: { id: { _eq: $classId } }
        brand: { slug: { _eq: $model } }
      }
    ) {
      ...CarScheme
    }
    meta: brands(filter: { slug: { _eq: $model } }) {
      title: title
    }
  }
`;

export async function getCars($carClass: number) {
  try {
    return useAsyncQuery<{
      meta: { title: string; description?: string };
      models: { title: string; slug: string; count: { count: number } }[];
      cars: CarInterface[];
    }>(carsQuery, {
      carClass: `${$carClass}`,
      carClassId: `${$carClass}`,
    }).then(({ data }) => {
      if (!data.value) {
        throw createError({
          status: 404,
          statusCode: 404,
          message: "Page not found",
        });
      }
      const models =
        data.value?.models.map((model) => ({
          title: model.title,
          count: model.count.count,
          slug: model.slug,
        })) || [];
      return { data: { ...data.value, models: models } };
    });
  } catch (err) {
    throw createError({
      status: 404,
      statusCode: 404,
      message: "Page not found",
    });
  }
}

export async function getCategoriesCarsCount() {
  return useAsyncQuery<{
    classesCars: {
      id: number;
      count: { count: number };
      title: string;
      default_category: boolean;
    }[];
  }>(carsCategoryCounts).then(({ data }) => {
    if (data.value)
      return {
        data: data.value!.classesCars.map((category) => ({
          class: +category.id as CarClass,
          title: category.title,
          count: category.count.count,
          default_category: category.default_category,
        })),
      };
  });
}

export async function getDefaultClassCars() {
  return useAsyncQuery<{
    classesCars: { title: string; id: CarClass; items: CarInterface[] }[];
  }>(carsDefaultClass).then((response) => {
    return { data: response.data.value?.classesCars[0] };
  });
}

export async function getCarsByClassAndModel(classId: number, model: string) {
  return useAsyncQuery<{
    cars: CarInterface[];
    models: { title: string; slug: string; count: { count: number } }[];
    meta: { title: string; description: string }[];
  }>(carsGetModel, {
    classId,
    model,
  }).then((res) => {
    const models = res.data.value?.models.map((model) => ({
      title: model.title,
      count: model.count.count,
      slug: model.slug,
    }));
    return {
      data: res.data.value?.cars,
      meta: res.data.value?.meta[0],
      models: models || [],
    };
  });
}
