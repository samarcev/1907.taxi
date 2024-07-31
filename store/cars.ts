import { CarClass } from "~/api/models/car";
import { getCategoriesCarsCount } from "~/api/requests/cars";

export const useCarState = defineStore("cars", {
  actions: {
    async GET_CAR_CLASSES() {
      const { data } = await getCategoriesCarsCount();
      this.carClasses = data || [];
    },
  },
  state: () => {
    return {
      carClasses: [] as { class: CarClass; title: string; count: number }[],
    };
  },
});
