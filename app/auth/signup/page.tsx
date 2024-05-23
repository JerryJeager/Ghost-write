"use client";
import Spinner from "@/app/components/ui/Spinner";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormData = {
  email: string;
  username: string;
  password: string;
  password2: string;
};

const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    username: "",
    password: "",
    password2: "",
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
    setError("")
    if (formData.password !== formData.password2) {
      setError("password not confirmed");
      setIsLoading(false)
      return;
    }

    const reqData = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
    };
    try {
      const res = await axios.post(
        "https://ghost-write.onrender.com/api/v1/users/signup",
        reqData
      );
      if (res.status === 201) {
        router.push("/auth/login");
      }
    } catch (err: any) {
    //   setError(err.message);
       setError("user already exists")
        return
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-white text-center text-2xl mt-6">
        Create an Account
      </h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="signup rounded-md border border-gray1 p-4 mx-6 mt-12 flex flex-col gap-4 items-center"
      >
        <label htmlFor="">
          <p>Email</p>
          <input
            required
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <p>Username</p>
          <input
            required
            type="text"
            name="username"
            placeholder="Indigohotdog"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <p>Password</p>
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          <p>Confirm Password</p>
          <input
            required
            type="password"
            name="password2"
            placeholder="confirm password"
            value={formData.password2}
            onChange={handleChange}
          />
        </label>
        <p>{error && <span className="mt-2 text-red-600">{error}</span>}</p>
        {!isLoading && <button
          type="submit"
          className="bg-darkGreen p-2 text-white w-[200px] rounded-md"
        >
          Signup
        </button> }
        {isLoading && <button type="button" className="bg-darkGreen p-2 text-white w-[200px] rounded-md">
            <Spinner bg={"darkGreen"} />
        </button>}


        <p className="text-white">
          Already have an account?{" "}
          <Link className="text-primary" href={"/auth/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default page;
