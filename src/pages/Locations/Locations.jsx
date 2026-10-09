import { useState } from "react";

import "./Locations.css";

import { locations } from "../../data/Locations";

import { LocationMap } from "../../components/LocationMap/LocationMap";


export function Locations() {

  // ==========================================
  // STATE
  // ==========================================

  const [search, setSearch] = useState("");

  const [selectedLocation, setSelectedLocation] =
    useState(locations[0]);


  // ==========================================
  // SEARCH LOCATIONS
  // ==========================================

  const filteredLocations = locations.filter(
    (location) => {

      const searchText = search.toLowerCase().trim();

      return (
        location.name
          .toLowerCase()
          .includes(searchText) ||

        location.address
          .toLowerCase()
          .includes(searchText)
      );

    }
  );


  // ==========================================
  // SELECT LOCATION
  // ==========================================

  const handleSelectLocation = (location) => {

    setSelectedLocation(location);

  };


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <main className="locations-page">


      {/* ======================================
          HEADER
      ====================================== */}

      <section className="locations-header">

        <p className="locations-subtitle">
          Find Us Near You
        </p>

        <h1>
          Our Locations
        </h1>

        <p className="locations-description">
          Visit an NE Bakeshop near you and enjoy
          freshly baked cakes, pastries, and treats.
        </p>

      </section>


      {/* ======================================
          SEARCH
      ====================================== */}

      <section className="locations-search">

        <input
          type="text"
          value={search}
          placeholder="Search by location or city..."
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />

      </section>


      {/* ======================================
          LOCATION CONTENT
      ====================================== */}

      <section className="locations-content">


        {/* ====================================
            LOCATION LIST
        ==================================== */}

        <div className="locations-list">


          <div className="locations-list-header">

            <h2>
              Store Locations
            </h2>

            <span>
              {filteredLocations.length} locations
            </span>

          </div>


          {/* ==================================
              LOCATION CARDS
          ================================== */}

          {filteredLocations.length > 0 ? (

            filteredLocations.map((location) => (

              <article
                key={location.id}
                className={`location-card ${
                  selectedLocation?.id === location.id
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  handleSelectLocation(location);
                }}
              >

                <div className="location-card-content">

                  <h3>
                    {location.name}
                  </h3>

                  <p>
                    {location.address}
                  </p>

                </div>


                <div className="location-card-actions">


                  {/* VIEW ON MAP */}

                  <button
                    type="button"
                    onClick={(event) => {

                      event.stopPropagation();

                      handleSelectLocation(location);

                    }}
                  >
                    View on Map
                  </button>


                  {/* GOOGLE MAPS */}

                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >
                    Google Maps
                  </a>


                </div>

              </article>

            ))

          ) : (

            <div className="no-locations">

              <h3>
                No locations found
              </h3>

              <p>
                Try searching for another city or location.
              </p>

            </div>

          )}

        </div>


        {/* ====================================
            MAP
        ==================================== */}

        <div className="locations-map-container">

          <LocationMap
            locations={locations}
            selectedLocation={selectedLocation}
            onSelectLocation={handleSelectLocation}
          />

        </div>


      </section>

    </main>

  );
}