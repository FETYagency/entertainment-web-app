import loop from "../assets/icon-search.svg";
import { useDispatch } from "react-redux";
import { search } from "../services/features/filter";
export default function Search({ handler, placeholder="Search for movies or TV series" }) {
  const query = useDispatch();
  return (
    <div className="relative flex max-w-[1240px] items-center gap-[16px] xl:pb-[15px] xl:pt-[33px]">
      <span className="h-[18px] w-[18px] flex-shrink-0 flex-grow-0 basis-auto md:h-[32px] md:w-[32px]">
        <img src={loop} />
      </span>
      <input
        className="peer w-full border-none bg-transparent text-[16px] font-light text-white outline-none placeholder-shown:text-white/50 md:text-[24px]"
        type="text"
        onInput={(e) => query(search(e.target.value))}
        placeholder={placeholder}
      />
      <div className="hidden xl:absolute xl:bottom-0 xl:block xl:h-[2px] xl:w-0 xl:bg-[#5A698F] xl:transition-all xl:peer-focus:w-full"></div>
    </div>
  );
}
