export interface ParkInterface {
  id: number;
  status: "published";
  date_created: string;
  date_updated: string | null;
  name: string;
  address: string;
}
