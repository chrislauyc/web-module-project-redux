import { addMovieAction } from "../interface/addMovieFormRedux";
import { deleteMovieAction } from "../interface/movieRedux";

export const deleteMovie =(id)=>deleteMovieAction(id);
export const addMovie=(movie)=>addMovieAction(movie);
// initialization error!
// export const addMovie=addMovieAction;
// no initialization error!
// export const addMovie=(movie)=>addMovieAction(movie);