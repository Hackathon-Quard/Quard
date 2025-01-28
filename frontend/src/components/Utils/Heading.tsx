const Heading: React.FC<{
  label: string;
  icon?: React.ReactNode;
}> = ({ label, icon }) => {
  return (
    <div className="flex items-center p-4 space-x-4 text-black dark:text-white">
      {icon}
      <h1 className="text-[30px] font-bold ">{label}</h1>
    </div>
  );
};

export default Heading;
