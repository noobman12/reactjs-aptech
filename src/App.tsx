import {} from "react";
import HelloWorld from "./HelloWorld";
import AddToCart from "./AddToCart";
import Banner from "./Banner";
import "./App.css";
import styles from "./App.module.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <div className={styles.task2}>
        <AddToCart>
          <AiOutlineShoppingCart></AiOutlineShoppingCart>
        </AddToCart>
        <AddToCart name='Goi Tu Van' backgroundColor='black'>
          <IoIosCall></IoIosCall>
        </AddToCart>
      </div>
      <div className={styles.width1000}>
        <div className={styles.task5_1}>
          <Banner name='React.js' subBannerName='The Documentary'></Banner>
          <div className={styles.honeyPot}>Honeypot</div>
        </div>
        <div className={styles.task5_2}>
          <p className={styles.textBold}>React: The Documentary</p>
          <p className={styles.textGrey}>The origin story of React</p>
        </div>
        <div className={styles.middle_center}>
          <AiOutlineHeart size={70}></AiOutlineHeart>
        </div>
      </div>
    </>
  );
}

export default App;
