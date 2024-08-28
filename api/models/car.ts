export interface CarInterface {
  id: number;
  status: "published";
  date_created: string;
  date_updated: string | null;
  coast: number;
  name: string;
  mileage: number;
  class: {
    id: CarClass,
    title: string
  };
  year_release: number;
  reg_number: string;
  worktime: string;
  photos: CarImage[];
  park: CarPark;
  ransom: boolean
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
  };
}

interface CarPark {
  id: number;
  address: string;
  name: string
}

export enum CarClass {
  ECONOMY = 1, // Эконом
  COMFORT, // Комфорт
  COMFORT_PLUS, // Комфорт+
  BUSINESS, // Бизнес
  DELIVERY, // Доставка
}
