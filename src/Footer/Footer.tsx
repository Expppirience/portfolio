import "./Footer.scss";

import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__title">Aleksey Tsivina</h2>
          <div className="footer__items">
            <div className="footer__item item-footer">
              <div className="item-footer__content">
                <div className="item-footer__placeholder"></div>
              </div>
            </div>
            <div className="footer__item item-footer">
              <div className="item-footer__content">
                <div className="item-footer__placeholder"></div>
              </div>
            </div>
            <div className="footer__item item-footer">
              <div className="item-footer__content">
                <div className="item-footer__placeholder"></div>
              </div>
            </div>
            <div className="footer__item item-footer">
              <div className="item-footer__content">
                <div className="item-footer__placeholder"></div>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <p className="footer__text">2022 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
