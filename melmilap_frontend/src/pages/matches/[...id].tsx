import Image from "next/image";
import React, { useEffect, useState } from "react";
import image from "@/assets/images/profile.avif";
import { Badge, Button, Divider } from "@mantine/core";
import { APIGetSingleUser } from "@/apis/dashboard/matches";
import { useRouter } from "next/router";
import { userDetailsDTO } from "@/utils/formatters/userDetailDTO";

const UserDetails = () => {
    const router = useRouter();
    const [details, setDetails] = useState<any>();
    const [userDetails, setUserDetails] = useState<any>();

    const id = router.query.id;

    const getSingleUserDetails = async () => {
        try {
            let id = localStorage.getItem("user-id");
            const res = await APIGetSingleUser(id);
            setDetails(res);
            const userDetails = userDetailsDTO.receive(res);
            setUserDetails(userDetails);
        } catch (error) {}
    };
    useEffect(() => {
        getSingleUserDetails();
    }, []);
    return (
        <main className="grid grid-cols-3 p-[8rem]">
            <section className="col-span-1 flex justify-end items-center">
                <div className="h-[40rem] w-[28rem] rounded-md ">
                    <Image
                        src={details?.feature_images[0]?.image_link}
                        alt="profile"
                        height={2000}
                        width={2000}
                        className="rounded-md object-cover"
                    />
                </div>
            </section>
            <section className="col-span-2">
                <div className="bg-[#F2F2F2] p-10 mt-4">
                    <div>
                        <div className="text-2xl">
                            <span>{details?.first_name}</span>
                            <span className="px-2">{details?.last_name}</span>
                        </div>
                        {details?.tags && (
                            <div className="py-3">
                                <Badge
                                    bg={
                                        "linear-gradient(180deg, #52DDDD 0%, #00B6B6 100%)"
                                    }
                                    className="px-3 py-2"
                                    size="lg"
                                >
                                    <div className=" text-white font-light ">
                                        {details?.tags}
                                    </div>
                                </Badge>
                            </div>
                        )}
                        {details?.status && (
                            <div className="">"{details?.status}"</div>
                        )}

                        <div className="py-2">
                            <Button
                                size={"md"}
                                className="bg-theme hover:bg-theme font-normal"
                            >
                                Connect
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="px-10 py-8 space-y-2">
                    <div className=" text-black">About me:</div>
                    <div className="text-[#626262]">{details?.description}</div>
                </div>
                <div className="flex space-x-5 py-2 px-10">
                    {details?.hobbies?.map((val: any, idx: number) => {
                        return (
                            <Badge
                                variant="outline"
                                color={"cyan"}
                                size="lg"
                                className="py-2 px-5"
                                key={idx}
                            >
                                {val?.title}
                            </Badge>
                        );
                    })}
                </div>

                <div className="grid grid-cols-3 gap-4 px-10 py-5 ">
                    {userDetails?.map((val: any, idx: any) => (
                        <div key={idx} className="flex items-center gap-2 ">
                            <span>{val?.icon}</span>
                            <span>{val?.label}</span>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default UserDetails;
