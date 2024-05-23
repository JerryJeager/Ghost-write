import Image from "next/image"
import eye from "../../../public/images/eye.png"

const page = () => {
  return (
    <section className="px-[10%] flex flex-col justify-center items-center">
        <h2 className="bg-green-radiant4 text-white font-black mt-8 text-2xl text-center">
            Your anonymous message was sent sucessfully
        </h2>
        <Image placeholder="blur"  className="mt-6" alt="eye image" src={eye} />
    </section>
  )
}

export default page