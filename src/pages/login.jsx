import { Form, Link, redirect, useSubmit } from "react-router-dom";
import logo from "../assets/logo.svg";
import { reInitLoader, validation } from "../services/features/user";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function action() {
  return redirect("/Home/");
}
export default function Login() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let dispatch = useDispatch();
  let status = useSelector((state) => state.user);
  const form = useRef(null);
  let canSend = !(Boolean(email) && Boolean(pass));
  const submit = useSubmit();
  useEffect(() => {
    if (status === "success") {
      submit(form.current, { method: "POST" });
      dispatch(reInitLoader());
    }
  }, [status]);
  function submitHandler(eventObject) {
    eventObject.preventDefault();
    const draft = {
      type: "login",
      body: {
        email: email,
        pass: pass,
      },
    };
    dispatch(validation(draft));
  }
  return (
    <main className="min-h-screen bg-[#10141E]">
      <header className="mb-[83px] flex justify-center pt-[78px]">
        <span>
          <img src={logo} />
        </span>
      </header>

      <Form
        ref={form}
        method="post"
        className="m-auto grid w-[400px] max-w-[95%] gap-[40px] rounded-[20px] bg-[#161D2F] p-[32px]"
      >
        <h1 className="text-[32px] font-light tracking-[-0.5px] text-white">
          Login
        </h1>
        <div>
          <input
            className="mb-[24px] w-full border-b border-[#5A698F] bg-transparent pb-[17px] text-[15px] font-light text-white outline-none invalid:border-red-600 placeholder-shown:invalid:border-[#5A698F]"
            type="email"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
          <div className="relative">
            <input
              className="peer w-full border-b border-[#5A698F] bg-transparent pb-[17px] text-[15px] font-light text-white outline-none invalid:border-red-600"
              type="password"
              value={pass}
              onInput={(e) => setPass(e.target.value)}
              required
              placeholder="Password"
            />
            <span className="absolute right-0 top-[50%] hidden translate-y-[-50%] text-[13px] font-light text-[#FC4747] peer-invalid:inline-block">
              Can’t be empty
            </span>
          </div>
        </div>

        <div>
          <button
            disabled={canSend}
            className={`h-[48px] w-full rounded-[6px]  ${
              status === "pending"
                ? "bg-blue-600"
                : status === "success"
                ? "bg-green-500"
                : "bg-[#FC4747]"
            } text-[15px] font-light text-white`}
            onClick={(e) => submitHandler(e)}
          >
            {status === "pending" ? "processing..." : "Login to your account"}
          </button>
          <p className="m-auto mt-[24px] w-fit text-[15px] font-light text-white">
            Don't have an account ?{" "}
            <Link className="text-[#FC4747]" to={"/signUp"}>
              Sign Up
            </Link>
          </p>
        </div>
      </Form>
    </main>
  );
}
