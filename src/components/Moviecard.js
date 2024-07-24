import { FaStar } from 'react-icons/fa6'
import '../components/Moviecard.css'
const imgUrl = process.env.REACT_APP_IMG;



function Moviecard({ movie, showLink = true}){

    

    return (
        <div className='moviecard'>
          <img className='image' src={`${imgUrl}${movie.poster_path}`} alt={movie.title} />
          <h4 className='originaltitle'>{movie.original_title}</h4>
          <h4 className='year'>{movie.release_date.slice(0, 4)}</h4>
          <h2 className='title'>{movie.title}</h2>
          <p className='votes'>
            <FaStar /> {movie.vote_average.toFixed(1)} {/* Limita a exibição a 3 caracteres */}
          </p>
        </div>
      );
    }



export default Moviecard