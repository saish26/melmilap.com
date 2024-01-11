import Image from "next/image";
import heroImg from "@/assets/images/heroImage.png";
import { TypeAnimation } from "react-type-animation";
import { ActionIcon } from "@mantine/core";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  return (
    <main className="dynamic-x-padding dynamic-y-padding ">
      <div className="absolute  h-[65%] right-24">
        <Image src={heroImg} alt="" height={2000} width={2000} />
      </div>
      <div className="flex h-[70vh] flex-col justify-center w-1/2 pl-28 pr-10">
        <div className=" border-2 border-blue-700 space-y-3 ">
          <div className="space-x-2 text-4xl tracking-wider  ">
            <span className=" font-normal font-serif ">Welcome to</span>
            <span className="text-theme">melmilap.com</span>
          </div>
          <TypeAnimation
            sequence={[
              "Fostering Love Beyond Boundaries, Where Dreams Unite and Journeys Begin – Discover Your Forever at MelMilap.com, Where Every Connection is a Celebration of Endless Love and Lasting Bliss!",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1.5rem",
              display: "inline-block",
              color: "#A0A3BD",
              fontFamily: "serif",
            }}
            repeat={Infinity}
          />
        </div>
        <div
          className="text-placeholder mt-20 font-normal font-serif  py-4 text-2xl shadow-md border-custom pl-10 pr-5 flex justify-between cursor-pointer"
          onClick={() => router.push("/login")}
        >
          <span>Find your match</span>
          <ActionIcon>
            <MoveRight />
          </ActionIcon>
        </div>
      </div>
    </main>
  );
};

export default Landing;
