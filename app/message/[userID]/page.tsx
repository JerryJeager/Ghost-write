"use client"
import MessageForm from "@/app/components/MessageForm";
import Spinner from "@/app/components/ui/Spinner";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setILoading] = useState(false);
  const [error, setError] = useState("");
  const params = useParams<{ userID: string }>();
  const getUser = async () => {
    setILoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://ghost-write.onrender.com/api/v1/users/${params.userID}`
      );

      if (res.status == 200) {
        setUsername(res.data.username);
        return;
      }
    } catch {
      setError("user not found");
    } finally {
      setILoading(false);
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
    {
      isLoading && <div className="mt-14">
        <Spinner bg="transparent" />
      </div>
    }
    {
      !isLoading && !username && error &&(
        <div className="text-center px-[10%]">
          <h2 className="bg-green-radiant4 text-white font-black mt-8 text-2xl text-center">
          {error}
          </h2>
          <Link className="mx-auto w-[120px]" href={"/"}>
            <button className="bg-darkGreen p-2 rounded-md mt-8 text-white">Back Home</button>
          </Link>
        </div>
      )
    }
      {!isLoading && username && (
        <section className="px-[10%] pt-4">
          <h2 className="bg-green-radiant4 text-white font-black mt-8 text-xl lg:text-2xl text-center">
            Send an anonymous message to{" "}
            <span className="text-primary">{username}</span>
          </h2>

          <MessageForm userID={params.userID}/>
        </section>
      )}
    </>
  );
};

export default page;
