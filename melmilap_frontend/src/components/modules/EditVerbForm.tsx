import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import showNotify from "@/utils/notify";
import CommonSelect from "../common/form/CommonSelect";
import { Button, Divider } from "@mantine/core";
import { verbsDTO } from "@/utils/formatters/dictionaryDTO";

import { X } from "lucide-react";
import { APIUpdateTense, APIUpdateVerbs } from "@/apis/dashboard/dictionary";

const EditVerbForm = ({ data }: any) => {
  const [loading, setLoading] = useState(false);
  const [currField, setCurrField] = useState<any>();

  const router = useRouter();

  const {
    control,
    watch,
    getValues,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    defaultValues: {
      word: "",
      infinitive: "",
      partizipPrasents: "",
      partizipPerfekt: "",
      level: "",
      tense: [],
    },
  });
  const { append, fields, remove } = useFieldArray({
    control,
    name: "tense",
  });
  const handleAppend = () =>
    append({
      tens_title: "",
      i: "",
      you: "",
      you_plural: "",
      you_s_p: "",
      he_She_it: "",
      we: "",
      they: "",
      tenseId: "",
    });

  useEffect(() => {
    if (data) {
      setValue("word", data?.word?.word);
      setValue("infinitive", data?.word?.infinitive);
      setValue("partizipPrasents", data?.word?.partizipPrasents);
      setValue("partizipPerfekt", data?.word?.partizipPerfekt);
      getValues("level");
      setValue("level", data?.word?.level, { shouldValidate: true });
      getValues("tense");
      setValue("tense", data?.tens);
    }
  }, [data]);

  const onSubmit = async (val: any) => {
    try {
      setLoading(true);
      const formattedData = verbsDTO?.edit(val);
      const res = await APIUpdateVerbs(formattedData, data?.word?.id);

      router.reload();
      showNotify("success", res?.message);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      showNotify("error", "Unable to Update Verb...");
    }
  };
  const updateTense = async (val: any) => {
    try {
      setLoading(true);
      const filtered = val?.tense?.filter(
        (item: any) => item?.TenseID == currField?.TenseID
      );
      const formattedData = verbsDTO?.editTense(filtered[0]);
      const res = await APIUpdateTense(formattedData, currField?.TenseID);
      showNotify("success", res?.message);

      router.reload();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showNotify("error", "Unable to Update Verb...");
    }
  };

  return (
    <main className=" bg-white px-5 py-1">
      <section className="text-xl font-bold pt-3 pb-6">
        Add Verbs to dictionary
      </section>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-3 font-semibold">
            word <span className="px-1 font-light">(word)</span>
          </div>
          <div className="w-full ">
            <Controller
              name={"word"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }: any) => (
                <CommonTextField
                  {...field}
                  placeholder="word"
                  defaultValue={field?.tens_title}
                />
              )}
            />
          </div>
          <div className="pb-3 font-semibold">
            Infinitives <span className="px-1 font-light">(Infinitive)</span>
          </div>
          <div className="w-full ">
            <Controller
              name={"infinitive"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }) => (
                <CommonTextField {...field} placeholder="Deutsch" />
              )}
            />
          </div>
          <div className="pb-3 font-semibold">
            Present participle
            <span className="px-1 font-light">(Partizip Prasents)</span>
          </div>
          <div className="w-full ">
            <Controller
              name={"partizipPrasents"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  placeholder="Ich spreche Deutsch."
                />
              )}
            />
          </div>
          <div className="pb-3 font-semibold">
            Past participle
            <span className="px-1 font-light">(Partizip Perfekt)</span>
          </div>
          <div className="w-full ">
            <Controller
              name={"partizipPerfekt"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }) => (
                <CommonTextField {...field} placeholder="डोइच्" />
              )}
            />
          </div>
          <div className="pb-3 font-semibold">Level</div>
          <div className="w-full ">
            <Controller
              name={"level"}
              control={control}
              defaultValue={""}
              rules={{
                required: "Required",
              }}
              render={({ field }) => (
                <CommonSelect
                  defaultValue={""}
                  data={["A1", "A2", "B1", "B2", "C1", "C2"]}
                  {...field}
                  placeholder="A1"
                />
              )}
            />
          </div>
          <div className="flex justify-end py-2">
            <Button type="submit" className="bg-[#164E99] hover:bg-[#164E99] ">
              Update
            </Button>
          </div>
        </form>

        <div className="py-2 font-semibold flex justify-between">
          <div>Tenses</div>
          <div>
            <Button
              className="bg-[#164E99] hover:bg-[#164E99]"
              onClick={handleAppend}
            >
              <div>Add Tense</div>
            </Button>
          </div>
        </div>
      </section>
      {fields.map((data: any, idx: any) => (
        <section key={idx}>
          <div className="flex justify-end pt-2">
            <X
              size={30}
              strokeWidth={2}
              color={"red"}
              onClick={() => remove(idx)}
            />
          </div>
          <form onSubmit={handleSubmit(updateTense)}>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">Tense</div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].tens_title`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonSelect
                      data={[
                        "Präsens",
                        "Präteritum",
                        "Futur I",
                        "Perfekt",
                        "Plusquamperfekt",
                        "Futur II",
                      ]}
                      {...field}
                      placeholder="tense"
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">I (ich)</div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].i`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">
                You (du) (inf.sing.)
              </div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].you`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>

            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">
                He/She/It (er/sie/es)
              </div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].he_She_it`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">We (Wir)</div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].we`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">
                You (ihr)(inf.pl)
              </div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].you_plural`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">
                they (sie)
              </div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].they`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>
            <div className="flex py-1 justify-between">
              <div className=" text-[#6E7191]  flex items-center">
                You(Sie)(f.sing/pl)
              </div>
              <div className="w-[50%] ">
                <Controller
                  name={`tense[${idx}].you_s_p`}
                  control={control}
                  defaultValue={""}
                  rules={{
                    required: "Required",
                  }}
                  render={({ field }) => (
                    <CommonTextField {...field} placeholder="जर्मन" />
                  )}
                />
              </div>
            </div>

            <div className="flex justify-end pb-2">
              <Button
                type="submit"
                className="bg-[#164E99] hover:bg-[#164E99]"
                onClick={() => setCurrField(data)}
              >
                Update
              </Button>
            </div>
          </form>

          <Divider />
        </section>
      ))}

      <div className="pt-2 flex justify-end">
        <Button type="submit" className="bg-[#164E99] hover:bg-[#164E99]">
          <div>Add Verb</div>
        </Button>
      </div>
    </main>
  );
};

export default EditVerbForm;
