import {
  getAllUserApi,
  addUserApi,
  deleteUserApi,
  updateUserApi,
} from "../../api/users";

const user = {
  namespaced: true, // namspace chế độ module nghiêm ngặt
  state() {
    return {
      userList: [],
      searchName: "",
    };
  },
  getters: {
    userListByGenDer(state) {
      return state.userList.filter((user) => user.gender === "Nữ");
    },
    userListByName(state) {
      if (state.searchName !== "") {
        return state.userList.filter((user) =>
          user.name
            .toLocaleLowerCase()
            .includes(state.searchName.toLocaleLowerCase())
        );
      } else {
        return state.userList;
      }
    },
  },
  mutations: {
    getAllUserMutations(state, payload) {
      state.userList = [...payload];
    },
    setSeachNameMutations(state, searchName) {
      state.searchName = searchName;
    },
  },
  actions: {
    setNameSearch(context, payload) {
      context.commit("setSeachNameMutations", payload);
    },
    async ActionAddUser(context, payload) {
      await addUserApi(payload);
      context.dispatch("actionGetAllUser");
    },
    async ActionDeleteUser(context, payload) {
      await deleteUserApi(payload);
      context.dispatch("actionGetAllUser");
    },
    async ActionUpdateUser(context, payload) {
      await updateUserApi(payload);
      context.dispatch("actionGetAllUser");
    },
    async actionGetAllUser(context) {
      const payload = await getAllUserApi();
      context.commit("getAllUserMutations", payload);
    },
  },
};

export default user;
