import type { UseSeoMetaInput } from "@unhead/schema";

/**
 buyback: Boolean
 car_park(filter: car_parks_filter, limit: Int, offset: Int, page: Int, search: String, sort: [String]): car_parks
 class(filter: classesCars_filter, limit: Int, offset: Int, page: Int, search: String, sort: [String]): classesCars
 cost: Int
 date_created: Date
 date_created_func: datetime_functions
 date_updated: Date
 date_updated_func: datetime_functions
 gallery(filter: cars_directus_files_filter, limit: Int, offset: Int, page: Int, search: String, sort: [String]): [cars_directus_files]
 gallery_func: count_functions
 id: ID!
 mileage: Int
 model(filter: models_filter, limit: Int, offset: Int, page: Int, search: String, sort: [String]): models
 rating: Int
 registration_number: String!
 rent: String
 seo: JSON
 seo_func: count_functions
 sort: Int
 status: String
 thumbnail(filter: directus_files_filter, limit: Int, offset: Int, page: Int, search: String, sort: [String]): directus_files
 user_created: String
 user_updated: String
 year_of_release: Int
 */
export interface CarInterface {
  readonly id: number;
  readonly date_created: string;
  readonly mileage: number;
  readonly buyback: boolean;
  readonly cost: number;
  readonly year_of_release: number;
  readonly thumbnail: CarImage;
  readonly rent: string;
  readonly registration_number: string;
  rating: number;
  readonly model: ModelCar;
  readonly car_park: CarPark;
  readonly class: ClassCar;
  readonly gallery: {
    file: CarImage;
  }[];
}
interface CarImage {
  id: string;
  filesize: string;
  width: number;
  height: number;
  filename_disk: string;
  filename_download: string;
  title: string;
}

interface CarPark {
  id: number;
  address: string;
  title: string;
}
export interface ModelCar {
  name: string;
  slug: string;
  id: string;
  seo: UseSeoMetaInput
}
export interface ClassCar {
  default: boolean;
  id: string;
  seo: UseSeoMetaInput;
  slug: string;
  title: string;
  cars_count: {
    count: number;
  };
}
