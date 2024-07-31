import { CarClass, type CarInterface } from "~/api/models/car";

const carsQuery = gql`
 query getCars($carClass: GraphQLStringOrFloat) {
    cars(filter: { class: { id: { _eq: $carClass } }}) {
      id
      name
      mileage
      class {
        id
        title
      }
      year_release
      coast
      worktime
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
      count: items_func {
        count
      }
    }
  }
`;

export async function getCars($carClass: number = CarClass.COMFORT) {
  return useAsyncQuery<{ cars: CarInterface[] }>(carsQuery, {
    carClass: `${$carClass}`,
  }).then(({ data }) => {
    return { data: data.value?.cars };
  });
}

export async function getCategoriesCarsCount() {
  return useAsyncQuery<{
    classesCars: { id: number, count: { count: number }, title: string }[];
  }>(carsCategoryCounts).then(({ data }) => {
    return {
      data: data.value?.classesCars.map((category) => ({
        class: +category.id as CarClass,
        title: category.title,
        count: category.count.count,
      })),
    };
  });
}
