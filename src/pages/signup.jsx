import { Form, Link, redirect } from "react-router-dom";
import logo from "../assets/logo.svg";
export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
  const RP = formData.get("repeated");
  const P = formData.get("password");
  if (RP === P) return redirect("/Home");
  alert("passwords doesn't match!");
  return null;
}
export default function Signup() {
  return (
    <main className="min-h-screen bg-[#10141E]">
      <header className="mb-[83px] flex justify-center pt-[78px]">
        <span>
          <img src={logo} />
        </span>
      </header>

      <Form
        method="post"
        className="m-auto grid w-[400px] max-w-[95%] gap-[40px] rounded-[20px] bg-[#161D2F] p-[32px]"
      >
        <h1 className="text-[32px] font-light tracking-[-0.5px] text-white">
          Sign Up
        </h1>
        <div>
          <input
            className="mb-[24px] w-full border-b border-[#5A698F] bg-transparent pb-[17px] pl-[16px] text-[15px] font-light text-white outline-none invalid:border-red-600 placeholder-shown:invalid:border-[#5A698F] "
            type="email"
            required
            placeholder="Email address"
          />

          <div className="relative mb-[24px]">
            <input
              className=" peer w-full border-b border-[#5A698F] bg-transparent pb-[17px] pl-[16px] text-[15px] font-light text-white outline-none invalid:border-red-600"
              type="password"
              name="password"
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
            required
            placeholder="Repeat password"
          />
        </div>

        <div>
          <button className="h-[48px] w-full rounded-[6px] bg-[#FC4747] text-[15px] font-light text-white">
            Create an account
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
