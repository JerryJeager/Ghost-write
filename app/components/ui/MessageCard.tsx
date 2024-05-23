import Image from "next/image";
import anon from "./../../../public/images/anon.png";
const MessageCard = ({
  message,
  created_at,
}: {
  message: string;
  created_at: string;
}) => {
  return (
    <div className=" bg-darkGreen mt-2 p-4 rounded-tr-2xl rounded-bl-2xl max-w-[500px]">
      <div className="flex gap-2 items-center w-fit bg-transparent">
        <Image width={30} alt="anon pic" src={anon} className="rounded-full" />
        <p className="text-slate-300 text-sm bg-darkGreen">Anonymous</p>
      </div>

      <p className="mt-2 text-white bg-transparent">{message}</p>
      <p className="text-slate-300 mt-2 text-xs bg-transparent">{created_at.slice(0, 10)}</p>
    </div>
  );
};

export default MessageCard;
