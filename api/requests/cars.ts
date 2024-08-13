import { CarClass, type CarInterface } from "~/api/models/car";

const carsQuery = gql`
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
      id
      date_created
      name
      mileage
      class {
        id
        title
      }
      year_release
      coast
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
  query {
    classesCars(filter: { default: { _eq: true } }) {
      id
      title
      items {
        id
        date_created
        name
        mileage
        class {
          id
          title
        }
        year_release
        coast
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
      }
      default
    }
  }
`;

export async function getCars($carClass: number) {
  if (!$carClass) {
    throw createError({
      status: 404,
      statusCode: 404,
      message: "Page not found",
    });
  }
  return useAsyncQuery<{
    meta: { title: string; description?: string };
    models: { title: string; slug: string; count: { count: number } }[];
    cars: CarInterface[];
  }>(carsQuery, {
    carClass: `${$carClass}`,
    carClassId: `${$carClass}`,
  }).then(({ data }) => {
    const models = data.value?.models.map((model) => ({
      title: model.title,
      count: model.count.count,
      slug: model.slug,
    }));
    return { data: { ...data.value, models: models || [] } };
  });
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
