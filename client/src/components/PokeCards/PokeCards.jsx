import { React, useState } from "react";

import Pagination from "../Pagination/Pagination";
import Card from "../PokeCard/PokeCard";
import "./PokeCards.css";

export default function PokeCards({ array }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  const max = Math.ceil(array.length / itemsPerPage);
  return (
    <div>
      {/* con el isArray me fijo si es array por si no lo es tirar un error */}
      {Array.isArray(array) ? (
        <>
          {" "}
          <div className="cards-container">
            {" "}
            {array
              .slice(
                (currentPage - 1) * itemsPerPage,
                (currentPage - 1) * itemsPerPage + itemsPerPage
              )
              .map((element) => (
                <Card
                  id={element.id}
                  key={element.id}
                  image={element.image}
                  name={element.name}
                  types={element.types}
                />
              ))}
          </div>
          <div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              max={max}
            />
          </div>
        </>
      ) : (
        <div className="not-found">{array}</div>
      )}
    </div>
  );
}
