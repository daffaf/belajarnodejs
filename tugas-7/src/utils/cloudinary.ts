import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "./env";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export const handleUpload = async (buffer:Buffer, fileName: string):Promise<any> => {
  const file = fileName.replace(/\.[^.#]+$/, "").replace(/[^a-zA-Z0-9-]+/g, ""); 
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        public_id : file
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    ).end(buffer);
  });
};

export default cloudinary;
