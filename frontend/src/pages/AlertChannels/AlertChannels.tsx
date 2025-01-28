import AlertChannelForm from "@/components/Dialogs/AlertChannelForm";
import ChannelsTable from "@/components/Tables/ChannelsTable";
import Heading from "@/components/Utils/Heading";
import { Siren } from "lucide-react";

const AlertChannels = () => {
  return (
    <div className="w-[80%]">
      <div className="flex-between w-full pl-10 mt-6">
        <Heading icon={<Siren className="page-icon" />} label="Alert Channels" />
        <AlertChannelForm />
      </div>
      <div className="ml-28">
        <ChannelsTable />
      </div>
    </div>
  );
};

export default AlertChannels;
