import React from "react";
import "./coming_soon.css";

const coming = () => {
  return (
    <div className="body">
      <div>
        <p>We are launching soon</p>
      </div>
      <div>
        Our website is opening soon. Please register to get notified when it′s
        ready!
      </div>
      <div>
        <form action="submit">
          <button type="submit"></button>
        </form>
      </div>
    </div>
  );
};

export default coming;
