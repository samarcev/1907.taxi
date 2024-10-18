interface TgAppUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  allows_write_to_pm: boolean;
}

export const TelegramUserState = defineStore("TelegramUser", {
  state: () => ({
    user: null as TgAppUser | null,
  }),
  actions: {
    SET_TG_USER_DATA(data: TgAppUser) {
      this.user = data;
    },
  },
  getters: {
    id: (s) => s.user?.id || null,
    username: (s) => s.user?.username || null
  },
});
