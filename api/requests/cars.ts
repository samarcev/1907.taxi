import type { CarInterface, ClassCar } from "~/api/models/car";

const carScheme = gql`
  fragment CarScheme on cars {
    id
    date_created
    mileage
    buyback
    cost
    year_of_release
    rent
    thumbnail {
      id
    }
    model {
      id
      name
      slug
    }
    car_park {
      id
      address
      title
    }
    class {
      id
      title
      slug
    }
    gallery {
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
`;
const ClassesQuery = gql`
  query {
    classesCars(filter: { cars: { status: { _eq: "published" } } }) {
      id
      title
      slug
      default
      cars_count: cars_func {
        count
      }
    }
  }
`;
const DefaultClassQuery = gql`
  ${carScheme}
  query {
    classesCars(
      filter: { default: { _eq: true }, cars: { status: { _eq: "published" } } }
    ) {
      id
      slug
      title
      seo
      cars {
        ...CarScheme
      }
    }
  }
`;
const SliderItemsQuery = gql`
  query getSliderItems($classCar: GraphQLStringOrFloat) {
    models(
      filter: {
        cars: {
          class: { id: { _eq: $classCar } }
          status: { _eq: "published" }
        }
      }
      limit: 5
    ) {
      id
      name
      available_count: cars_func {
        count
      }
      cars(sort: "-rating", limit: 1) {
        cost
        rent
        year_of_release
        rating
      }
    }
  }
`;
const carsBySlugClass = gql`
  ${carScheme}
  query getCarsBySlugClass($slug: String!) {
    classesCars(filter: { slug: { _eq: $slug } }) {
      default
      id
      seo
      slug
      title
      cars_count: cars_func {
        count
      }
    }
    cars(filter: { class: { slug: { _eq: $slug } } }) {
      ...CarScheme
    }
  }
`;

export async function getClasses() {
  const result = await useAsyncQuery<{
    classesCars: {
      id: number;
      slug: string;
      title: string;
      default: boolean;
      cars_count: { count: number };
    }[];
  }>(ClassesQuery);
  const { data } = result;
  return data.value;
}

export async function getDefaultClass() {
  const { data, error } = await useAsyncQuery<{
    classesCars: (ClassCar & { cars: CarInterface[] })[];
  }>(DefaultClassQuery);
  if (error.value) {
    throw new Error(error.value.message);
  }
  return data.value?.classesCars[0];
}

export async function getSliderItems(classCar: string) {
  const { data } = await useAsyncQuery<{
    models: {
      id: number;
      name: string;
      available_count: { count: number };
      cars: {
        cost: number;
        rent: string;
        year_of_release: number;
        rating: number;
      }[];
    }[];
  }>(SliderItemsQuery, {
    classCar,
  });
  return data.value;
}

export async function getCarsBySlugClass(slug: string) {
  const { data } = await useAsyncQuery<{
    cars: CarInterface[];
    classesCars: ClassCar[];
  }>(carsBySlugClass, {
    slug,
  });
  return data.value || { cars: [], classesCars: [] };
}
