import { useState } from "react";
import { useAsync } from "../../hooks/asyncComponentClean.hook";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import { getMovies } from "../../services/public.service";

export const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [movies, setMovies] = useState(null);

  const getApiData = async () => await callEndpoint(getMovies(2));
  console.log(getApiData)

  const adaptMorty = (data) => {
    setMovies(data.name);
  };

  useAsync(getApiData, adaptMorty, () => {});
  return <div>{loading ? 'LOADING' : movies}</div>;
}

export default Home