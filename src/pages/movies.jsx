import { useSelector } from "react-redux";
import { selectContent } from "../services/features/content";
import { filterSelctor } from "../services/features/filter";
import { filteredQuery } from "../utils/filteredData";
import Posts from "../components/posts";
export default function Movies() {
  const content = useSelector(selectContent);
  const query = useSelector(filterSelctor);
  let movies;
  if (content) {
    movies = content.filter((per) => per.category === "Movie");
  }
  let seaerchResult = filteredQuery(query, movies, null);
  return (
    <>
      <section>
        {Boolean(query) && (
          <Posts
            content={seaerchResult.filteredMovies}
            h={`Found ${seaerchResult.filteredMovies.length} results for '${query}'`}
          />
        )}
        {!Boolean(query) && <Posts content={movies} h={"Movies"} />}
      </section>
    </>
  );
}
