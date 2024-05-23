"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Spinner from "./ui/Spinner";

const MessageForm = ({ userID }: { userID: string }) => {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post(
        `https://ghost-write.onrender.com/api/v1/message/${userID}`,
        {
          message: message,
        }
      );
      if (res.status == 201) {
        router.replace("/message/success");
        return;
      }
    } catch {
      setError("network error, try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form action="" onSubmit={handleSubmit} className="mt-6 flex flex-col justify-center items-center">
      <div className="relative">
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          cols={30}
          rows={10}
          className="rounded-md outline-none border border-darkGreen shadow-md p-2 lg:p-4 mt-2 text-white w-[240px] lg:w-[400px] mx-auto"
          placeholder="Anonymous Message"
        ></textarea>
        {error && <p className="text-red-700">{error}</p>}
        {!isLoading && (
          <button
            type="submit"
            className="bg-darkGreen p-2 rounded-md self-end mt-4 text-white absolute -bottom-12 right-0 w-[120px]"
          >
            Send
          </button>
        )}
        {isLoading && (
          <button
            type="button"
            className="bg-darkGreen p-2 rounded-md self-end mt-4 text-white absolute -bottom-12 right-0 w-[120px]"
          >
            <Spinner bg="darkGreen" />
          </button>
        )}
      </div>
    </form>
  );
};

export default MessageForm;
