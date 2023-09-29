import React, { ChangeEventHandler, useState } from "react";
import Section from "./Section";
import useFormContext from "../hooks/useFormContext";
import { ErrorBoundary } from "react-error-boundary";
import { MB } from "../constants";

export const UploadBtn = () => {
  const [image, setImage] = useState<string>("");
  const {form, updateOrInsert} = useFormContext()

  const handleImageInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files?.[0]) {
      if (e.target.files[0].size > 1 * MB) {
        alert("File is too big! Maximum file size is 1mb");
        return;
      }
    }
    const reader = new FileReader();
    reader.onloadend = async () => {
        const resp = await updateOrInsert('coverImage', reader.result as string);
        if(resp !== "error") setImage(reader.result as string);
    };
    if (e.target.files?.[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDelete = async () => {
    const resp = await updateOrInsert('coverImage', "https://example.com/fallback.jpeg");
    if(resp !== "error") setImage("")
  }

  return (
    <ErrorBoundary fallback={<>Error Uploading file.</>}>
      {image ? (
        <article className="Cover-image-preview">
          <div className="header">
            <img src={image} className="image" />
          </div>
          <div className="footer">
            <button className="Button red" onClick={handleDelete}>
              <img src="/icons/delete_icon.svg" className="" />
              <span>Delete & re-upload</span>
            </button>
          </div>
        </article>
      ) : (
        <Section title={"Upload cover image"}>
          <form>
            <div>
              <button
                type={"button"}
                style={{
                  overflow: "hidden",
                  position: "relative",
                  border: 0,
                  borderRadius: 6,
                  width: "100%",
                  backgroundColor: "transparent",
                }}
              >
                <article className="Upload-cover">
                  <div>
                    <img
                      className="Upload-cover-icon"
                      src="/icons/upload_icon.png"
                    />
                    <p className="Upload-cover-title">Upload cover image</p>
                    <p className="Upload-cover-subtitle">
                      16:9 ratio is recommended. Max image size 1mb
                    </p>
                  </div>
                </article>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    padding: 100,
                  }}
                  title={""}
                  accept="image/*"
                  name={""}
                  onChange={handleImageInputChange}
                />
              </button>
            </div>
          </form>
        </Section>
      )}
    </ErrorBoundary>
  );
};
export default UploadBtn;
