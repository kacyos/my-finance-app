import { api } from "../api";

const config = {
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json",
};

interface IUser {
  id: number;
  user: string;
  password: string;
}

async function login(name: string, password: string):Promise<IUser[]> {
  const response:IUser[] = await api.get("/users", {
    headers: { "X-Requested-With": "XMLHttpRequest" },
    responseType: "json",
    params: {
      name: name,
      password: password,
    },
  });

  return response;
}

export { login };
