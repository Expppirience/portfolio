import React from "react";
import "./Contacts.css";
export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__content">
          <h2 className="contacts__title">Contacts</h2>
          <form className="contacts__form form-contacts">
            <input
              type="text"
              className="form-contacts__input form-contacts__input_first"
            />
            <input
              type="text"
              className="form-contacts__input form-contacts__input_second"
            />
            <textarea className="form-contacts__textarea"></textarea>
            <button className="form-contacts__btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
