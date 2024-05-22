import Image from "next/image";
import hand from "../../public/images/hand.png"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="lg:flex h-screen bg-dark1">
        <div className="lg:w-1/2 hidden lg:flex justify-center items-center border-r border-r-gray1 bg-green-radiant3">
            <Image placeholder="blur" alt="hand image" src={hand} />
        </div>
        <div className="lg:w-1/2">
            {children}
        </div>
    </section>
  );
}
