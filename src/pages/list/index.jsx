import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import c from "../../utils/nullCheck";
import Error from "./../../components/error/index";
import Loader from "./../../components/loader/index";
import { open } from "../../redux/slices/detailSlice";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flights);
  const [page, setPage] = useState(1);
  const flightsPerPage = 14;

  // Sayfa geçişinde gösterilecek veriyi hesapla
  const startIndex = (page - 1) * flightsPerPage;
  const currentFlights = flights.slice(startIndex, startIndex + flightsPerPage);

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  if (isLoading)
    return (
      <div >
        <h1>List is loading!</h1>
      </div>
    );
  if (error)
    return (
      <div>
        <Error />
      </div>
    );

  return (
    <div className="list-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Track</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map((flight, i) => (
            <tr key={c(flight?.flightId)}>
              <th scope="row">{startIndex + i + 1}</th>
              <td>{c(flight?.flightId)}</td>
              <td>{c(flight?.callsign)}</td>
              <td>{c(flight?.lat)}</td>
              <td>{c(flight?.lon)}</td>
              <td>{c(flight?.track)}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(open(flight?.flightId));
                  }}
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Stack alignItems="center" mt={3}>
        <Pagination
          count={Math.ceil(flights.length / flightsPerPage)}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          color="primary"
          size="large"
        />
      </Stack>
    </div>
  );
};

export default List;
