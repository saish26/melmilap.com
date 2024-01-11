import { APIGetMatchedUsers } from "@/apis/dashboard/matches";
import LandingLayout from "@/layouts/LandingLayout";
import MatchesLayout from "@/layouts/MatchesLayout";
import { Paper } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import image from "@/assets/images/profile.avif";

const Matches = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<any>();

  const getMatchedUsers = async () => {
    setLoading(true);
    const id = localStorage.getItem("user-id");
    const res = await APIGetMatchedUsers(id);
    setUser(res);
    setLoading(false);

    try {
    } catch (error) {}
  };

  useEffect(() => {
    getMatchedUsers();
  }, []);
  return (
    <main className="dynamic-x-padding dynamic-y-padding grid grid-cols-4 gap-6 ">
      {user?.map((val: any, idx: number) => {
        return (
          <Paper className=" cursor-pointer shadow-xl" key={idx}>
            <Image
              src={
                val?.matchedUser?.profile_image == null
                  ? image
                  : val?.matchedUser?.profile_image
              }
              alt={"ss"}
              height={1024}
              width={1024}
              className="rounded-t-md"
            />

            <div className="font-semibold p-4 line-clamp  line-clamp-3 text-base ">
              <span className="px-1">{val?.matchedUser?.first_name}</span>
              <span>{val?.matchedUser?.last_name}</span>
            </div>
          </Paper>
        );
      })}
    </main>
  );
};

Matches.Layout = MatchesLayout;
export default Matches;
