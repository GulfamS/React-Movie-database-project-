import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieDetails} = props
  const {id, title, posterPath, voteAverage} = movieDetails

  return (
    <li className="movie-card-container d-flex flex-column align-items-center justify-content-center col-12 col-md-6 col-lg-2">
      <img src={posterPath} alt={title} className="movie-card-img" />
      <div className="d-flex flex-column text-center">
        <h1 className="movie-title">{title}</h1>
        <p className="rating">Rating: {voteAverage}</p>
      </div>
      <Link to={`/movie/${id}`} className="align-self-center mt-auto">
        <button type="button" className="view-detail-btn">
          View Details
        </button>
      </Link>
    </li>
  )
}

export default MovieCard
