import React from 'react';
import { Link } from 'react-router-dom';
import { connectToStore } from '../interface/favoriteMovieListRedux';

const FavoriteMovieList = (props) => {
    const {favorites,displayFavorites,movies,removeFavorite} = props; 

    return ( 
        displayFavorites?
        <div className="col-xs savedContainer">
            <h5>Favorite Movies</h5>
            {
                Object.keys(favorites).map(id=>{
                    return <div key={id}>
                        <Link className="btn btn-light savedButton" to={`/movies/${id}`}>
                            {movies[id].title}
                            <span><span className="material-icons" onClick={()=>removeFavorite(id)}>remove_circle</span></span>
                        </Link> 
                    </div>
                })
            }
        </div>:''
    );
}


export default connectToStore(FavoriteMovieList);