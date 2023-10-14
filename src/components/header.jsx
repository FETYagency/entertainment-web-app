import logo from "../assets/logo.svg";
import Home from "../assets/icon-nav-home.jsx";
import Movies from "../assets/icon-nav-movies.jsx";
import Tv from "../assets/icon-nav-tv-series.jsx";
import Bookmark from "../assets/icon-nav-bookmark.jsx";
import avatar from "../assets/image-avatar.png";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="z-50 m-auto flex h-[56px] md:max-w-[719px] items-center justify-between bg-[#161D2F] px-[16px] md:rounded-[10px] xl:fixed xl:inset-y-[32px] xl:m-0 xl:h-auto xl:w-[96px] xl:flex-col py-[32px] start-[32px] xl:justify-start xl:gap-[75px]">
      <NavLink to={"/"} className="h-[20px] w-[25px] xl:w-[32px] xl:h-auto">
        <img src={logo} />
      </NavLink>
      <nav className="flex items-center gap-[24px] md:gap-[32px] xl:flex-col [&_a]:h-[16px] [&_a]:w-[16px]">
        <NavLink
          to={"./"}
          className={({ isActive, isPending }) => {
            return isActive ? "text-white" : "text-[#5A698F]";
          }}
        >
          <Home />
        </NavLink>
        <NavLink
          to={"./movies"}
          className={({ isActive, isPending }) => {
            return isActive ? "text-white" : "text-[#5A698F]";
          }}
        >
          <Movies />
        </NavLink>
        <NavLink
          to={"./TvSeries"}
          className={({ isActive, isPending }) => {
            return isActive ? "text-white" : "text-[#5A698F]";
          }}
        >
          <Tv />
        </NavLink>
        <NavLink
          to={"./bookmarks"}
          className={({ isActive, isPending }) => {
            return isActive ? "text-white" : "text-[#5A698F]";
          }}
        >
          <Bookmark />
        </NavLink>
      </nav>
      <NavLink className="h-[24px] w-[24px] rounded-[50%] border border-white xl:mt-auto">
        <img src={avatar} className="object-cover" />
      </NavLink>
    </header>
  );
}
