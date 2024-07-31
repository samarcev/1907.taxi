export interface CarInterface {
  id: number;
  status: "published";
  date_created: string;
  date_updated: string | null;
  coast: number;
  name: string;
  mileage: number;
  class: CarClass;
  year_release: 2020;
  reg_number: null;
  worktime: string;
  photos: CarImage[];
}

interface CarImage {
  file: {
    id: string;
    filesize: string;
    width: number;
    height: number;
    filename_disk: string;
    filename_download: string;
    title: string;
  }
}

export enum CarClass {
  ECONOMY= 1, // Эконом
  COMFORT, // Комфорт
  COMFORT_PLUS, // Комфорт+
  BUSINESS, // Бизнес
  DELIVERY, // Доставка
}
