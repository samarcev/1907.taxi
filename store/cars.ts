import { getClasses } from "~/api/requests/cars";
interface carClass {
  id: number;
  title: string;
  slug: string;
  default: boolean;
  cars_count: {
    count: number;
  };
}
export const useCarState = defineStore("cars", {
  actions: {
    async GET_CAR_CLASSES() {
      const response = await getClasses();
      this.carClasses = response?.classesCars ?? [];
    },
  },
  state: () => {
    return {
      carClasses: [] as carClass[],
    };
  },
  getters: {
    /**
     * @default COMFORT_PLUS
     * */
    getDefaultCategory(state) {
      return state.carClasses.find((c) => c.default)?.id;
    },
  },
});
