import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareLink = ({userID}: {userID: string}) => {
  const url =
    `https://ghost-write.vercel.app/${userID}`;
  return (
    <div className="mt-8">
      <p className="text-white">
        Share your unique GhostWrite link to receive anonymous messages. Simple,
        secure, and private.
      </p>
      <div className="flex gap-2 mt-2">
        <FacebookShareButton url={url} children={<FacebookIcon round={true} size={40} />} />
        <TwitterShareButton url={url} children={<TwitterIcon round={true} size={40} />} />
        <WhatsappShareButton url={url} children={<WhatsappIcon round={true} size={40} />} />
      </div>
    </div>
  );
};

export default ShareLink;
