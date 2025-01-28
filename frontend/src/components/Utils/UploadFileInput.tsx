import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface UploadFileInputProps {
  caption?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hidden?: boolean;
}

const UploadFileInput = React.forwardRef<HTMLInputElement, UploadFileInputProps>(({ onChange, hidden, caption }, ref) => {
  const [imageSrc, setImageSrc] = useState("src/assets/avatar_blue.png");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setImageSrc(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <Label className={`flex h-fit w-fit flex-col cursor-pointer items-center justify-center rounded-lg ${hidden ? "hidden" : ""}`}>
      <Avatar className="border-primary border-2 w-24 h-24">
        <AvatarImage src={imageSrc} />
        <AvatarFallback>E</AvatarFallback>
      </Avatar>
      <Input type="file" className="hidden w-0" onChange={handleFileChange} ref={ref} />
      <Label className="text-primary text-sm">{caption}</Label>
    </Label>
  );
});

UploadFileInput.displayName = "UploadFileInput";

export default UploadFileInput;
