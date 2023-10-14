export function filteredQuery(query, movies, tvSeries) {
  let filteredMovies;
  let filteredTvSeries;
  if (query) {
    if (movies)
      filteredMovies = movies.filter((per) => per.title.includes(query));
    if (tvSeries)
      filteredTvSeries = tvSeries.filter((per) => per.title.includes(query));
  }
  if (query) return { filteredMovies, filteredTvSeries };
  return null;
}
