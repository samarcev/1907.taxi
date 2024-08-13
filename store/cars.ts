import { CarClass } from "~/api/models/car";
import { getCategoriesCarsCount } from "~/api/requests/cars";

export const useCarState = defineStore("cars", {
  actions: {
    async GET_CAR_CLASSES() {
      const response= (await getCategoriesCarsCount()) as {
        data: {
          class: CarClass;
          title: string;
          count: number;
          default_category: boolean;
        }[];
      };
      this.carClasses = response?.data ?? [];
    },
  },
  state: () => {
    return {
      carClasses: [] as {
        class: CarClass;
        title: string;
        count: number;
        default_category: boolean;
      }[],
    };
  },
  getters: {
    /**
     * @default COMFORT_PLUS
     * */
    getDefaultCategory(state) {
      return (
        state.carClasses.find((c) => c.default_category)?.class ||
        CarClass.COMFORT_PLUS
      );
    },
  },
});
