
import React, { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import styles from "./Header.module.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";

const Header = () => {

const [{ basket }, dispatch] = useContext(DataContext);
const totalItem = basket?.reduce((amount, item) =>{
  return item.amount + amount
},0)
  
// console.log(basket.length);


  return (
    <section className={styles.fixed}>
      <section>
        <div className={styles.header_container}>
          <div className={styles.logo_container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div>
              <span className={styles.delivery}>
                <SlLocationPin />
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </span>
            </div>
          </div>

          <div className={styles.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search product" />
            <BsSearch size={25} />
          </div>

          <div className={styles.order_container}>
            <Link to="" className={styles.language}>
              <img
                src="https://designerysigns.com/images/misc-pictures/free-printable-us-flag.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>

            <Link to="/orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
};

export default Header;