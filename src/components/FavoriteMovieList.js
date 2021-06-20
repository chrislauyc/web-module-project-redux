import React from 'react';
import { Link } from 'react-router-dom';
import { connectToStore } from '../interface/favoriteMovieListRedux';

const FavoriteMovieList = (props) => {
    const {favorites, movies, toggleFavorites,addFavorite,removeFavorite} = props; 
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(id=>{
                return <div key={id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${id}`}>
                        {movies[id].title}
                        <span><span className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connectToStore(FavoriteMovieList);