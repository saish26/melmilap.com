import { Button, Group } from "@mantine/core";
import React from "react";
import { Controller } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import ImageUpload from "../common/ImageUpload";
import CommonSelect from "../common/form/CommonSelect";

const AddressInfo = ({
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
      <form className="" onSubmit={handleSubmit(handleNext)}>
        <section className="grid grid-cols-2 gap-4">
          <div>
            <Controller
              name="province"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Province"
                  error={errors.province?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="district"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="District"
                  error={errors.district?.message}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="city"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="City"
                  error={errors.city?.message}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="street"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Street"
                  error={errors.street?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="municipality"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Municipality"
                  error={errors.municipality?.message}
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

export default AddressInfo;
