import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import showNotify from "@/utils/notify";
import CommonSelect from "../common/form/CommonSelect";
import { Button, Divider } from "@mantine/core";
import { verbsDTO } from "@/utils/formatters/dictionaryDTO";
import {
  APIPostDictionary,
  APIPostVerbs,
  APIUpdateDictionary,
} from "@/apis/dashboard/dictionary";
import { X } from "lucide-react";

const VerbsForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const {
    control,
    getValues,
    watch,
    setValue,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<any>({
    defaultValues: {
      word: "",
      infinitive: "",
      partizipPrasents: "",
      partizipPerfekt: "",
      level: "A1",
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
    });

  const onSubmit = async (val: any) => {
    try {
      setLoading(true);
      const formattedData = verbsDTO?.send(val);

      const res = await APIPostVerbs(formattedData);
      // console.log(formattedData, "formateed");
      router.reload();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showNotify("error", "Unable to add Verb...");
    }
  };
  return (
    <main>
      <form className=" bg-white px-5 py-1" onSubmit={handleSubmit(onSubmit)}>
        <section className="text-xl font-bold pt-3 pb-6">
          Add Verbs to dictionary
        </section>
        <section>
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
              render={({ field }) => (
                <CommonTextField {...field} placeholder="word" />
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
                  defaultValue={"A1"}
                  data={["A1", "A2", "B1", "B2", "C1", "C2"]}
                  {...field}
                  placeholder="A1"
                />
              )}
            />
          </div>
          <div className="py-2 font-semibold flex justify-between">
            <div>Tenses</div>
            <div className="flex justify-end">
              <Button
                className="bg-[#164E99] hover:bg-[#164E99]"
                onClick={handleAppend}
              >
                <div>Add Tense</div>
              </Button>
            </div>
          </div>
        </section>
        {fields.map((field: any, idx: any) => (
          <section key={idx}>
            <div className="flex justify-end pt-2">
              <X
                size={30}
                strokeWidth={2}
                color={"red"}
                onClick={() => remove(idx)}
              />
            </div>
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

            <Divider />
          </section>
        ))}

        <div className="pt-2 flex justify-end">
          <Button type="submit" className="bg-[#164E99] hover:bg-[#164E99]">
            <div>Add Verb</div>
          </Button>
        </div>
      </form>
    </main>
  );
};

export default VerbsForm;
