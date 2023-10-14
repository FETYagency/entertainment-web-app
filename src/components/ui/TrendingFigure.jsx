import movies from "../../assets/icon-nav-movies.svg";
import series from "../../assets/icon-nav-tv-series.svg";
import full from "../../assets/icon-bookmark-full.svg";
import empty from "../../assets/icon-bookmark-empty.svg";
import { useDispatch } from "react-redux";
import { bookmark } from "../../services/features/content";
export default function TrendingFigure({ data }) {
  const dispatch = useDispatch();
  return (
    <figure className="grid w-[270px] flex-shrink-0 flex-grow-0 grid-cols-1 text-white md:w-[470px]">
      <div className="relative col-start-1 row-start-1 w-full overflow-hidden rounded-[8px]">
        <div className="absolute inset-0 bg-black mix-blend-soft-light"></div>
        <button
          type="button"
          className="absolute right-[8px] top-[8px] grid h-[32px] w-[32px] place-items-center rounded-[50%] bg-black/50"
          onClick={(e) =>
            dispatch(
              bookmark({ title: data.title, boolean: !data.isBookmarked }),
            )
          }
        >
          <img src={data.isBookmarked ? full : empty} />
        </button>
        <picture className="block h-[140px] w-full md:h-[240px]">
          <source
            media="(min-width: 768px)"
            srcSet={data.thumbnail.trending.large}
          />
          <img
            className="h-full w-full object-cover"
            src={data.thumbnail.trending.small}
          />
        </picture>
      </div>
      <figcaption className="col-start-1 row-start-1 self-end pb-[16px] pl-[16px]">
        <div>
          <span className="inline-flex items-center gap-[8px] text-[12px] font-light opacity-75 md:text-[15px]">
            {data.year}
            <span className="inline-block h-[3px] w-[3px] rounded-[50%] bg-white/50"></span>
            <span className="flex items-center gap-[6px]">
              <span className="inline-block h-[12px] w-[12px]">
                <img src={data.category === "movie" ? movies : series} />
              </span>
              {data.category}
            </span>
            <span className="inline-block h-[3px] w-[3px] rounded-[50%] bg-white/50"></span>
            {data.rating}
          </span>
          <h3 className="relative mt-[5px] text-[15px] font-medium leading-normal md:text-[24px]">
            {data.title}
          </h3>
        </div>
      </figcaption>
    </figure>
  );
}
