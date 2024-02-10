import requests from "./http";

const AdminServices = {
    loginAdmin(body: any) {
		return requests.post(`/auth/login`, body);
    },
    addUser(body: any)
    {
        return requests.post(`/users`, body)
    },
    // profile() {
    //     return requests.get(`/admin/profile`);
    // },
    updateProfile(body: any, id: String) {
        return requests.patch(`/users/${id}`, body);
    },
    deleteUser(id: String) {
        return requests.del(`/users/${id}`);
    },
    alluser() {
        return requests.get(`/users`);
    },
    forgetOTP(body: any) {
        return requests.post(`/users/forgettoken`, body);
    },
    verifyOTP(body: any) {
        return requests.post(`/users/verifyotp`, body);
    },
    resetPassword(body: any) {
        return requests.post(`/users/reset-password`, body);
    },

};

export default AdminServices;
