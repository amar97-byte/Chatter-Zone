import React, { useState } from "react";
import Background from "../../assets/login2.png";
import Victory from "../../assets/victory.svg";
import { Tabs, TabsList } from "@/components/ui/tabs";
import { TabsContent, TabsTrigger } from "@radix-ui/react-tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Auth = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async()=> {
    
  }
  
  const handleSignup = async()=> {

  }

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div
        className="h-[80vh] bg-white border-2 border-white text-opacity-90 shadow-2xl w-[80vw]md:w-[90vw]
      lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2"
      >
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
              <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
              <img src={Victory} alt="" className="h-[100px]" />
            </div>
            <p className="font-medium text-center ">
              Fill in the details to get started with the best chat app!
            </p>
          </div>

          <div className="flex items-center justify-center w-full">
            <Tabs>
              <TabsList className="bg-transparent rounded-none w-full ">
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 "
                  value="login"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger
                  className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-300 "
                  value="signup"
                >
                  SignUp
                </TabsTrigger>
              </TabsList>
              <TabsContent className="flex flex-col gap-5 my-10" value="login">
                <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                 <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <Button onClick={handleLogin} className="rounded-full p-6 "  >Login</Button>
              </TabsContent>
              <TabsContent className="flex flex-col gap-5 my-10" value="signup">
                 <Input
                  placeholder="Email"
                  type="email"
                  className="rounded-full p-6"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                 <Input
                  placeholder="Password"
                  type="password"
                  className="rounded-full p-6"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                 <Input
                  placeholder="Confirm Password"
                  type="password"
                  className="rounded-full p-6"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                />
                <Button onClick={handleSignup} className="rounded-full p-6 "  >SignUp</Button>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="hidden xl:flex  justify-center items-center">
          <img src={Background} alt="BACKGROUND LOGIN" className="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
