import {
    Banknote,
    Calendar,
    Dumbbell,
    Globe2,
    GraduationCap,
    Heart,
    MapPin,
    Ruler,
    Users,
} from "lucide-react";

export const userDetailsDTO = {
    receive: (data: any) => {
        return [
            {
                icon: <Heart />,
                label: data?.relationship_status || "",
            },
            {
                icon: <MapPin />,
                label: data?.address?.street + "," + data?.address?.city,
            },
            {
                icon: <Calendar />,
                label: data?.date_of_birth,
            },
            {
                icon: <Ruler />,
                label: data?.user_details?.height,
            },

            {
                icon: <GraduationCap />,
                label: data?.user_details?.education,
            },
            {
                icon: <Banknote />,
                label: data?.user_details?.income,
            },
            {
                icon: <Users />,
                label: data?.user_details?.cast,
            },
            {
                icon: <Globe2 />,
                label: data?.user_details?.religion,
            },
            {
                icon: <Dumbbell />,
                label: data?.user_details?.weight,
            },
        ];
    },
};
