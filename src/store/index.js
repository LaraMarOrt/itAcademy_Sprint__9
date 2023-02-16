import { createStore } from "vuex";

export default createStore({
  state: {
    userloged: null,
    books: [],
    page: 1,
    favourites: [],
    users: [
      {
        username: "admin",
        userPass: "admin",
        userMail: "admin@admin.admin",
        favourites: [],
      },
    ],
  },

  getters: {
    getLogedUser(state) {
      return state.userLoged;
    },

    getUsers(state) {
      let users = window.localStorage.getItem("users");
      if (users == null) {
        users = [
          {
            username: "admin",
            userPass: "admin",
            userMail: "admin@admin.admin",
            favourites: [],
          },
        ];
      } else {
        users = JSON.parse(users);
      }
      return users;
    }
  },

  mutations: {
    setPage(state, page) {
      state.page = page;
    },

    setBooks(state, payload) {
      state.books = payload;
    },

    loginUser(state, user_password) {
      const username = user_password[0];
      const password = user_password[1];
      const users = JSON.parse(window.localStorage.getItem("users"));
      const index = users.findIndex(item => item.username === username);
      const user = users[index];
      console.log(username);
      console.log(user);
      if (user != null && user.pass == password) {
        console.log(user);
        state.userLoged = user;
        return user;
      }
      if (username =="admin" & password=="admin") {
        state.userLoged = state.users[0];
        return state.users[0];
      }  
      else {
        alert("Error");
      }
    },

    updateFavourites(state, payload) {
      state.favourites = payload;
    },

    updateUsers(state, payload) {
      state.users = payload;
    },
  },

  actions: {
    async fetchData({ commit }, page) {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=mistery/?page=` + page
        );
        const data = await res.json();
        commit("setBooks", data.items);
      } catch (error) {
        console.log(error);
      }
    },
    async pageMove({ commit }, nextpage) {
      commit("setPage", nextpage);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=mistery/?page=` +
          nextpage
        );
        const data = await res.json();
        commit("setBooks", data.items);
      } catch (error) {
        console.log(error);
      }
    },

    logUser({ commit, getters  }, state) {
      commit("loginUser", state);
      let users = getters.getUsers;
      commit('updateUsers', users);
    },



    singUpUser(context, user) {
      if (context.state.users.find(x => x.username == user.username) == null) {
        const users = context.state.users;
        users.push(user);
        window.localStorage.setItem("users", JSON.stringify(users));
        context.commit('updateUsers', users)
        alert("Usuario registrado");
      } else {
        alert("El Usuario ya existe");
      }
    },

    syncUser(context, listaUser) {
      window.localStorage.setItem("users", JSON.stringify(listaUser));
      context.commit('updateUsers', listaUser)
    },

    addFavourites(context, payload) {
      const favourites = context.state.favourites;
      favourites.push(payload);
      context.commit("updateFavourites", favourites);
    },

    removeFavourites(context, payload) {
      const favourites = context.state.favourites;
      const libroAQuitar = favourites.find(x => x.id == payload.id);
      let favouritesIndex = favourites.indexOf(libroAQuitar);
      favourites.splice(favouritesIndex, 1);
      context.commit('updateFavourites', favourites)
    }
  },

  modules: {},
});
