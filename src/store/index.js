import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contents: [
      {
        id: 0,
        content: {
          title: "Lorem ipsum 1",
          src: "https://miro.medium.com/max/1190/1*S4golQzBEiv42TvhQSig1w.jpeg",
          article:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, possimus distinctio, deserunt saepe voluptate iure natus, facilis doloribus iusto  magnam eveniet unde. Minus veniam officiis cum dolorum non excepturi porro.",
        },
      },
      {
        id: 1,
        content: {
          title: "Lorem ipsum 2",
          src: "https://miro.medium.com/max/1190/1*S4golQzBEiv42TvhQSig1w.jpeg",
          article:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, possimus distinctio, deserunt saepe voluptate iure natus, facilis doloribus iusto  magnam eveniet unde. Minus veniam officiis cum dolorum non excepturi porro.",
        },
      },
      {
        id: 2,
        content: {
          title: "Lorem ipsum 3",
          src: "https://miro.medium.com/max/1190/1*S4golQzBEiv42TvhQSig1w.jpeg",
          article:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, possimus distinctio, deserunt saepe voluptate iure natus, facilis doloribus iusto  magnam eveniet unde. Minus veniam officiis cum dolorum non excepturi porro.",
        },
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
