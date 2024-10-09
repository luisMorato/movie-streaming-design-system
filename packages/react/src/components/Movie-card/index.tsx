import { ComponentProps } from 'react'
import { IoMdStar } from 'react-icons/io'

import { MovieCardContainer, MovieInfo, MovieDetails } from './style'

export type movieCardProps = ComponentProps<typeof MovieCardContainer> & {
  imgSrc: string
  movieName: string
  movieLaunchDate: string
  movieRating: number
}

export const MovieCard = ({
  imgSrc,
  movieName,
  movieLaunchDate,
  movieRating,
  ...props
}: movieCardProps) => {
  const formatedMovieRatingToFloat = movieRating.toFixed(1)

  return (
    <MovieCardContainer {...props}>
      <img src={imgSrc} alt={`${movieName}-Poster`} />
      <MovieInfo>
        <p>{movieName}</p>
        <MovieDetails>
          <span>{movieLaunchDate}</span>
          <div>
            <IoMdStar size={20} />
            <span>{formatedMovieRatingToFloat}</span>
          </div>
        </MovieDetails>
      </MovieInfo>
    </MovieCardContainer>
  )
}
