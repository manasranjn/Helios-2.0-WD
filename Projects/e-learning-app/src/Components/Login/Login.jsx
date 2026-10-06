import React, { useState } from "react";
import assets from "../../assets/assets";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(false);

  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="max-w-sm lg:max-w-4xl mx-auto my-10 bg-[#e1e1e1] rounded-lg p-6 flex justify-center gap-10">
      <div className="hidden lg:block lg:w-1/2 p-4 bg-white rounded-lg">
        <img
          src={login ? assets.login : assets.register}
          alt="login img"
          className="w-full rounded-lg object-cover h-full"
        />
      </div>
      <div className="flex flex-col items-center lg:w-1/2 justify-center">
        <h6 className="text-sm ">Welcome to TOTC</h6>
        <div className="rounded-full bg-[#49bbbd89]  p-2 flex gap-2 text-white my-6">
          <button
            className={`${login && "bg-[#49BBBD]"} px-4 py-1 rounded-full w-26 cursor-pointer`}
            onClick={() => {
              setLogin(true);
              setRegister(false);
            }}
          >
            Login
          </button>
          <button
            className={`${register && "bg-[#49BBBD]"} px-4 py-1 rounded-full w-26 cursor-pointer`}
            onClick={() => {
              setLogin(false);
              setRegister(true);
            }}
          >
            Register
          </button>
        </div>

        {login && (
          <form action="" className="flex flex-col w-full">
            <label htmlFor="" className="mb-2">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your usename/Email"
              className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              className="border-2 border-[#49bbbd] p-2 rounded-full bg-white outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-end mt-5">
              <button className="bg-[#49BBBD] px-4 py-1 rounded-full w-26 cursor-pointer text-white">
                Login
              </button>
            </div>
          </form>
        )}

        {register && (
          <form action="" className="flex flex-col w-full">
            <label htmlFor="" className="mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your email address"
              className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="" className="mb-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="Enter Your usename"
              className="border-2 border-[#49bbbd] p-2 rounded-full mb-6 bg-white outline-none"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <label htmlFor="" className="mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              className="border-2 border-[#49bbbd] p-2 rounded-full bg-white outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end mt-10">
              <button className="bg-[#49BBBD] px-4 py-1 rounded-full w-26 cursor-pointer text-white">
                Register
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
