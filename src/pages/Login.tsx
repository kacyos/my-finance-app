import InputGroup from "../components/InputGroup";
import Logo from "../assets/Logo.svg";
import loginImg from "../assets/loginImg.png";

import Button from "../components/Button";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/solid";
import { login } from "../services/apiServices"; 
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

interface IUser {
  id: number;
  user: string;
  password: string;
}

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const notify = () => toast.error("Login ou Senha inválidos")

  

  async function handleLogin(email:string, password:string) {
    const user = await login(email, password)
    
    if(!!user.length) {
      console.log("teste")
    }

    return notify()
  }

  return (
    <div className="grid grid-cols-2">
      <aside>
        <img
          className="object-cover h-screen w-full"
          src={loginImg}
          alt="logo My Finance"
        />
      </aside>

      <div className="w-full bg-gray-300 flex flex-col justify-center">
      
      <ToastContainer/>

        <img className="mx-auto h-40 w-auto" src={Logo} alt="logo My Finance" />

        <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-800">
          Faça seu Login
        </h2>

        <p className="mt-1 text-center text-sm text-gray-600">
          Ou{" "}
          <Link
            to="/criar-conta"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            crie sua conta
          </Link>
        </p>

        <form className="mx-auto w-1/2">
        
        <InputGroup
          lblContent="Email"
          inputType="email"
          inputComplete="email"
          inputId="Email"
          inputName="Email"
          placeholder="Email"
          onChange={(e:any) => {setEmail(e.target.value)}}
        />

        <InputGroup
          lblContent="Password"
          inputType="password"
          inputComplete="false"
          inputId="Password"
          inputName="Password"
          placeholder="Senha"
          onChange={(e:any) => {setEmail(e.target.value)}}
        />

        <div className="flex justify-center mt-4">
          <Button className="btn md btn-blue" onClick={() => handleLogin(email, password)}>
            <span className="flex items-center gap-2 text-blue-100">
              <LockClosedIcon className="h-5 w-5" aria-hidden="true" />
              Entrar
            </span>
          </Button>
        </div>
      </form>
    </div>
    </div >
  );
}
