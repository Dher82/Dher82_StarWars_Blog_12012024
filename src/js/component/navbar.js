import React, {useContext} from "react";
import { Context } from "../store/appContext";
import starWarsLogo from "../../img/starwarslogo.jpg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const {store, actions} = useContext (Context)
  console.log (store.Favoritos)
  return (
    <nav className="navbar navbar-light bg-light mb-3 px-5 py-3">
      <Link to="/">
        <img src={starWarsLogo} style={{ width: "120px" }} />
      </Link>
      <div className="ml-auto">
        
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favorites &nbsp;
              <span className="badge bg-secondary ml-2">{store.Favoritos.length}</span>
            </button>
            <ul className="dropdown-menu">
              {store.Favoritos.map((item)=>{
                return (
                <li>
                <div className="dropdown-item">
                  {item.name} &nbsp;
                  <i className="fa fa-trash" onClick={()=>{actions.eliminaFavorito(item.id)}}></i>
                </div>
              </li>
              )
              })}
              
            </ul>
          </div>
        
      </div>
    </nav>
  );
};

