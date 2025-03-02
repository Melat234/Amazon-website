
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ProductCard from "../../Components/Product/ProductCard";
// import style from "./Results.module.css";

// const Loader = () => <div>Loading...</div>;

// function Results() {
//   const { categoryName } = useParams();
//   const [results, setResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     console.log("Fetching data...");
//     setIsLoading(true);
//     axios
//       .get(`https://fakestoreapi.com/products/category/${categoryName}`)
//       .then((res) => {
//         console.log("Data fetched:", res.data);
//         setResults(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.log("Error fetching data:", err);
//         setIsLoading(false);
//       });
//   }, [categoryName]);

//   return (
//     <section>
//       <h1>Results for {categoryName}</h1>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div className={style.products_container}>
//           {results.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// export default Results;















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";
import LayOut from "../../Components/LayOut/LayOut";
import style from "./Results.module.css";
import { productUrl } from "../../Api/EndPointes";
import Loader from "../../Loader/Loader";

// const Loader = () => <div>Loading...</div>;

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
     setIsLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log( res.data);
        setResults(res.data);
        setIsLoading(false);

      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);

      });
  }, []); 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />

        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.products_container}>
            {results?.map((product) => (
              <ProductCard 
              key={product.id} 
              product={product}
              renderDesc={false}
              renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
