import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Part = ({ arr, name, ide }) => {
  let c = "all";
  if (name === "Allure") c = "";

  const renderImages = () => {
    return arr.map((img, index) => {
      const { image, name } = img;
      if (name === "ethnic_7") {
        c = "eth-potrait";
      }
      return (
        <div key={index}>
          <img className={`image ${c} index${index}`} src={image} alt={name} />
        </div>
      );
    });
  };

  return (
    <ModuleWrapper id={ide} className="world">
      <h1> {name} </h1>
      <StyledCarousel className={`hello ${name}`}>
        {renderImages()}
      </StyledCarousel>
    </ModuleWrapper>
  );
};

export default Part;
const StyledCarousel = styled(Carousel)`
  .image {
    height: 500px;
  }

  > .carousel-slider {
    width: 65% !important;
    margin: auto;
  }
  .carousel {
    .thumbs-wrapper {
      display: none;
    }
  }
`;
const ModuleWrapper = styled.div`
  /* display : flex;
    align-items: center;
    justify-content : center; */
  margin-left: 128px;

  > h1 {
    margin-top: 100px;
    margin-bottom: 15px;
    text-align: center;
    text-transform: uppercase;
    font-family: cursive;
  }

  .Allure {
    div {
      img {
        width: 40% !important;
        height: auto;
      }

      .index0 {
        width: 80% !important;
        height: 100%;
      }
    }
  }

  .carousel {
    .slide {
      img {
        width: 80%;
        height: auto;
      }
    }
  }

  .all {
    width: 80%;
    height: auto;
  }

  .eth-potrait {
    width: 40% !important;
    height: auto;
  }

  @media (max-width: 700px) {
    margin-left: 0;
  }

  @media (max-width: 500px) {
    transform: scale(1.2);
  }
`;
