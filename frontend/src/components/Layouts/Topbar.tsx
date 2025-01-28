import { ModeToggle } from "@/components/ui/mode-toggle";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopBar = () => {
  const [is12Format, setIs12Format] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour12: is12Format }));
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour12: is12Format }));
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [is12Format]);

  const toggleTimeFormat = () => {
    setIs12Format((prevFormat) => !prevFormat);
	setCurrentTime(new Date().toLocaleTimeString([], { hour12: !is12Format }));
  };

  const name = "Ehab Maali";
  return (
    <div className="min-w-full h-16 px-8 bg-white flex-between dark:bg-black">
      <div className="flex-center gap-6">
        <div className="font-bold text-black dark:text-white cursor-pointer" onClick={toggleTimeFormat}>
          {currentTime}
        </div>
        <div className="font-bold text-black dark:text-white">{currentDate}</div>
      </div>
      <div className="flex-center gap-6">
        <ModeToggle />
        <Bell className="h-6 w-6 text-black dark:text-white" strokeWidth={2.5} />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="w-28 pb-3 pt-4">
              {language === "ar" ? (
                <div className="flex-center gap-2 text-[16px] font-bold text-black dark:text-white">
                  <h2 className="text-[26px]">🇸🇦</h2>
                  <div className="mb-1">عربي</div>
                </div>
              ) : (
                <div className="flex-center gap-2 text-[16px] font-bold text-black dark:text-white">
                  <h2 className="text-[26px]">🇬🇧</h2>
                  <div className="mb-0.5">English</div>
                </div>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="dark:text-white" onClick={() => setLanguage("ar")}>
              عربي
            </DropdownMenuItem>
            <DropdownMenuItem className="dark:text-white" onClick={() => setLanguage("en")}>
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex-center gap-3">
          <Avatar className="border-primary border-2">
            <AvatarImage src={"src/assets/avatar_blue.png"} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="font-bold text-black dark:text-white">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
