import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center content-center min-h-screen min-w-screen">
      <Image src={"/FutureRobot.png"} alt="Future Robot Dev Logo" width={600} height={600} />
    </div>
  );
}
