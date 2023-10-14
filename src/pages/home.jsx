import { useSelector, useDispatch } from "react-redux";
import { filterSelctor } from "../services/features/filter";
import { selectContent } from "../services/features/content";
import Posts from "../components/posts";
import Trendings from "../components/trending";
import { filteredQuery } from "../utils/filteredData";
import { GET } from "../services/features/content.js";
export default function Home() {
  const content = useSelector(selectContent);
  const query = useSelector(filterSelctor);
  let seaerchResult = filteredQuery(query, content, null);
  let trending;
  if (content) {
    trending = content.filter((per) => per.isTrending);
  }
  return (
    <>
      <section>
        {Boolean(query) && (
          <Posts
            content={seaerchResult.filteredMovies}
            h={`Found ${seaerchResult.filteredMovies.length} results for '${query}'`}
          />
        )}
        {!Boolean(query) && (
          <>
            <Trendings data={trending} />
            <Posts content={content} h={"Recommended for you"} />
          </>
        )}
      </section>
    </>
  );
}
