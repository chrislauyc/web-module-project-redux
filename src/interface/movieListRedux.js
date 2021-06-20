import { connect } from "react-redux";

export const connectToStore=(component)=>{
    const mapStateToProps = (state) =>{
        return{
            movies:state.movie.movies
        };
    };
    return connect(mapStateToProps,null)(component);
};
