import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import full from "../../assets/icon-bookmark-full.svg";
import empty from "../../assets/icon-bookmark-empty.svg";
import { useDispatch } from "react-redux";
import { bookmark } from "../../services/features/content";
export default function Figure({ data }) {
  const dispatch = useDispatch();
  return (
    <figure>
      <div className="relative w-full overflow-hidden rounded-[8px]">
        <div className="absolute inset-0 bg-black mix-blend-soft-light"></div>
        <button
          type="button"
          className="absolute right-[8px] top-[8px] grid h-[32px] w-[32px] place-items-center rounded-[50%] bg-black/50 md:right-[16px] md:top-[16px]"
          onClick={(e) =>
            dispatch(
              bookmark({ title: data.title, boolean: !data.isBookmarked }),
            )
          }
        >
          <img src={data.isBookmarked ? full : empty} />
        </button>
        <picture className="block h-[110px] w-full md:h-[140px] xl:h-[174px]">
          <source
            media="(min-width: 1280px)"
            srcSet={data.thumbnail.regular.big}
          />
          <source
            media="(min-width: 768px)"
            srcSet={data.thumbnail.regular.medium}
          />
          <img
            className="h-full w-full object-cover"
            src={data.thumbnail.regular.small}
          />
        </picture>
      </div>
      <figcaption className="pt-[8px]">
        <span className="inline-flex items-center gap-[8px] text-[11px] font-light opacity-75 md:text-[13px]">
          {data.year}
          <span className="inline-block h-[3px] w-[3px] rounded-[50%] bg-white/50"></span>
          <span className="flex items-center gap-[6px]">
            <span className="inline-block h-[10px] w-[10px]">
              <img src={data.category === "movie" ? movies : series} />
            </span>
            {data.category}
          </span>
          <span className="inline-block h-[3px] w-[3px] rounded-[50%] bg-white/50"></span>
          {data.rating}
        </span>
        <h3 className="mt-[5px] text-[14px] font-medium leading-normal md:text-[18px]">
          {data.title}
        </h3>
      </figcaption>
    </figure>
  );
}
