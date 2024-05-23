"use client"
import Spinner from "@/app/components/ui/Spinner";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const reqData = {
      email: formData.email,
      password: formData.password,
    };
    try {
      const res = await axios.post(
        "https://ghost-write.onrender.com/api/v1/users/login",
        reqData
      );
      if (res.status === 201) {
        // console.log(res.data);
        sessionStorage.setItem("token", res.data.token)
        sessionStorage.setItem("user_id", res.data.user_id)
         router.push("/dashboard");
      }
    } catch (err: any) {
      //   setError(err.message);
    //   console.log(err)
      setError("invalid email or password");
      return;
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h2 className="text-white text-center text-2xl mt-6">
        Welcome back, Login
      </h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="login rounded-md border border-gray1 p-4 mx-6 mt-12 flex flex-col gap-4 items-center"
      >
        <label htmlFor="">
          <p>Email</p>
          <input
            required
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="youremail@gmail.com"
          />
        </label>
        <label htmlFor="">
          <p>Password</p>
          <input
            required
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="password"
          />
        </label>

        <p>{error && <span className="mt-2 text-red-600">{error}</span>}</p>
        {!isLoading && (
          <button
            type="submit"
            className="bg-darkGreen p-2 text-white w-[200px] rounded-md"
          >
            Login
          </button>
        )}
        {isLoading && (
          <button
            type="button"
            className="bg-darkGreen p-2 text-white w-[200px] rounded-md"
          >
            <Spinner bg={"darkGreen"} />
          </button>
        )}

        <p className="text-white">
          Don't have an account?{" "}
          <Link className="text-primary" href={"/auth/signup"}>
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
