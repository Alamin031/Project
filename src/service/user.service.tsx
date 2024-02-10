import requests from './http';

const UserServices = {
  getUserById(id: String | number) {
    return requests.get(`/users/${id}`);
  },
  addUser(body: any) {
    return requests.post(`/users`, body);
  },

  updateuser(body: any, id: String | number) {
    return requests.patch(`/users/${id}`, body);
  },
  deleteUser(id: string | number | null) {
    return requests.del(`/users/${id}`);
  },
  // password(body: any) {
  //   return requests.patch(`/users/password`, body);
  // }
  password(email: string, password: string, body: any) {
    return requests.patch(`/users/password?email=${email}&password=${password}`, body);
  }
};

export default UserServices;
