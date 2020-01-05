import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
        const movie=location.state;
      return (
        <div className="movie_">
        <img src={movie.poster} alt={movie.title} title={movie.title} />
        <div className="movie___data">
          <h3 className="movie___title">{movie.title}</h3>
          <h5 className="movie___year">{movie.year}</h5>
          <ul className="movie___genres">
            {movie.genres.slice(0, 3).map((genre, index) => (
              <li key={index} className="genres___genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie___summary">{movie.summary}...</p>
        </div>
      </div>);
    } else {
      return null;
    }
  }
}

export default Detail;
