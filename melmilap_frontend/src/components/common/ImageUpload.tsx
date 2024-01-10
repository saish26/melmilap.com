import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { Group, Modal, Text, useMantineTheme } from "@mantine/core";

import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Image from "next/image";
import ImageCropper from "./ImageCropper";
import { handleImageCompression } from "@/utils/helpers/imageCompression";
import { Eye, Upload, UploadCloud, UploadCloudIcon, X } from "lucide-react";
import firebaseImageUpload from "@/utils/helpers/firebaseImageUpload";

const ImageUpload = ({ control, setValue, getValues, value, rules }: any) => {
  const theme = useMantineTheme();
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);

  const uploadImage = async (files: any) => {
    setLoading(true);
    const file: any = await handleImageCompression(files);
    const url = await firebaseImageUpload(file);
    setValue(value, url);
    setImage(url);
    setLoading(false);
  };

  return (
    <>
      <div>
        <Controller
          name={value}
          control={control}
          rules={
            rules || {
              required: "Required",
            }
          }
          defaultValue={""}
          render={() => (
            <Dropzone
              onDrop={(files) => uploadImage(files[0])}
              // maxSize={one * 1024 ** 2}
              accept={IMAGE_MIME_TYPE}
              loading={loading}
            >
              <Group
                position="center"
                spacing="xl"
                style={{ minHeight: 220, pointerEvents: "none" }}
              >
                <Dropzone.Accept>
                  <Upload
                    size={50}
                    stroke={"1.5"}
                    // color={
                    //   theme.colors[theme.primaryColor][
                    //     theme.colorScheme === "dark" ? 4 : 6
                    //   ]
                    // }
                  />
                </Dropzone.Accept>
                <Dropzone.Reject>
                  <X
                    size={50}
                    stroke={"1.5"}
                    color={
                      theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
                    }
                  />
                </Dropzone.Reject>
                <Dropzone.Idle>
                  <UploadCloudIcon size={50} stroke={"1.5"} />
                </Dropzone.Idle>

                <div className="flex justify-center items-center flex-col text-placeholder">
                  <UploadCloud size={50} color="#A0A3BD" />

                  <Text size="xl" inline>
                    Drag image here or click to select file
                  </Text>
                  {/* <Text size="sm" color="dimmed" inline mt={7}>
                    File should not exceed 1 mB
                  </Text> */}
                </div>
              </Group>
            </Dropzone>
          )}
        />
        {image && (
          <div className="w-full flex justify-end">
            <div className="h-20 w-20">
              <Image src={image} alt="image" height={400} width={400} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
