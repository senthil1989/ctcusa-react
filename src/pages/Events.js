import React,{useEffect, useState} from "react";
import { events } from "../utils/helpers";
const years = [2023, 2024, 2025];

function Events() {
    const [selectedYear, setSelectedYear] = useState(2023); // Default year is 2023
    const [isTransitioning, setIsTransitioning] = useState(false);
  const handleYearChange = (event) => {
    setIsTransitioning(true); // Start the transition
    setSelectedYear(Number(event.target.value)); // Update the selected year after transition
    setTimeout(() => {
        setIsTransitioning(false); // End transition
      }, 500);
  };
  
  return (
    <section id="about_h" className="p_4">
      <div className="container-xl">
        <div className="row about_h2 mt-5">
          <div className="col-md-12">
            <div className="about_h2r">
              <h1 className="mt-3 font_50">Events</h1>
              <div className="shop_pg1 row">
                <div className="col-md-12">
                  <div className="shop_pg1l">
                    <div className="shop_1lt row">
                      <div className="col-md-8">
                        <div className="shop_1ltl pt-3">
                          {/* Optional: Add a message like "Showing events for {selectedYear}" */}
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="shop_1ltr">
                          <select
                            className="form-select"
                            aria-label="Select Year"
                            value={selectedYear}
                            onChange={handleYearChange}
                          >
                            {years.map((year) => (
                              <option value={year} key={year}>
                                {year}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="minist_1m row mt-4">
                      <div className="event-grid">
                        {!isTransitioning ? (
                        events[selectedYear]?.map((event, index) => (
                          <div className="minist_1i position-relative" key={index}>
                            <div className="minist_1i1">
                              <div className="grid clearfix">
                                <figure className="effect-jazz mb-0">
                                  <a href="#">
                                    <img
                                      src={event.image}
                                      className="w-100"
                                      alt={`Event ${index}`}
                                    />
                                  </a>
                                </figure>
                              </div>
                            </div>
                            <div className="minist_1i2 position-absolute top-0 p-3"></div>
                            <div className="minist_1i3 p-3 bg_back position-absolute w-100">
                              <h4>
                                <a className="text-white a_tag" href="#">
                                  {event.title}
                                </a>
                              </h4>
                            </div>
                          </div>
                        )) || (
                          <p className="text-center">No events available for {selectedYear}</p>
                        )):<div>Loading...</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
