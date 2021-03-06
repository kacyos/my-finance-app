import InputGroup from "../components/InputGroup";
import Logo from "../assets/Logo.svg";
import loginImg from "../assets/loginImg.png";

import Button from "../components/Button";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/solid";

export default function CreateAccount() {
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
        <img className="mx-auto h-40 w-auto" src={Logo} alt="logo My Finance" />

        <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-800">
          Crie sua conta
        </h2>

        <p className="mt-1 text-center text-sm text-gray-600">
          Ou{" "}
          <Link
            to="/"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            faça seu login
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
          />

          <InputGroup
            lblContent="Password"
            inputType="password"
            inputComplete="false"
            inputId="Password"
            inputName="Password"
            placeholder="Senha"
          />

          <InputGroup
            lblContent="Confirme sua senha"
            inputType="password"
            inputComplete="false"
            inputId="repeat-password"
            inputName="repeat-password"
            placeholder="Senha"
          />

          <div className="flex justify-center mt-4">
            <Button className="btn md btn-blue">
              <span className="flex items-center gap-2 text-blue-100">
                <UserCircleIcon className="h-5 w-5" aria-hidden="true" />
                Criar conta
              </span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
