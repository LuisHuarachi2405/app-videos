import { ContainerCarousel } from "../styled-components/carousel"

function CarouselMovies({movies}) {

  const list = movies.map((movie, index) => {
    return <p key={index}>{movie.name}</p>
  })

  const container = <ContainerCarousel>
    {list}
  </ContainerCarousel>

  return container
}

export default CarouselMovies