
import React, { useState, useEffect } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import axios from "axios";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/EndPointes";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true); 
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data); 
        setIsLoading(false);
      })
      .catch((err) => {
        console.error( err);
        setIsLoading(false); 
      });
  }, []); 



  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : product ? (
        <ProductCard product={product}
        
        flex={true}
        renderDesc={true}
        renderAdd={true}
        />
      ) : (
        <div>Product not found</div>
      )}
     
    </LayOut>
  );
}

export default ProductDetail;
