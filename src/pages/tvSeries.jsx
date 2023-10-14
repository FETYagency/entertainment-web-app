import { useSelector } from "react-redux";
import { selectContent } from "../services/features/content";
import { filterSelctor } from "../services/features/filter";
import Posts from "../components/posts";
import { filteredQuery } from "../utils/filteredData";
export default function TvSeries() {
  const content = useSelector(selectContent);
  const query = useSelector(filterSelctor);
  let TvSeries;
  if (content) {
    TvSeries = content.filter((per) => per.category === "TV Series");
  }
  let seaerchResult = filteredQuery(query, null, TvSeries);
  return (
    <>
      <section>
        {Boolean(query) && (
          <Posts
            content={seaerchResult.filteredTvSeries}
            h={`Found ${seaerchResult.filteredTvSeries.length} results for '${query}'`}
          />
        )}
        {!Boolean(query) && <Posts content={TvSeries} h={"TV Series"} />}
      </section>
    </>
  );
}
