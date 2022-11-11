import "./Card.css";

export function Card({ info }) {
  return (
    <div className="card">
      <img
        className="img-card"
        src={info.imageUrl}
        alt={`${info.name} imagem`}
      ></img>
      <div className="card-infos">
        <h2 className="title-card">{info.name}</h2>
        <div className="sub-info-card">
          <h3 className="subhead-card">
            Quantidade de filmes: {info.films.length ? info.films.length : 0}
          </h3>
          <h3 className="subhead-card">
            Quantidade de curtas:{" "}
            {info.shortFilms.length ? info.shortFilms.length : 0}
          </h3>
          <h3 className="subhead-card">
            Quantidade de programas de TV:{" "}
            {info.tvShows.length ? info.tvShows.length : 0}
          </h3>
        </div>
      </div>
    </div>
  );
}
