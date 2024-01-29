import {
    APIFindByInterest,
    APIGetMatchedUsers,
} from "@/apis/dashboard/matches";
import LandingLayout from "@/layouts/LandingLayout";
import MatchesLayout from "@/layouts/MatchesLayout";
import { Button, Modal, Paper } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import image from "@/assets/images/profile.avif";
import { useDisclosure } from "@mantine/hooks";
import CommonTextField from "@/components/common/form/CommonTextField";

const Matches = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const [opened, { open, close }] = useDisclosure(false);
    const [interest, setInterest] = useState();

    const id = localStorage.getItem("user-id");
    const getMatchedUsers = async () => {
        try {
            setLoading(true);
            const res = await APIGetMatchedUsers(id);
            setUser(res);
            setLoading(false);
        } catch (error) {}
    };

    const findByInterest = async () => {
        try {
            const res = await APIFindByInterest({ interest: interest }, id);
            setUser(res);
            close();
        } catch (error) {}
    };

    return (
        <main className="dynamic-x-padding dynamic-y-padding grid grid-cols-4 gap-6 ">
            <Modal opened={opened} onClose={close}>
                <div className=" text-lg py-2">
                    Describe the person you are looking for...
                </div>
                <CommonTextField
                    type="textarea"
                    placeholder=".eg: girls with radiant smiles and a kind heart, she 
                    admires those who exude confidence and have a genuine passion for life, 
                    making every moment unforgettable"
                    onChange={(e: any) => setInterest(e.target.value)}
                    value={interest}
                />
                <Button
                    size={"md"}
                    className="bg-theme hover:bg-theme font-normal"
                    onClick={findByInterest}
                >
                    Find
                </Button>
            </Modal>
            <div className="space-x-3 flex col-span-4">
                <div>
                    <Button
                        variant="outline"
                        color="#552A7B"
                        onClick={getMatchedUsers}
                    >
                        People with similar hobbies
                    </Button>
                </div>
                <div>
                    <Button variant="outline" onClick={open}>
                        Search by interest
                    </Button>
                </div>
            </div>
            {user?.map((val: any, idx: number) => {
                console.log(val);
                return (
                    <Paper
                        className=" cursor-pointer shadow-xl"
                        key={idx}
                        onClick={() =>
                            router.push(`matches/${val?.matchedUser?.id}`)
                        }
                    >
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
                            <span className="px-1">
                                {val?.matchedUser?.first_name}
                            </span>
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
