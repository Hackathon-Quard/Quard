import { DialogClose } from "@radix-ui/react-dialog";
import CameraTable from "../Dialogs/CameraDetails";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CameraCard = () => {
  const cameraNames = ["Camera 1", "Camera 2", "Camera 3"];
  const cameraLocations = ["Kitchen Camera", "Entrance Camera", "Parking Lot Camera"];

  const randomCameraName = cameraNames[Math.floor(Math.random() * cameraNames.length)];
  const randomCameraLocation = cameraLocations[Math.floor(Math.random() * cameraLocations.length)];

  return (
    <div className="flex-start items-center flex-col w-fit h-96 bg-white dark:bg-black rounded-2xl overflow-clip gap-2">
      <div className="max-w-80 overflow-clip flex-center mb-2">
        <img src="src/assets/snapshot.png" alt="snapshot" className="min-w-96" />
      </div>
      <div className="flex-center flex-col">
        <h1 className="font-bold text-black dark:text-white">{randomCameraName}</h1>
        <h2 className="dim-text">{randomCameraLocation}</h2>
      </div>
      <div className="flex-center gap-3 mt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"outline"} className="w-28">
              Inspect
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[80%]">
            <DialogHeader>
              <DialogTitle>Camera Details</DialogTitle>
              <DialogDescription>
                Here are the details of the selected camera.
              </DialogDescription>
            </DialogHeader>
            <div className="min-w-[60%] overflow-clip flex-center mb-2 mx-auto">
              <img src="src/assets/snapshot.png" alt="snapshot" className="min-w-full" />
            </div>
            <CameraTable />
            <DialogClose asChild>
              <Button variant="destructive" className="min-w-[10%] mx-auto my-0">Close</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CameraCard;
