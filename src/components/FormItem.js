import { Form } from "react-bootstrap";
import { useState } from "react";
import "./formitem.css";
export const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  };

  switch (item.type) {
    case "text":
      return (
        <div className="fonts">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            placeholder="Username"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </div>
      );
      break;
    case "address":
      return (
        <div className="fonts">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="address"
            id={item.label}
            placeholder="Address"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </div>
      );
      break;
    case "social":
      return (
        <div className="fonts">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="social"
            id={item.label}
            placeholder="Enter link"
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </div>
      );
      break;
    case "email":
      return (
        <div className="fonts">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
          />
        </div>
      );
      break;
    case "password":
      return (
        <div className="fonts">
          <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword"
            placeholder="Password"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </div>
      );
      break;
    case "confirm password":
      return (
        <div className="fonts">
          <Form.Label htmlFor="inputPassword5">{item.label}</Form.Label>
          <Form.Control
            type="confirm password"
            id="confirm Password"
            placeholder="Password"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => onChange(e.target.value, item.value)}
          />
        </div>
      );
      break;
    case "information":
      return <p>{item.label}</p>;
    case "select":
      return (
        <div className="mt-2">
          <Form.Select
            aria-label={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
          >
            <option>{item.label}</option>
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>;
            })}
          </Form.Select>
        </div>
      );

      return <></>;
  }
};
