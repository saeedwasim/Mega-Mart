export const actions = {
  async fetchCardsData() {
    const { $axios } = useNuxtApp();
    try {
      const response = await $axios.get("/products");
      console.log(response, "response in actions");
      this.CARDS = response.data; 
      return response.data;
    } catch (error) {}
  },
};
