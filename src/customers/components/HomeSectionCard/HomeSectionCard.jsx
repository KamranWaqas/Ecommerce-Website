import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const HomeSectionCard = ({ product }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };
  return (
    <div onClick={handleClick} className="py-2 custome-response">
      <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg  overflow-x-hidden w-[15rem] ml-3 h-[21rem] hover:shadow-2xl">
        <div className="h-[13rem] ">
          <img
            className="object-contain object-top w-full h-full"
            src={product.image}
            alt=""
          />
        </div>

        <div className="p-4">
          <div
            style={{
              width: "200px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <h3 className="text-lg font-medium text-gray-900">
              {product.title}
            </h3>
          </div>

          <p className="mt-2 text-sm text-gray-500 ">{product.category}</p>
          <p className="mt-2 text-sm text-gray-500 hover:text-blue-500">Go to Products <KeyboardDoubleArrowRightIcon/></p>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionCard;
