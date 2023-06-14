import { useState, useEffect } from "react";
import people from "../src/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index, setindex] = useState(0);

  const { name, job, image, text } = people[index];
  // console.log(name);

  const nextPerson = () => {
    setindex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;

      return newIndex;
    });
  };

  const pervPerson = () => {
    setindex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;

      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setindex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />

          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={pervPerson}>
            <FaChevronLeft />
          </button>

          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
