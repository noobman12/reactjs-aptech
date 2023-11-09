import React from "react";
import styles from "./AddToCart.module.css";
type Props = {
  name?: string;
  backgroundColor?: string;
  children: React.ReactNode;
};

export default function AddToCart({
  name = "Thêm vào giỏ hàng",
  backgroundColor,
  children,
}: Props) {
  return (
    <button
      className={styles.button}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
      {name}
    </button>
  );
}
