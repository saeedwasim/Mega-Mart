import { defineStore } from "pinia";
import { actions } from "./actions";
import { state } from "./state";

export const showCard = defineStore("card", {
  state,
  actions,
  getters: {
    getCardsData(state) {
      console.log(state,"Data in state")
      return state.CARDS;
    },
  },
});
