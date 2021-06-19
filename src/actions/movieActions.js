import { addMovieAction } from "../interface/addMovieForm/actionReducers";
import { DELETE_MOVIE } from "./actionTypes";

export const deleteMovie = (id)=>{
    return({type: DELETE_MOVIE, payload:id});
}
export const addMovie = addMovieAction;