import NextAuth from 'next-auth';
import axios from 'axios';
import CredentialsProvider from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';
import { NextApiRequest, NextApiResponse } from 'next';

const providers = [
  CredentialsProvider({
    name: 'Credentials',
    credentials: {
      username: { label: 'username', type: 'text' },
      password: { label: 'Password', type: 'password' },
    },
    // @ts-ignore
    authorize: async (
      credentials: { username: string; password: string },
      _req: any,
    ): Promise<{
      status: string;
      data: { token: string; username: string; role: string; id: string };
    } | null> => {
      try {
        const res = await axios.post('http://localhost:7600/auth/login', {
          username: credentials.username,
          password: credentials.password,
        });

        if (res.data) {
          const user: any = jwtDecode(res.data.data.accessToken);
          user.token = res.data.data.accessToken;
          user.name = user.username;
          user.id = user.id.toString();
          user.image = user.avatar;
          return { status: 'success', data: user };
        }

        return null;
      } catch (e: any) {
        throw new Error(e.response.data.message);
      }
    },
  }),
];

const callbacks = {
  jwt: ({ token, user, trigger, session }: any) => {
    if (trigger === 'update') {
      // eslint-disable-next-line no-param-reassign
      token = { ...token, ...session };
    }
    if (user) {
      // eslint-disable-next-line no-param-reassign
      token = { ...token, ...user.data };
    }

    return token;
  },
  session: ({ session, token }: any) => {
    // console.log(token);

    if (token) {
      // eslint-disable-next-line no-param-reassign
      session = { ...session, user: token };
    }

    return session;
  },
};

const options = {
  providers,
  callbacks,

  pages: {
    signIn: '/login',
    error: '/login',
  },
};

const authHandler = (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

export default authHandler;
