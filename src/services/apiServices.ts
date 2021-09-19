import { api } from "../api";

const config = {
  headers: { "X-Requested-With": "XMLHttpRequest" },
  responseType: "json",
};

async function login(name: string, password: string) {
  const response = await api.get("/users", {
    params: {
      name: name,
      password: password,
    },
  });
  console.log(response.data);
}

export { login };
