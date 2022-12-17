import "./Hire.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Hire = () => {
  return (
    <div className="hire">
      <div className="hire__container">
        <div className="hire__content">
          <h2 className="hire__title title--primary">
            Considering remote work offers
          </h2>
          <button className="hire__btn button--primary">
            Hire me
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};
