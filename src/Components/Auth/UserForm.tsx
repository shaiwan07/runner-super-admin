"use client";
import { CreateAccount, DontHaveAccount, EmailAddress, ForgotPassword, Href, ImagePath, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount } from "@/Constant";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import imageOne from "../../../public/assets/images/logo/logo-1.png"
import imageTwo from "../../../public/assets/images/logo/logo.png"
import { UserSocialApp } from "./UserSocialApp";

const UserForm = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("Test123@gmail.com");
  const [password, setPassword] = useState("Test@123");
  const router = useRouter();
 
  const formSubmitHandle = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();                                                                                  
    const result = await signIn("credentials", {
      email,   
      password,  
      redirect: false,
      callbackUrl: "/dashboard/",
    });
  
    if (result?.ok) {
      toast.success("successfully Logged in Rediract......")
      router.push("/dashboard/");
    } else {     
      toast.error("Invalid Credentaial...");
    }
  };

  return (
    <div>
      <div>
        <Link className="logo" href="/dashboard/">
        <Image className="img-fluid" src={`${ImagePath}/custom/logo.png`} width={200} height={38} alt="" />
        </Link>
      </div>
      <div className="login-main">
        <Form className="theme-form" onSubmit={(event) => formSubmitHandle(event)}>
          <h4>{SignInToAccount}</h4>
          <p>{'Enter your email & password to login'}</p>
          <FormGroup>
            <Label className="col-form-label">{EmailAddress}</Label>
            <Input type="email" defaultValue={email} onChange={(event) => setEmail(event.target.value)} placeholder="Test123@gmail.com" />
          </FormGroup>
          <FormGroup>
            <Label className="col-form-label">{Password}</Label>
            <div className="form-input position-relative">
              <Input type={show ? "text" : "password"} defaultValue={password} onChange={(event) => setPassword(event.target.value)} placeholder="Test@123" />
              <div className="show-hide" onClick={() => setShow(!show)}>
                <span className="show" />
              </div>
            </div>
          </FormGroup>
          <div className="form-group mb-0">
            <div className="checkbox p-0">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
            </div>
            <Link className="link" href={Href}>{ForgotPassword}?</Link>
            <div className="text-end mt-3">
              <Button type='submit' color="primary" block>{SignIn}</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default UserForm;