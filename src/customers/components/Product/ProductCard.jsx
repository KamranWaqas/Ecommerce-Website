// import React from "react";
// import "./productCard.css";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProductCard = ({ product }) => {
//   const navigate=useNavigate();
//   const products = useSelector((state)=>state.allProducts.products);
//   // console.log(products[0])
//   return (
//     <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
//       <div className="h-[20rem]">
//         <img
//           className="h-full w-full object-cover object-left-top"
//           src={product.imageUrl}
//           alt=""
//         />
//       </div>

//       <div className="textPart bg-white p-3">
//         <div>
//           <p className="font-bold opacity-60">{product.brand}</p>
//           <p>{product.title}</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <p className="font-semibold">Rs.{product.discountedPrice}</p>
//           <p className="line-through opacity-50">Rs.{product.price}</p>
//           <p className="text-green-600 font-semibold">{product.discountPersent}% Off</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



import React from "react";
import "./productCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const navigate=useNavigate();
  const products = useSelector((state)=>state.allProducts.products);
  const renderlist = products.map((product)=>{
    const {id, title, price, image, category, description } =product;

    return (
      <div key={id} onClick={()=>navigate(`/product/${id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
        <div className="h-[20rem]">
          <img
            className="h-full w-full  object-left-top object-contain"
            src={image}
            alt=""
          />
        </div>
  
        <div className="textPart bg-white p-3">
          <div>
            <p className="font-bold opacity-60 pb-2">{title}</p>
            <p className="text-green-600 font-semibold pb-2">{category}</p>
            <p className="truncate">{description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">Rs.{price}</p>
            <p className="line-through opacity-50">Rs.{price}</p>
            
          </div>
        </div>
      </div>
    );
    

  });

  return <>{renderlist}</>;
};

export default ProductCard;
