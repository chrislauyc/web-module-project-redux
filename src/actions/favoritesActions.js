import { 
    toggleFavoritesAction,
    addFavoriteAction,
    removeFavoriteAction

} from "../interface/favoriteMovieListRedux";
export const toggleFavorites=()=>toggleFavoritesAction();
export const addFavorite=(id)=>addFavoriteAction(id);
export const removeFavorite=(id)=>removeFavoriteAction(id);
