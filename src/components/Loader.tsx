import React from 'react';
import './Loader.css'; // Assuming the styles are defined in Loader.css

const Loader: React.FC = () => {
  return (
    <div className="loader">

<div className="banter-loader">
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
  <div className="banter-loader__box"></div>
</div>
    </div>
  );
};

export default Loader;
