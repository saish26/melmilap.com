import { APIRegisterUser } from "@/apis/auth/auth";
import AddressInfo from "@/components/modules/AddressInfo";
import LinksAndImage from "@/components/modules/LinksAndImage";
import PersonalInfo from "@/components/modules/PersonalInfo";
import useIsAuth from "@/hooks/useIsAuth";
import { authDTO } from "@/utils/formatters/authDTO";
import showNotify from "@/utils/notify";
import { Button, Stepper } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const router = useRouter();
  const isAuth = useIsAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);
  const [active, setActive] = useState(0);

  const {
    control,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<any>({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      gender: "",
      horoscope: "",
      date_of_birth: "",
      relationship_status: "",
      contact: "",
      profile_picture: "",
      is_verified: "",
      province: "",
      district: "",
      city: "",
      street: "",
      municipality: "",
      latitude: "",
      longitude: "",
      height: "",
      weight: "",
      religion: "",
      cast: "",
      education: "",
      father_name: "",
      income: "",
      grandfather_name: "",
      hobbyTitle: [],
      socialLinks: "",

      image_link: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const formatted = authDTO.send(data);
      console.log(formatted, "ss");
      const res = await APIRegisterUser(formatted);
      router.push("/login");
      showNotify("success", "User Registered Successfully!");
    } catch (error: any) {
      setLoading(false);
      showNotify("error", error);
      console.log(error);
    }
  };
  useEffect(() => {
    if (isAuth) {
      router.back();
    }
  }, [isAuth]);

  const nextStep = () => {
    setActive((current) => (current < 5 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <main className="w-full h-[100vh] flex justify-center items-center ">
      <div className=" card-layout p-5 lg:p-10 bg-white space-y-6  mt-10">
        <h1 className="text-title-active font-medium text-2xl lg:text-3xl pb-5">
          Register
        </h1>
        <Stepper
          color={"green"}
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Personal Details">
            <PersonalInfo
              prevStep={prevStep}
              control={control}
              errors={errors}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              handleNext={nextStep}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
            />
          </Stepper.Step>
          <Stepper.Step label="Address Details">
            <AddressInfo
              prevStep={prevStep}
              control={control}
              errors={errors}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              handleNext={nextStep}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
            />
          </Stepper.Step>
          <Stepper.Step label="Image And Links">
            <LinksAndImage
              prevStep={prevStep}
              control={control}
              errors={errors}
              onSubmit={onSubmit}
              handleSubmit={handleSubmit}
              handleNext={nextStep}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={"pt-4"}>
                All Steps Completed. Click back button to review or click submit
                button to submit the form
              </div>
              <div className={"col-span-12  text-end pt-6"}>
                <Button
                  size={"md"}
                  variant={"outline"}
                  className={"mr-4"}
                  onClick={() => prevStep()}
                  color="cyan"
                >
                  Back
                </Button>

                <Button size={"md"} type={"submit"} bg={"#008080"}>
                  Submit
                </Button>
              </div>
            </form>
          </Stepper.Completed>
        </Stepper>
        <div className="flex justify-end">
          <span>Aleady have an Account? </span>{" "}
          <span
            className="text-theme font-semibold px-2 cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </main>
  );
};

// Login.Layout = SmeNavBar;
export default Register;
