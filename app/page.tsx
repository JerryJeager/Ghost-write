import Image from "next/image";
import eye from "../public/images/eye.png";

export default function Home() {
  return (
    <main className="bg-dark1 h-screen px-[10%] text-center py-10">
      <h2 className="font-black text-2xl lg:text-4xl text-primary">
        Share Your Thoughts Anonymously
      </h2>
      <p className="text-white text-sm lg:text-lg mt-6 lg:w-[60%] mx-auto bg-green-radiant">
        Welcome to GhostWrite, the platform for sending anonymous messages.
        Share secrets, give honest feedback, or express yourself without
        revealing your identity. Our secure, easy-to-use platform ensures your
        privacy. Speak freely and connect without boundaries with GhostWrite.
      </p>
      <Image alt="eye image" src={eye} width={300} className="mx-auto mt-4" />

      <button className="bg-primary rounded-md text-white p-2 mt-4 lg:mt-12">
        Get Started
      </button>
    </main>
  );
}
