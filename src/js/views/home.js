import React from "react";
import "../../styles/home.css";

export const Home = () => {
  const [personajes, setPersonajes] = React.useState([]);
  const [planetas, setPlanetas] = React.useState([]);

  React.useEffect(() => {
    fetch("https://swapi.tech/api/people")
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      });

    fetch("https://swapi.tech/api/planets")
      .then((response) => response.json())
      .then((data) => {
        setPlanetas(data.results);
      });
  }, []);

  return (
    <div className="m-5">
      <div className="row">
        <div className="col-12">
          <h1 className="text-danger">Characters</h1>
        </div>
        <div className="col-12 d-flex flex-nowrap overflow-auto">
          {personajes.map((personaje) => (
            <div
              className="card me-3"
              key={personaje.uid}
              style={{ flex: "0 0 auto", width: "18rem" }}
            >
              <img
                src="https://via.placeholder.com/400x200"
                className="img-fluid rounded start-0"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{personaje.name}</h5>
                <p className="card-text">
                  <b>Gender:</b> <span>Genero</span>
                  <br />
                  <b>Hair Color:</b> <span>Color de cabello</span>
                  <br />
                  <b>Eye Color:</b> <span>Color de ojos</span>
                </p>
                <div className="d-flex justify-content-between">
                  <a href={"/single/" + personaje.uid}>
                    <button className="btn btn-outline-primary">
                      Learn More!
                    </button>
                  </a>

                  <button className="btn btn-outline-warning ms-2">
                    <i className="fa fa-regular fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <h1 className="text-danger">Planets</h1>
        </div>
        <div className="col-12 d-flex flex-nowrap overflow-auto">
          {planetas.map((planeta) => (
            <div
              className="card me-3"
              key={planeta.uid}
              style={{ flex: "0 0 auto", width: "18rem" }}
            >
              <img
                src="https://via.placeholder.com/400x200"
                className="img-fluid rounded start-0"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{planeta.name}</h5>
                <p className="card-text">
                  <b>Population:</b> <span>Poblacion</span>
                  <br />
                  <b>Terrain:</b> <span>Territorio</span>
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-outline-primary ">
                    Learn More!
                  </button>
                  <button className="btn btn-outline-warning ms-2">
                    <i className="fa fa-regular fa-heart"></i>
                    {/* <i className="fa  fa-heart"></i> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
