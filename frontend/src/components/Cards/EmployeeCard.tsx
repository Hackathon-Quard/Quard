import EmployeeForm from "../Dialogs/EmployeeForm";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import EmployeeDetails from "../Dialogs/EmployeeDetails";

const EmployeeCard = () => {
  const names = ["Ehab Maali", "Abd Salman", "Anonymous"];
  const emails = ["ehab1.maali@gmail.com", "abd.an@example.com", "anous@example.com"];
  const jobTitles = ["Software Engineer", "Project Manager", "Designer"];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomEmail = emails[Math.floor(Math.random() * emails.length)];
  const randomJobTitle = jobTitles[Math.floor(Math.random() * jobTitles.length)];

  return (
    <div className="flex-center flex-col w-fit m-4 gap-3 pb-4 pt-12 px-12 bg-white dark:bg-black rounded-lg">
      <Avatar className="border-primary border-4 w-28 h-28">
        <AvatarImage src={"src/assets/avatar_blue.png"} />
        <AvatarFallback>{randomName[0]}</AvatarFallback>
      </Avatar>
      <h1 className="font-bold text-black dark:text-white">{randomName}</h1>
      <h2 className="dim-text">{randomJobTitle}</h2>
      <h2 className="text-black dark:text-white">{randomEmail}</h2>
      <div className="flex-center gap-3 mt-4">
        <EmployeeForm isEdit={true} />
        <EmployeeDetails name={randomName} email={randomEmail} jobTitle={randomJobTitle} />
      </div>
    </div>
  );
};

export default EmployeeCard;