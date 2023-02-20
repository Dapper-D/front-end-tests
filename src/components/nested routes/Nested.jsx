import "./nested.css";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import HdrWeakOutlinedIcon from "@mui/icons-material/HdrWeakOutlined";
import L1B from "../L-1B/L1B";

const Nested = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleOpen}>
        <div className="dropdown-text">
          <div className="title">
            <InventoryIcon /> Nested Routes
          </div>
          <div>
            <ExpandMoreIcon
              style={{
                transform: `rotate(${open ? 90 : 0}deg)`,
                transition: "all .25s",
              }}
            />
          </div>
        </div>
      </button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button
              disabled={true}
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />
              L-1
            </button>
          </li>
          <L1B />
        </ul>
      ) : null}
    </div>
  );
};

export default Nested;
