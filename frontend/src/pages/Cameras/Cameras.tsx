import CameraCard from "@/components/Cards/CameraCard";
import CameraForm from "@/components/Dialogs/CameraForm";
import Heading from "@/components/Utils/Heading";
import { Cctv } from "lucide-react";

const Cameras = () => {
  return (
    <div className="w-full">
      <div className="flex-between w-[80%] pl-10 mt-6">
        <Heading icon={<Cctv className="page-icon" />} label="Cameras" />
        <CameraForm />
      </div>
      <div className=" flex flex-wrap pr-40 gap-8 mt-8 pl-28">
        {Array.from({ length: 10 }, (_, i) => (
          <CameraCard key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Cameras;
