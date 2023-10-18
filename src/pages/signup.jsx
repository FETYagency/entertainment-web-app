import { Form, Link, redirect, useSubmit } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reInitLoader, validation } from "../services/features/user";
export async function action({ request }) {
  return redirect("/Home/");
}
export default function Signup() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState({ pass: "", confirmation: "" });
  const dispatch = useDispatch();
  const form = useRef(null);
  const submit = useSubmit();
  const status = useSelector((state) => state.user);
  useEffect(() => {
    if (status === "success") {
      submit(form.current, { method: "post" });
      dispatch(reInitLoader());
    }
  }, [status]);
  function handSubmit(eventObject) {
    eventObject.preventDefault();
    const draft = {
      type: "signup",
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
        method="post"
        ref={form}
        className="m-auto grid w-[400px] max-w-[95%] gap-[40px] rounded-[20px] bg-[#161D2F] p-[32px]"
      >
        <h1 className="text-[32px] font-light tracking-[-0.5px] text-white">
          Sign Up
        </h1>
        <div>
          <input
            className="mb-[24px] w-full border-b border-[#5A698F] bg-transparent pb-[17px] pl-[16px] text-[15px] font-light text-white outline-none invalid:border-red-600 placeholder-shown:invalid:border-[#5A698F] "
            type="email"
            onInput={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Email address"
          />

          <div className="relative mb-[24px]">
            <input
              className=" peer w-full border-b border-[#5A698F] bg-transparent pb-[17px] pl-[16px] text-[15px] font-light text-white outline-none invalid:border-red-600"
              type="password"
              name="password"
              onInput={(e) => setPass({ ...pass, pass: e.target.value })}
              value={pass.pass}
              required
              placeholder="Password"
            />
            <span className="absolute right-0 top-[50%] hidden translate-y-[-50%] text-[13px] font-light text-[#FC4747] peer-invalid:inline-block">
              Can’t be empty
            </span>
          </div>
          <input
            className="peer w-full border-b border-[#5A698F] bg-transparent pb-[17px] pl-[16px] text-[15px] font-light text-white outline-none invalid:border-red-600"
            type="password"
            name="repeated"
            onInput={(e) => setPass({ ...pass, confirmation: e.target.value })}
            value={pass.confirmation}
            required
            placeholder="Repeat password"
          />
        </div>

        <div>
          <button
            className={`h-[48px] w-full rounded-[6px] ${
              status === "pending"
                ? "bg-blue-600"
                : status === "success"
                ? "bg-green-500"
                : "bg-[#FC4747]"
            } text-[15px] font-light text-white`}
            onClick={(e) => handSubmit(e)}
          >
            {status === "pending" ? "processing..." : "Login to your account"}
          </button>
          <p className="m-auto mt-[24px] w-fit text-[15px] font-light text-white">
            Already have an account ?{" "}
            <Link className="text-[#FC4747]" to={"/"}>
              Login
            </Link>
          </p>
        </div>
      </Form>
    </main>
  );
}
