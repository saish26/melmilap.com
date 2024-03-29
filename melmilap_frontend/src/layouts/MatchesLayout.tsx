import CustomBadge from "@/components/common/form/CustomBadge";
import Logo from "@/components/partials/Logo";
import { Button, Header } from "@mantine/core";
import { useRouter } from "next/router";

import notify from "@/utils/helpers/notify";
import AuthRoute from "@/hoc/AuthRoute";

const MatchesLayout = ({ children }: { children: React.JSX.Element }) => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user-id");
        notify("success", "Logout Successfully...");
        router.push("/");
    };

    return (
        <AuthRoute redirect="/login">
            <main className="">
                <Header
                    height={70}
                    p="md"
                    className="flex items-center justify-between dynamic-x-padding "
                    withBorder={false}
                >
                    <section
                        className="hover:cursor-pointer py-2"
                        onClick={() => router.push("/")}
                    >
                        <Logo height={50} width={200} />
                    </section>
                    <section className="flex space-x-5 font-semibold">
                        <div
                            className={` cursor-pointer text-lg font-normal flex items-center justify-center ${
                                router.asPath == "/word" ? "text-[#008080]" : ""
                            }`}
                            onClick={() => router.push("/")}
                        >
                            Home
                        </div>
                        <div
                            className={` cursor-pointer text-lg font-normal flex items-center justify-center ${
                                router.asPath == "/word" ? "text-[#008080]" : ""
                            }`}
                            onClick={() => router.push("/")}
                        >
                            About
                        </div>
                        <div
                            className={` cursor-pointer text-lg font-normal flex items-center justify-center  ${
                                router.asPath == "/matches"
                                    ? "text-[#008080]"
                                    : ""
                            }`}
                            onClick={() => router.push("/matches")}
                        >
                            Matches
                        </div>

                        <div className="pl-10">
                            <Button
                                onClick={handleLogout}
                                className={` cursor-pointer bg-[#008080] hover:bg-[#008080ce]`}
                            >
                                Logout
                            </Button>
                        </div>
                    </section>
                </Header>

                <div className="bg-white h-[92vh]">{children}</div>
            </main>
        </AuthRoute>
    );
};

export default MatchesLayout;
