import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import ImageOne from "../../images/image1.png";
import ImageTwo from "../../images/image2.png";
import ImageThree from "../../images/image3.svg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.png";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "TechnexT - Ecommerce",
    image: ImageOne,
    link: 'https://github.com/ShadSafiyaAhmed/TechnexT'
  },
  {
    id: 3,
    name: "todo-app",
    image: ImageTwo,
    link: 'https://github.com/ShadSafiyaAhmed/todo-app'
  },
  {
    id: 3,
    name: "React-olx-clone",
    image: ImageThree,
    link: 'https://github.com/ShadSafiyaAhmed/React-olx-clone'
  },
  {
    id: 3,
    name: "mern-auth",
    image: ImageFour,
    link: 'https://github.com/ShadSafiyaAhmed/mern-auth'
  },
  {
    id: 2,
    name: "Green Arena",
    image: ImageFive,
    link: ''
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Main Projects",
  },
  {
    filterId: 3,
    label: "Mini Projects",
  },
];



function Portfolio() {

  const navigate = useNavigate();
  console.log(navigate);

  const handleNavigateToLink = (link) => {
    console.log(link)
    navigate(link);
  };

  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null)

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index)
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  // console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem ${item.name.trim()}`}
              onMouseEnter={() => handleHover(index) }
              onMouseLeave={() => handleHover(null) }
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {
                  index === hoveredValue && (
                    <div>
                      <p> {item.name} </p>
                      <a href={item.link}>
                      <button >github</button>
                      </a>
                      
                    </div>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
