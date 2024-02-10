import requests from './http';

const DomainrServices = {
  getUserById(id: String | number) {
    return requests.get(`/users/${id}`);
  },
  addUser(body: any) {
    return requests.post(`/users`, body);
  },

  updateuser(body: any, id: String | number) {
    return requests.patch(`/users/${id}`, body);
  },
  deleteDomain(id: string | number | null) {
    return requests.del(`/Domain/${id}`);
  },
};

export default DomainrServices;
