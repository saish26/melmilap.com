import { storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const firebaseImageUpload = async (imgData: any) => {
  if (imgData == null) return;
  const imgRef = ref(storage, `images/${imgData.name + Date.now()}`);
  try {
    const uploadImage = await uploadBytesResumable(imgRef, imgData);
    const downloadURL = await getDownloadURL(uploadImage.ref);
    return downloadURL;
  } catch (error) {
    console.log(error);
  }
};

export default firebaseImageUpload;
