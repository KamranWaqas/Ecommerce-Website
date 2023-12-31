import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const HomeSectionCarousel = ({data, sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    450: { items: 1.5 },
    500: { items: 2 },
    600: { items: 2.5 },
    800: { items: 3 },
    1024: { items: 3.2 },
    1215: { items: 4 },
    1300: { items: 4.5 },
    1600: { items: 5.5 },
    1950: { items: 6.5 },
    2400: { items: 7.5 },
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 12)
    .map((item) => <HomeSectionCard key={item.id} product={item}/>);

  return (
    <div className="lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-800 py-3">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          items={items}      
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          renderPrevButton={() => {
            if (activeIndex === 0) {
              return null;
            }
            return (
              <p className="ml-3 hover:cursor-pointer rounded-md py-4 mt-6 absolute bg-blue-500 left-[-40px] top-12">
                <KeyboardArrowRightIcon
                  sx={{ color: "white", transform: "rotate(180deg)" }}
                />
              </p>
            );
          }}
          renderNextButton={() => {
            if (activeIndex === items.length - 4) {
              return null;
            }
            return (
              <p className="mr-4 hover:cursor-pointer rounded-md py-4 mt-6 absolute bg-blue-500 right-[-50px] top-12">
                <KeyboardArrowRightIcon sx={{ color: "white" }} />
              </p>
            );
          }}
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
