import { createStore } from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseinit.js";

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
    blogPosts: [],
    postLoaded: null,
    blogHTML: "Write your blog title here...",
    blogTitle: "",
    blogPhotoName: "",
    blogPhotoFileURL: null,
    blogPhotoPreview: null,
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
  },
  getters: {
    blogPostFeed(state){
      return state.blogPosts.slice(0,2)
    },
    blogPostCard(state){
      return state.blogPosts.splice(2,6);
    }
  },
  mutations: {
    openPhotoPreview(state, payload) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    newBlogPost(state, payload) {
      state.blogHTML = payload;
      //console.log(state.blogHTML);
    },
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(payload);
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id;
      state.profileEmail = doc.data().email;
      state.profileFirstName = doc.data().firstName;
      state.profileLastName = doc.data().lastName;
      state.profileUserName = doc.data().userName;

      console.log(state.profileId);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }) {
      const database = await db
        .collection("Users")
        .doc(firebase.auth().currentUser.uid);
      const dbResult = await database.get();
      commit("setProfileInfo", dbResult);
      commit("setProfileInitials");
      // console.log(dbResult);
    },
    async getPost({ state }) {
      const dataBase = await db.collection("blogPosts").orderBy("date", "desc");
      const dbResults = await dataBase.get();
      dbResults.forEach((doc) => {
        if (!state.blogPosts.some((post) => post.blogID === doc.id)) {
          const data = {
            blogID: doc.data().blogID,
            blogHTML: doc.data().blogHTML,
            blogCoverPhoto: doc.data().blogCoverPhoto,
            blogTitle: doc.data().blogTitle,
            blogDate: doc.data().date,
            blogCoverPhotoName: doc.data().blogCoverPhotoName,
          };
          state.blogPosts.push(data);
        }
      });
      state.postLoaded = true;
      console.log(state.blogPosts);
    },
    async updateUserSettings({ commit, state }) {
      const database = await db.collection("Users").doc(state.profileId);
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    },
    
  },
  modules: {},
});
