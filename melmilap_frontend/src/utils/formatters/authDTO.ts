import { ILoginData, ISignUpData } from "../interface/auth";

export const authDTO = {
    send: (data: any) => {
        console.log(data);
        return {
            first_name: data?.first_name || "",
            last_name: data?.last_name || "",
            email: data?.email || "",
            gender: data?.gender || "",
            password: data?.password || "",
            horoscope: data?.horoscope || "",

            tags: data?.tags || "",
            description: data?.description || "",
            status: data?.status || "",

            date_of_birth: data?.date_of_birth || "",
            relationship_status: data?.relationship_status || "",
            contact: data?.contact || "",
            is_verified: true,
            address: {
                province: data?.province || "",
                district: data?.district || "",
                city: data?.city || "",
                street: data?.street || "",
                municipality: data?.municipality || "",
                latitude: data?.latitude || "",
                longitude: data?.longitude || "",
                contact: "test" || "",
            },
            user_details: {
                height: data?.height || "",
                weight: data?.weight || "",
                religion: data?.religion || "",
                cast: data?.cast || "",
                education: data?.education || "",
                father_name: data?.father_name || "",
                income: data?.income || "",
                grandfather_name: data?.grandfather_name || "",
            },
            hobbies:
                data?.hobbyTitle?.map((val: any) => ({
                    title: val || "",
                })) || [],
            social_links: data?.socialLinks || [],
            feature_images: [
                {
                    image_link: data?.profile_picture || "",
                },
            ],
        };
    },
    login: (data: ILoginData) => {
        return {
            username: data?.email,
            password: data?.password,
        };
    },
};
