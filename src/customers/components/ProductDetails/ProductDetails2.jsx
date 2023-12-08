import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../../redux/actions/productActions";
import Rating from "@mui/material/Rating";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';



const ProductDetails2 = () => {
  const navigate = useNavigate();
  const handleAddToCart = () => {
    navigate("/cart");
  };
  const product = useSelector((state) => state.product);
  const { category, description, id, image, price, rating, title } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        {Object.keys(product).length === 0 ? (
            <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center", height: "50vh"}}>
                <CircularProgress />
            </Box>
        ) : (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10">
            {/* Image gallery */}
            <div className="flex flex-col items-center">
              <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            {/* Product info */}
            <div className="lg-col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
              <div className="lg:col-span-2 ">
                <h1 className="text-lg lg:text-xl font-semibold text-gray-900 ">
                  {title}
                </h1>
                <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                  {category}
                </h1>
              </div>
  
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
  
                <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                  <p className="font-semibold"> ${price}</p>
                  {/* <p className="opacity-50 line-through">Rs. 299</p> */}
                  <p className="text-green-600 font-semibold">20% Off Sale</p>
                </div>
  
                {/* Reviews */}
                <div className="mt-6">
                  <div className="flex items-center space-x-3">
                    {/* <Rating name="read-only" precision={0.25} value={parseFloat(rating.rate)} readOnly /> */}
                    <Rating
                      name="read-only"
                      precision={0.25}
                      value={parseFloat(rating?.rate || 0)}
                      readOnly
                    />
  
                    {/* <p className="opacity-50 text-sm">{rating.count} Ratings</p> */}
                    <p className="opacity-50 text-sm">
                      {rating?.count || 0} Ratings
                    </p>
  
                    {/* <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      43445 Reviews
                    </p> */}
                  </div>
                </div>
  
                <form className="mt-10">
                  <Button
                    onClick={handleAddToCart}
                    variant="contained"
                    sx={{ px: "2rem", py: ".5rem", bgcolor: "#9155fd" }}
                  >
                    Add to Cart
                  </Button>
                </form>
              </div>
  
              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>
  
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        
      </div>
    </div>
  );
};

export default ProductDetails2;
