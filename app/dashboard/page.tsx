"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ShareLink from "../components/ShareLink";
import axios from "axios";
import Spinner from "../components/ui/Spinner";
import MessageCard from "../components/ui/MessageCard";

type Message = {
  id: string;
  message: string;
  created_at: string;
};

const Dashboard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isMessageLoading, setIsMessageLoading] = useState(false);
  //   const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState<string | null>("");
  const [userID, setUserID] = useState<string | null>("");
  const getUser = async (userID: string) => {
    setIsLoading(true);
    // setError("");
    try {
      const res = await axios.get(
        `https://ghost-write.onrender.com/api/v1/users/${userID}`
      );

      if (res.status == 200) {
        setUsername(res.data.username);
        return;
      }
    } catch {
      //   setError("user not found");
    } finally {
      setIsLoading(false);
    }
  };
  const getMessage = async (userID: string, token: string) => {
    setIsMessageLoading(true);
    // setError("");
    try {
      const res = await axios.get(
        `https://ghost-write.onrender.com/api/v1/message/${userID}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // console.log(res.status)/
      if (res.status == 200) {
        setMessages(res.data);
        return;
      }
    } catch {
      //   setError("user not found");
      router.push("/auth/login");
    } finally {
      setIsMessageLoading(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = sessionStorage.getItem("token");
      const userID = sessionStorage.getItem("user_id");
      setToken(token || "");
      setUserID(userID || "");

      if (!token || !userID) {
        router.push("/auth/login");
      } else {
        getUser(userID);
        getMessage(userID, token);
      }
    }
  }, []);
  return (
    <>
      {isLoading && (
        <div className="mt-14">
          <Spinner bg="transparent" />
        </div>
      )}
      {!isLoading && userID && username && (
        <section className="px-[10%] mt-4">
          <h2 className="text-white text-2xl">
            Welcome <span className="text-primary">{username}</span>,
          </h2>

          <ShareLink userID={userID} />
          <div className="mt-8">
            <h3 className="text-white">My Messages</h3>
            {!isMessageLoading &&
              messages.length > 0 &&
              messages.map((m: Message) => (
                <MessageCard
                  key={m.id}
                  message={m.message}
                  created_at={m.created_at}
                />
              ))}
            {!isMessageLoading && messages.length == 0 && (
              <p className="text-white mt-4">
                You don't have any anonymous messages yet!
              </p>
            )}
            {isMessageLoading && (
              <p className="text-white">loading messages...</p>
            )}
          </div>
        </section>
      )}
      ;
    </>
  );
};

export default Dashboard;
