import ghost from "../public/images/ghost-write-icon.png"
import Image from "next/image"
export default function Home() {
  return (
    <main className="">
      <h1 className="text-green-700">Ghost Write</h1>
      <Image alt="icon image" src={ghost} width={200} />
    </main>
  );
}
