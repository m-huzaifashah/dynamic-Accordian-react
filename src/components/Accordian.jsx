import { useState } from "react";
import accordianData from './AccordianData'

const Accordian = () => {

  const [show, setShow] = useState(null);

  const handleShow = (id) => {
    setShow(show === id ? null : id);
  };

  return (
    <ul className="accordion">
      {accordianData.map((currElem) => (
        <li key={currElem.id} className="accordion-item">
          <div className="accordion-header">
            <span>{currElem.title}</span>
            <button
              className="accordion-button"
              onClick={() => handleShow(currElem.id)}
            >
              {show === currElem.id ? "Hide" : "Show"}
            </button>
          </div>
          {show === currElem.id && (
            <div className="accordion-content">{currElem.content}</div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Accordian;
