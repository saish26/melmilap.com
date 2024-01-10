import { Button, Group } from "@mantine/core";
import React from "react";
import { Controller } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import ImageUpload from "../common/ImageUpload";
import CommonSelect from "../common/form/CommonSelect";

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
  return (
    <main>
      <form onSubmit={handleSubmit(handleNext)}>
        <div className="py-2">
          <span>Profile Picture</span>
        </div>
        <section className="grid grid-cols-2 gap-4">
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
        </section>
        <div className="py-2">
          <span>Featured Images</span>
          <span className="text-placeholder px-1">(optional)</span>
        </div>
        <section className="grid grid-cols-2 gap-4">
          <Controller
            name="profile_picture"
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
        </section>
        <div className="py-2">
          <span>Social Links</span>
          <span className="text-placeholder px-1">(optional)</span>
        </div>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <Controller
              name="socialLinks"
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Link"
                  error={errors.socialLinks?.message}
                />
              )}
            />
          </div>
        </section>

        <Group position="right" mt="xl">
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
