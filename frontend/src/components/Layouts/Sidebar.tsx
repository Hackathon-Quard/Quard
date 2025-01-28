import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { LogOut, UsersRound, LayoutDashboard, Cctv, ShieldAlert, Siren} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sidebarItems: {
  icon: React.ReactElement;
  name: string;
  nav: string;
  path: string;
}[] = [
  {
    icon: <LayoutDashboard className="sidebar-icon" />,
    name: "Dashboard",
    nav: "#",
    path: "/",
  },
  {
    icon: <UsersRound className="sidebar-icon" />,
    name: "Employees",
    nav: "employees",
    path: "/employees",
  },
  {
    icon: <Cctv className="sidebar-icon" />,
    name: "Cameras",
    nav: "cameras",
    path: "/cameras",
  },
  {
    icon: <ShieldAlert className="sidebar-icon" />,
    name: "Accidents",
    nav: "accidents",
    path: "/accidents",
  },
  {
    icon: <Siren className="sidebar-icon" />,
    name: "Alert Channels",
    nav: "alert-channels",
    path: "/alert-channels",
  },
];

const CustomSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleClick = (route: string) => {
    navigate(`/${route}`);
  };

  // TODO
  const logout = () => {
	 navigate('/login')
  };

  return (
    <>
      <NavigationMenu.Root orientation="vertical" className={`sidebar-root w-64`}>
        <NavigationMenu.Sub>
          <NavigationMenu.List>
            <Link to="/" className="flex space-x-2 items-center justify-between flex-row">
              <img src="src/assets/logo_name.png" alt="logo" className="w-full mt-5 mb-10" />
              {/* <ModeToggle /> */}
            </Link>
          </NavigationMenu.List>
        </NavigationMenu.Sub>
        <NavigationMenu.Sub>
          <NavigationMenu.List className="space-y-6">
            {sidebarItems.map((item, index) => (
              <NavigationMenu.Item
                key={index}
                className={`group sidebar-item hover:sidebar-item-active ${pathname === item.path && "sidebar-item-active"}`}
                onClick={() => handleClick(item.nav)}
              >
                <NavigationMenu.Link asChild>
                  <Link to={item.path} className="flex-start w-full gap-4">
                    {React.cloneElement(item.icon, {
                      className: `sidebar-icon ${pathname === item.path ? "text-white" : "text-primary"}`,
                    })}
                    {item.name}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Sub>
        <NavigationMenu.Sub className={`absolute bottom-6`}>
          <NavigationMenu.List>
            <NavigationMenu.Item className="group sidebar-item w-52" onClick={() => logout()}>
              <NavigationMenu.Link asChild>
                <Link to="#" className="flex w-full gap-4">
                  <LogOut className="sidebar-icon text-primary" />
                  Logout
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Sub>
      </NavigationMenu.Root>
    </>
  );
};

export default CustomSideBar;
