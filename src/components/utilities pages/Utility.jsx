import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./utilities.css";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListItemButton from "@mui/material/ListItemButton";
import { CircleNotificationsOutlined } from "@mui/icons-material";
import HdrWeakOutlinedIcon from "@mui/icons-material/HdrWeakOutlined";

const Utility = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={handleOpen}>
        <div className="dropdown-text">
          <div className="title">
            <InventoryIcon /> Utility Pages
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
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />
              <a href="../../pages/coming_soon/Coming.jsx"> Coming Soon</a>
            </button>
          </li>

          <li className="menu-item">
            <button
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />

              <a href="#">Under Maintenance</a>
            </button>
          </li>

          <li className="menu-item">
            <button
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />

              <a href="#">Page Not Found</a>
            </button>
          </li>

          <li className="menu-item">
            <button
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />

              <a href="#"> Not Authrized - 401</a>
            </button>
          </li>

          <li className="menu-item">
            <button
              className="items"
              onClick={() => {
                handleOpen();
              }}
            >
              <HdrWeakOutlinedIcon color="disabled" fontSize="1px" />

              <a href="#"> Server Error - 500</a>
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Utility;
