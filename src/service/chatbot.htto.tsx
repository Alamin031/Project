/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
// /* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
import { toast } from 'react-toastify';
import { getSession } from 'next-auth/react';
import * as dotenv from 'dotenv';

dotenv.config();

export const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
const api = axios.create({
  baseURL: `${apiEndpoint}`,
  timeout: 5000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
},
});

api.interceptors.request.use(async (req) => {
  type User = {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    token?: string;
  };

  type Session = {
    user?: User;
  };

  const session: Session | null = await getSession();

  if (session) {
    req.headers.Authorization = `Bearer ${session?.user?.token}`;
  }
  return req;
});

const responseBody = (response: any) => response?.data;
const errorBody = (error: any) => {
  if (error.response) {
    toast.error(error.response.data.message);
  } else {
    error.message && toast.error(error.message);
  }
  return {
    success: false,
  };
};

const Chatbotrequests = {
  get: (url: string) => api.get(url).then(responseBody),
  post: (url: string, body: any) => api.post(url, body).then(responseBody),
  put: (url: string, body: any) => api.put(url, body).then(responseBody),
  patch: (url: string, body: any) => api.patch(url, body).then(responseBody),
  del: (url: string) => api.delete(url).then(responseBody),
};
export default Chatbotrequests;
