import { createStore } from 'vuex'

export default createStore({
  state: {
    sampleBlogCard: [
      {
        blogTitle: "blog-card-1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 7 ,2022",
      },
      {
        blogTitle: "blog-card-1",
        blogCoverPhoto: "stock-2",
        blogDate: "May 7 ,2022",
      },
      {
        blogTitle: "blog-card-1",
        blogCoverPhoto: "stock-3",
        blogDate: "May 7 ,2022",
      },
      {
        blogTitle: "blog-card-1",
        blogCoverPhoto: "stock-4",
        blogDate: "May 7 ,2022",
      },
    ],
    editPost:null,
  },
  getters: {
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(payload);
    },
  },
  actions: {
  },
  modules: {
  }
})
