import { connect } from "react-redux";
import { deleteMovie } from "../../actions/movieActions";
export const connectToStore=(component)=>{
    const mapStateToProps=(state)=>{
        return{
            movies:state.movie.movies
        };
    };
    const mapDispatchToProps=(dispatch)=>{
        return{
            deleteMovie: (id)=>{dispatch(deleteMovie(id))}
        };
    };
    return connect(mapStateToProps,mapDispatchToProps)(component);
};