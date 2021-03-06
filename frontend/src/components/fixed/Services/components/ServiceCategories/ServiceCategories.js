import React from 'react';
import './ServiceCategories.css';

const ServiceCategories = (props) => {
  return (
    <div className="ServiceCategories">
      {
        props.categories.map((category) => (
          <div className="ServiceCategories__item" key={category.name}>
            <div className="ServiceCategories__item__bg" />
            <div className="ServiceCategories__item__icon">
              <div className="ServiceCategories__item__icon__bg" />
              <div className="ServiceCategories__item__icon__image" data-name={ category.name } />
            </div>
            <div className="ServiceCategories__item__title">{ category.title }</div>
            <div className="ServiceCategories__item__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default ServiceCategories;
