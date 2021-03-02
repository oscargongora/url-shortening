import React from "react";
import ShortenForm from "./ShortenForm";

const AdvancedStatistics = () => {
  return (
    <div id="advanced-statistics">
      <div className="advanced-statistics-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="advanced-statistics-body">
        <div className="statistics-card">
          <div className="card-icon">
            <img
              src="/images/icon-brand-recognition.svg"
              alt="Brand recognition"
            />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="card-separator"></div>
        <div className="statistics-card">
          <div className="card-icon">
            <img
              src="/images/icon-detailed-records.svg"
              alt="Detailed Records"
            />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="card-separator"></div>
        <div className="statistics-card">
          <div className="card-icon">
            <img
              src="/images/icon-fully-customizable.svg"
              alt="Fully Customizable"
            />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdvancedStatistics;
