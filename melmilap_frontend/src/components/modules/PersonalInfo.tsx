import { Button, Group, MultiSelect } from "@mantine/core";
import React from "react";
import { Controller } from "react-hook-form";
import CommonTextField from "../common/form/CommonTextField";
import ImageUpload from "../common/ImageUpload";
import CommonSelect from "../common/form/CommonSelect";

const PersonalInfo = ({
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
              name="first_name"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="First Name"
                  error={errors.first_name?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="last_name"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Last Name"
                  error={errors.last_name?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="email"
              rules={{
                required: "required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  placeholder="Email"
                  error={errors.email?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="password"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="password"
                  placeholder="Password"
                  error={errors.password?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="father_name"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Fathers Name"
                  error={errors.father_name?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="grandfather_name"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Grandfathers Name"
                  error={errors.grandfather_name?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="gender"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonSelect
                  {...field}
                  data={[
                    {
                      label: "Male",
                      value: "m",
                    },
                    {
                      label: "Female",
                      value: "f",
                    },
                  ]}
                  placeholder="Gender"
                  error={errors.gender?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="horoscope"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonSelect
                  {...field}
                  data={[
                    "Aries",
                    "Taurus",
                    "Gemini",
                    "Cancer",
                    "Leo",
                    "Virgo",
                    "Libra",
                    "Scorpio",
                    "Sagittarius",
                    "Capricorn",
                    "Aquarius",
                    "Pisces",
                  ]}
                  placeholder="Horoscope"
                  error={errors.horoscope?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="date_of_birth"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Date Of Birth"
                  error={errors.date_of_birth?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="relationship_status"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Relationship Status"
                  error={errors.relationship_status?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="contact"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Contact Number"
                  error={errors.contact?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="hobbyTitle"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <MultiSelect
                  {...field}
                  size="lg"
                  data={[
                    "Reading",
                    "Writing",
                    "Drawing",
                    "Cooking",
                    "Photography",
                    "Hiking",
                    "Gaming",
                    "Sports",
                    "Music",
                    "Dancing",
                    "Yoga",
                    "Traveling",
                    "Collecting",
                    "Crafting",
                    "Programming",
                    "Volunteering",
                    "Learning",
                    "Modeling",
                    "Gardening",
                    "Fishing",
                    "Camping",
                    "Painting",
                    "Sculpting",
                    "Board Games",
                    "Watching Movies",
                    "Fitness",
                    "Meditation",
                    "Languages",
                    "Fashion",
                    "Astrophotography",
                    "Chess",
                    "DIY Projects",
                    "Archery",
                    "Surfing",
                    "Scuba Diving",
                    "Rock Climbing",
                    "Skydiving",
                    "Skiing",
                    "Photography",
                    "Cardistry",
                    "Sewing",
                    "Quilting",
                    "Knitting",
                    "Origami",
                    "Bird Watching",
                    "Beekeeping",
                    "Geocaching",
                    "Metal Detecting",
                  ]}
                  placeholder="Hobbies"
                  error={errors.hobbyTitle?.message}
                />
              )}
            />
          </div>

          <div>
            <Controller
              name="income"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Income"
                  error={errors.income?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="height"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Height"
                  error={errors.height?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="weight"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Weight"
                  error={errors.weight?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="education"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Education"
                  error={errors.education?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="cast"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Cast"
                  error={errors.cast?.message}
                />
              )}
            />
          </div>
          <div>
            <Controller
              name="religion"
              rules={{
                required: "required",
              }}
              control={control}
              render={({ field }) => (
                <CommonTextField
                  {...field}
                  type="text"
                  placeholder="Religion"
                  error={errors.religion?.message}
                />
              )}
            />
          </div>
        </section>
        <Group position="right">
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

export default PersonalInfo;
