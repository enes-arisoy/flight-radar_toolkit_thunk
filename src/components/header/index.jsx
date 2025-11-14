import React from "react";
import { TbRadarFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isLoading, error, flights } = useSelector((store) => store.flights);

  return (
    <header>
      <Link to="/" className="logo">
        <TbRadarFilled size={50} />
        <h2>Flight Radar</h2>
      </Link>

      <nav>
        <NavLink to="/">
          <button>Map</button>
        </NavLink>

        <NavLink to="/list">
          <button>List</button>
        </NavLink>
      </nav>

      <h3>
        {isLoading
          ? "Radar is working..."
          : error
          ? "Something is going wrong!"
          : `${flights.length} flights are available.`}
      </h3>
    </header>
  );
};

export default Header;
