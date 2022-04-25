import { useCallback, useEffect, useState } from "react";
import { useAsync } from "../../hooks/asyncComponentClean.hook";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import { getMovies } from "../../services/public.service";
import CarouselMovies from "./components/carousel";

export const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [ movies, setMovies ] = useState([]);

  const getApiData = async () => await callEndpoint(getMovies());

  const adaptMovies = (data) => {
    setMovies(data.results);
  };

  useAsync(getApiData, adaptMovies, () => {});

  return (
    <div>
      {
        loading ? 
        <p>loading</p>
        :
        <CarouselMovies movies={movies} />
      }
    </div>
  )
}

export default Home