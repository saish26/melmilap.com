import { Button, Group } from "@mantine/core";
import React, { useState } from "react";
import { Controller, useFieldArray } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import ImageUpload from "../common/ImageUpload";
import CommonSelect from "../common/form/CommonSelect";
import { X } from "lucide-react";

const LinksAndImage = ({
    prevStep,
    control,
    errors,
    onSubmit,
    handleSubmit,
    handleNext,
    watch,
    setValue,
    getValues,
}: any) => {
    const [socialLink, setSocialLink] = useState(0);
    const [tag, setTag] = useState<any>([]);

    const { append, fields, remove } = useFieldArray({
        control,
        name: `socialLinks`,
    });
    const handleAppend = () =>
        append({
            title: "",
            links: "",
        });
    return (
        <main>
            <form
                onSubmit={handleSubmit(handleNext)}
                className="grid grid-cols-2 gap-4 "
            >
                <section className="">
                    <div>
                        <div className="py-2">
                            <span>Profile Picture</span>
                        </div>
                        <div>
                            <Controller
                                name="profile_picture"
                                rules={{
                                    required: "required",
                                }}
                                control={control}
                                render={({ field }) => (
                                    <ImageUpload
                                        {...field}
                                        value={"profile_picture"}
                                        setValue={setValue}
                                        getValues={getValues}
                                        control={control}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="grid grid-cols-3">
                        <div className="col-span-2">
                            <div className="py-2">
                                <span>Status</span>
                                <span className="text-placeholder px-1">
                                    (optional)
                                </span>
                            </div>
                            <div>
                                <Controller
                                    name={`status`}
                                    control={control}
                                    render={({ field }) => (
                                        <CommonTextField
                                            {...field}
                                            type="text"
                                            placeholder="Wanna take a ride with me?"
                                            error={errors.status?.message}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className=" col-span-1">
                            <div className="py-2">
                                <span>Tag</span>
                                <span className="text-placeholder px-1">
                                    (optional)
                                </span>
                            </div>
                            <div className="">
                                <Controller
                                    name={"tags"}
                                    control={control}
                                    defaultValue={""}
                                    render={({ field }: any) => (
                                        <CommonSelect
                                            placeholder="Rich & Successful"
                                            data={tag}
                                            searchable
                                            creatable
                                            getCreateLabel={(query) =>
                                                `+ Create ${query}`
                                            }
                                            onCreate={(query) => {
                                                const item = {
                                                    value: query,
                                                    label: query,
                                                };
                                                setTag((current: any) => [
                                                    ...current,
                                                    item,
                                                ]);
                                                return item;
                                            }}
                                            {...field}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="py-2">About me</div>
                        <Controller
                            name="description"
                            rules={{
                                required: "required",
                            }}
                            control={control}
                            render={({ field }) => (
                                <CommonTextField {...field} type="textarea" />
                            )}
                        />
                    </div>
                    <div>
                        <div className="pt-5 pb-2">
                            <span>Social Links</span>
                            <span className="text-placeholder px-1">
                                (optional)
                            </span>
                        </div>
                        {fields.map((field: any, idx: any) => (
                            <section
                                className="grid grid-cols-3 gap-4"
                                key={idx}
                            >
                                {idx > 0 && (
                                    <div className="flex justify-end pt-2 col-span-3 cursor-pointer">
                                        <X
                                            size={20}
                                            strokeWidth={2}
                                            color={"red"}
                                            onClick={() => {
                                                setSocialLink(
                                                    (prev: any) => prev - 1
                                                );

                                                remove(idx);
                                            }}
                                        />
                                    </div>
                                )}

                                <div className="col-span-1">
                                    <Controller
                                        name={`socialLinks.${idx}.title`}
                                        control={control}
                                        render={({ field }) => (
                                            <CommonSelect
                                                {...field}
                                                data={[
                                                    "Facebook",
                                                    "Instagram",
                                                    "Twitter",
                                                ]}
                                                placeholder="Facebook"
                                                error={
                                                    errors.socialLinks?.message
                                                }
                                            />
                                        )}
                                    />
                                </div>
                                <div className="col-span-2">
                                    <Controller
                                        name={`socialLinks.${idx}.links`}
                                        control={control}
                                        render={({ field }) => (
                                            <CommonTextField
                                                {...field}
                                                type="text"
                                                placeholder="Link"
                                                error={
                                                    errors.socialLinks?.message
                                                }
                                            />
                                        )}
                                    />
                                </div>
                            </section>
                        ))}
                        {socialLink <= 1 && (
                            <div className="flex justify-end pt-2">
                                <Button
                                    className="bg-theme hover:bg-theme "
                                    onClick={() => {
                                        setSocialLink((prev: any) => prev + 1);
                                        handleAppend();
                                    }}
                                >
                                    Add Link
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                <Group position="right" mt="xl" className="col-span-2">
                    <Button variant="default" onClick={prevStep}>
                        Back
                    </Button>
                    <Button className="bg-theme hover:bg-theme" type={"submit"}>
                        Next
                    </Button>
                </Group>
            </form>
        </main>
    );
};

export default LinksAndImage;
