"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Login = {
  username: string;
  password: string;
};

const LoginPage = () => {
  const [input, setInput] = useState<Login>({
    username: "",
    password: "",
  });

  const handleLogin = () => {
    if (input.username == "Admin" || input.password == "Admin") {
      toast.success("Login Success");
      return redirect("/cpanel/dashboard");
    } else {
      toast.error("Wrong Username or Password ");
    }
  };

  return (
    <div className="w-full h-screen mx-2 md:mx-0">
      <div className="h-full flex justify-center items-center">
        <div className="bg-black/30 p-4 rounded-md w-md  border">
          <h1 className="text-center text-2xl md:text-4xl 2xl:text-6xl font-bold">
            Login Page
          </h1>
          <div className="my-4 2xl:my-8 ">
            <label htmlFor="username" className="font-bold">
              Usename:
            </label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Admin"
              className="px-4 py-6 bg-white text-xl"
              onChange={(e) => setInput({ ...input, username: e.target.value })}
            />
          </div>
          <div className="my-4 ">
            <label htmlFor="password" className="font-bold">
              Password:
            </label>
            <Input
              name="password"
              type="password"
              placeholder="*******"
              className="px-4 py-6 bg-white text-xl"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <Button
            onClick={handleLogin}
            className="my-4 md:my-8 px-4 py-6 font-bold w-full text-xl md:text-2xl bg-cyan-500 hover:bg-cyan-900 cursor-pointer"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
