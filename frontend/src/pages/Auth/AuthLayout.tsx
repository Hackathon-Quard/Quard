import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <section className="flex flex-1 justify-center items-center flex-col dark:bg-gray-800">
        <Outlet />
      </section>
    </>
  );
}
