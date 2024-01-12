import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = (props) => {
  const params = useParams();
  const [personaje, setPersonaje] = React.useState(null);

  React.useEffect(() => {
    fetch("https://swapi.tech/api/people/" + params.uid)
      .then((response) => response.json())
      .then((data) => {
        setPersonaje(data.result);
      });
  }, []);

  // aca mostramos el detalle

  return (
    <div>
      {personaje && (
        <div className="row mx-4">
          <div className="col-6">
            <div className="ps-5">
              <img
                src="https://via.placeholder.com/800x600"
                className="img-fluid rounded start-0"
                alt="..."
              />
            </div>
          </div>
          <div className="col-6 pe-5">
            <h2 className="text-center text-black">
              {" "}
              {personaje.properties.name}
            </h2>
            <p className="text-black text-center mt-4 fs-4">
              {personaje.description} &nbsp; Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam voluptas, voluptates, quia,
              quae voluptatem voluptatum quod consequatur quos doloribus
              repellendus ipsa? Quibusdam, quia voluptatem. Quas, quos.
              Quisquam, voluptate. Quibusdam, quia voluptatem. Quas, quos.
              Quisquam, voluptate.
            </p>
          </div>
          <div className="col-12 mt-5">
            <hr />
          </div>

          <div className="col-12 mx-5">
            <div className="row">
              <div className="col-2 ps-5">
                <h3 className="text-danger">Name</h3>
                <p className="text-danger fs-4">{personaje.properties.name}</p>
              </div>
              <div className="col-2">
                <h3 className="text-danger">Birth Year</h3>
                <p className="text-danger fs-4">
                  {personaje.properties.birth_year}
                </p>
              </div>
              <div className="col-2">
                <h3 className="text-danger">Gender</h3>
                <p className="text-danger fs-4">
                  {personaje.properties.gender}
                </p>
              </div>
              <div className="col-2">
                <h3 className="text-danger">Height</h3>
                <p className="text-danger fs-4">
                  {personaje.properties.height}
                </p>
              </div>
              <div className="col-2">
                <h3 className="text-danger">Skin Color</h3>
                <p className="text-danger fs-4">
                  {personaje.properties.skin_color}
                </p>
              </div>
              <div className="col-2 pe-5">
                <h3 className="text-danger">Eye Color</h3>
                <p className="text-danger fs-4">
                  {personaje.properties.eye_color}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
