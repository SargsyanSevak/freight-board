import { useEffect } from "react";

import { Button } from "../ui/button";
import { useUserContext, INITIAL_USER } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queries";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

import { INavLink } from "@/types";
import { sidebarLinks } from "@/constants";

const Topbar = () => {
  const navigate = useNavigate();
  const { mutate: signOut, isSuccess } = useSignOutAccount();

  useEffect(() => {
    if (isSuccess) navigate(0);
  }, [isSuccess]);

  const { pathname } = useLocation();
  const { user, setUser, setIsAuthenticated } = useUserContext();

  const handleSignOut = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    signOut();
    setIsAuthenticated(false);
    setUser(INITIAL_USER);
    navigate("/sign-in");
  };
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/main-logo.png"
            alt="logo"
            width={40}
            height={40}
          />
        </Link>
        <div className="w-full md:flex justify-center items-center hidden">
          <ul className="flex  gap-6">
            {sidebarLinks.map((link: INavLink) => {
              const isActive = pathname === link.route;

              return (
                <li
                  key={link.label}
                  className={`leftsidebar-link group ${
                    isActive && "text-primary-500"
                  }`}>
                  <NavLink
                    to={link.route}
                    className="flex gap-4 items-center p-4 text-[12px] lg:text-[16px]">
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleSignOut(e)
            }>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
              alt="profile"
              className="h-8 w-8 rounded-full"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
