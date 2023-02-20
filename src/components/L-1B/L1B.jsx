import "./l-1b.css";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InventoryIcon from "@mui/icons-material/Inventory";
import HdrWeakOutlinedIcon from "@mui/icons-material/HdrWeakOutlined";

const L1B = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdowns">
      <button className="dropdown-button dropdown-bottons" onClick={handleOpen}>
        <div className="dropdown-text">
          <div className="title">
            <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />
            L-1B
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
        <ul className="menu menu2">
          <li className="menu-item">
            <button
              className="items button-item"
              onClick={() => {
                handleOpen();
              }}
            >
              <a href="#">L-2A</a>
            </button>
          </li>
          <li className="menu-item">
            <button
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <a href="#">L-2B</a>
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default L1B;
