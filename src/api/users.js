import axios from "axios";

export const getAllUserApi = async () => {
  const res = await axios({
    method: "GET",
    url: "https://6448f89cb88a78a8f0f9161c.mockapi.io/api/v1/users",
  });

  return res.data;
};

export const addUserApi = async (user) => {
  await axios({
    method: "POST",
    url: "https://6448f89cb88a78a8f0f9161c.mockapi.io/api/v1/users",
    data: user,
  });
};

export const deleteUserApi = async (userId) => {
  await axios({
    method: "DELETE",
    url: `https://6448f89cb88a78a8f0f9161c.mockapi.io/api/v1/users/${userId}`,
  });
};

export const updateUserApi = async (user) => {
  const res = await axios({
    method: "PUT",
    url: `https://6448f89cb88a78a8f0f9161c.mockapi.io/api/v1/users/${user.id}`,
    data: user,
  });
  return res;
};
