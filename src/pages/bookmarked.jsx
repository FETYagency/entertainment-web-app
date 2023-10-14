import { useSelector } from "react-redux";
import { selectContent } from "../services/features/content";
import Posts from "../components/posts";
import { filterSelctor } from "../services/features/filter";
import { filteredQuery } from "../utils/filteredData";
export default function BookMarkes() {
  const content = useSelector(selectContent);
  const query = useSelector(filterSelctor);
  let movies, tvSeries;
  if (content) {
    movies = content.filter(
      (per) => per.category === "Movie" && per.isBookmarked,
    );
    tvSeries = content.filter(
      (per) => per.category === "TV Series" && per.isBookmarked,
    );
  }
  const seaerchResult = filteredQuery(query, movies, tvSeries);
  return (
    <>
      <section>
        <section>
          {Boolean(query) && (
            <Posts
              content={seaerchResult.filteredMovies}
              h={`Found ${seaerchResult.filteredMovies.length} bookmarked results for '${query}'`}
            />
          )}
          {!Boolean(query) && (
            <Posts content={movies} h={"Bookmarked Movies"} />
          )}
        </section>
        <section className="pt-[24px] md:pt-[48px] xl:pt-[40px]">
          {Boolean(query) && (
            <Posts
              content={seaerchResult.filteredTvSeries}
              h={`Found ${seaerchResult.filteredTvSeries.length} bookmarked results for '${query}'`}
            />
          )}
          {!Boolean(query) && (
            <Posts content={tvSeries} h={"Bookmarked TV Series"} />
          )}
        </section>
      </section>
    </>
  );
}
