import { useState } from "react";
import { useAsync } from "../../hooks/asyncComponentClean.hook";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import { getMovies } from "../../services/public.service";

export const Home = () => {
  const { loading, callEndpoint } = useFetchAndLoad();
  const [ movies, setMovies ] = useState([]);

  const getApiData = async () => await callEndpoint(getMovies());

  const adaptMovies = (data) => {
    setMovies(data.results);
  };

  console.log(movies);

  useAsync(getApiData, adaptMovies, () => {});

  const RenderMovies = ({movies}) => {
    movies.map((movie, index) => {
      return <p key={index}>{ movie.name }</p>
    })
  }

  return (
    <div>
      {
        loading ? 'LOADING' 
        :
        <div>
          asdasd
        </div> 
      }
    </div>
  )
}

export default Home