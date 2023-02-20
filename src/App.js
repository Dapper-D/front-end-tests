// import logo from './logo.svg';
import "./App.css";
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./Questions";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FastForward } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Person4Icon from "@mui/icons-material/Person4";
import TableViewIcon from "@mui/icons-material/TableView";
import Utility from "./components/utilities pages/Utility";
import Nested from "./components/nested routes/Nested";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function App() {
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions?.length || 0;
  // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
  const [pagesAnswers, setPagesAnswers] = useState({});

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextButton = () => {
    if (index - 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      // clear the form on submit
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const onPageAnswerUpdate = (step, answersObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answersObj });
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  const [isDivActive, setIsDivActive] = useState(false);

  const handleButtonClick = () => {
    setIsDivActive(true);
  };
  const handleButton = () => {
    setIsDivActive(false);
  };

  return (
    <div className="wrapper">
      <div className="right-arrow ">
        <KeyboardArrowRightIcon
          style={{
            position: "relative",
            // paddingLeft: "1.5rem",
          }}
          onClick={handleButtonClick}
        />
      </div>
      <div className={isDivActive ? "left block" : "left"}>
        <div className="head">
          <div className="lefthead">
            <svg
              width="40"
              fill="none"
              height="22"
              viewBox="0 0 268 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#FDB528"
                transform="matrix(0.865206 0.501417 -0.498585 0.866841 173.147 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#FDB528"
                transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill-opacity="0.4"
                fill="url(#paint1_linear_7821_79167)"
                transform="matrix(-0.865206 0.501417 0.498585 0.866841 94.1973 0)"
              ></rect>
              <rect
                rx="25.1443"
                width="50.2886"
                height="143.953"
                fill="#FDB528"
                transform="matrix(0.865206 0.501417 -0.498585 0.866841 71.7728 0)"
              ></rect>
              <defs>
                <linearGradient
                  y1="0"
                  x1="25.1443"
                  x2="25.1443"
                  y2="143.953"
                  id="paint0_linear_7821_79167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
                <linearGradient
                  y1="0"
                  x1="25.1443"
                  x2="25.1443"
                  y2="143.953"
                  id="paint1_linear_7821_79167"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop></stop>
                  <stop offset="1" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
            <h6>GCX</h6>
          </div>
          <div className="righthead" onClick={handleOpen}>
            <FastForward
              onClick={handleButton}
              style={{
                transform: `rotate(${open ? 180 : 0}deg)`,
                transition: "all .25s",
              }}
            />
          </div>
        </div>
        <div className={isDivActive ? "left block" : "left"}>
          <h7 className="main-section ">MAIN SECTION</h7>
          <div className="subsection1">
            <div className="subsection-background">
              <a href="#">
                <HomeOutlinedIcon className="active" /> Dashboard
              </a>
            </div>
            <div className="subsection-background">
              <a href="#">
                {" "}
                <Person4Icon /> Users
              </a>
            </div>
            <div className="actives subsection-background last">
              <a href="#">
                {" "}
                <TableViewIcon />
                Forms
              </a>
            </div>
          </div>
          <h5 className="bonus-section">BONUS SECTION</h5>
          <div className="last-part">
            {/* utilities tab */}
            <Utility />
            {/* nested routes tab */}
            <Nested />
          </div>
          {/* theming control */}
          <button className="theming">
            <BlurOnIcon />
            <a href="#">Theming control</a>
          </button>
        </div>
      </div>

      <div className="right">
        <div className="navbar">
          <div className="search">
            <SearchIcon color="rgb(76 78 100 / 87%)" className="search-icon" />
            <p>Search (Ctrl+/)</p>
          </div>
          <div className="icon">
            <Badge
              color="success"
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <Avatar>U</Avatar>
            </Badge>
          </div>
        </div>
        <Container className="h-100">
          <Row className="m-5">
            <Col className="align-self-center">
              <MultiStepProgressBar step={index} />
            </Col>
          </Row>
          <Row>
            {submitted ? (
              <Card>
                <Card.Body>
                  <p>All steps are completed!</p>
                </Card.Body>
                <div className="card-footer">
                  <Button className="button" onClick={handleStart}>
                    Reset
                  </Button>
                </div>
              </Card>
            ) : (
              <Card>
                <Card.Body className="body">
                  <MultiStepForm
                    list={questions}
                    step={index}
                    onPageUpdate={onPageAnswerUpdate}
                    pagesAnswers={pagesAnswers}
                  />
                </Card.Body>
                <div className="card-footer">
                  <Button
                    className="prev-button"
                    onClick={prevButton}
                    disabled={index == 1}
                  >
                    Previous
                  </Button>

                  <Button className="button" onClick={nextButton}>
                    {index == totalPagesCount ? "Submit" : "Next"}
                  </Button>
                </div>
              </Card>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
