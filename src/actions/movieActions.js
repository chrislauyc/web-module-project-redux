import { addMovieAction } from "../interface/addMovieForm/actionReducers";
import { deleteMovieAction } from "../interface/movie/actionReducers";

export const deleteMovie =(id)=>deleteMovieAction(id);
export const addMovie=(movie)=>addMovieAction(movie);