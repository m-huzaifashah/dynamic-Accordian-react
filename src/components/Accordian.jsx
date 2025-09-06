import { useState } from "react";


const Accordian = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces, developed and maintained by Meta.",
    },
    {
      id: 2,
      title: "Why use an accordion?",
      content:
        "Accordions help organize content in a compact way, letting users expand only the sections they need.",
    },
    {
      id: 3,
      title: "How do I style my accordion?",
      content:
        "You can use CSS, Tailwind, or libraries like Material-UI and Chakra UI to style accordions easily.",
    },
    {
      id: 4,
      title: "Can it be dynamic?",
      content:
        "Yes! You can fetch data from an API and render the accordion by mapping through the response.",
    },
  ];

  const [show, setShow] = useState(null);

  const handleShow = (id) => {
    setShow(show === id ? null : id);
  };

  return (
    <ul className="accordion">
      {accordionData.map((currElem) => (
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
