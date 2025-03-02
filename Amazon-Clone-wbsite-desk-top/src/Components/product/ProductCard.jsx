// // import React from "react";
// // import { Rating } from "@mui/material";
// // import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// // import style from "./Product.module.css";
// // import { Link } from "react-router-dom";
// // import { Type } from "../../Utility/action.type";
// // import { useContext } from "react";
// // function ProductCard({ product, flex , renderDesc}) {
// //   const { image, title, id, rating, price, description } = product;


// //  const [state, dispatch] = useContext(DataContext);


// //  const addToCart = () => {
// //    dispatch({
// //      type: Type.ADD_TO_BASKET,
// //      item: {
// //        image,
// //        title,
// //        id,
// //        rating,
// //        price,
// //        description,
// //      },
// //    });
// //  };
// //   return (
// //     <div
// //       className={`${style.card_container} ${flex ? style.product_flexed : ""}`}
// //     >
// //       <Link to={`/products/${id}`}>
// //         <img
// //           src={image}
// //           alt={`Image of ${title}`}
// //           className={style.img_container}
// //         />
// //       </Link>

// //       <div>
// //         <h3>{title}</h3>
// //         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
// //         <div className={style.rating}>
// //           {/* rating */}
// //           <Rating value={rating?.rate} precision={0.1} />
// //           {/* count */}
// //           <small>{rating?.count}</small>
// //         </div>

// //         <div>
// //           {/* price */}
// //           <CurrencyFormat amount={price} />
// //         </div>

// //         <button className={style.button} onClick={addToCart}>add to cart</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ProductCard;
// import React, { useContext } from "react";
// import { Rating } from "@mui/material";
// import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
// import style from "./Product.module.css";
// import { Link } from "react-router-dom";
// import { Type } from "../../Utility/action.type";
// import { DataContext } from "../DataProvider/DataProvider"; 

// function ProductCard({ product, flex, renderDesc ,renderAdd}) {
//   const { image, title, id, rating, price, description } = product;

//   // ✅ Use useContext correctly
//   const [ state, dispatch ] = useContext(DataContext);

//   const addToCart = () => {
//     dispatch({
//       type:Type.ADD_TO_BASKET,
//       item: {
//         image,
//         title,
//         id,
//         rating,
//         price,
//         description,
//       }
//     })
//   };

//   return (
//     <div
//       className={`${style.card_container} ${flex ? style.product_flexed : ""}`}
//     >
//       <Link to={`/products/${id}`}>
//         <img
//           src={image}
//           alt={`Image of ${title}`}
//           className={style.img_container}
//         />
//       </Link>

//       <div>
//         <h3>{title}</h3>
//         {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
//         <div className={style.rating}>
//           {/* rating */}
//           <Rating value={rating?.rate} precision={0.1} />
//           {/* count */}
//           <small>{rating?.count}</small>
//         </div>

//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>

//         renderAdd &&  <button className={style.button} onClick={addToCart}>
//           Add to cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;
import React, { useContext } from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import style from "./Product.module.css";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/action.type";
import { DataContext } from "../DataProvider/DataProvider"; // ✅ Import DataContext

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;

  // ✅ Use useContext correctly
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    // Ensuring the product properties are valid before adding
    if (title && price && id) {
      dispatch({
        type: Type.ADD_TO_BASKET,
        item: {
          image,
          title,
          id,
          rating,
          price,
          description,
        },
      });
    }
  };

  return (
    <div
      className={`${style.card_container} ${flex ? style.product_flexed : ""}`}
    >
      <Link to={`/products/${id}`}>
        <img
          src={image || "default_image_url.jpg"} // Fallback image if none is provided
          alt={`Image of ${title}`}
          className={style.img_container}
        />
      </Link>

      <div>
        <h3>{title || "Product Title"}</h3> {/* Fallback title */}
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={style.rating}>
          {/* rating */}
          <Rating value={rating?.rate || 0} precision={0.1} />
          {/* count */}
          <small>{rating?.count || 0}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (
          <button className={style.button} onClick={addToCart}>
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
