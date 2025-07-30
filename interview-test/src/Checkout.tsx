import { useEffect, useReducer, useState } from "react";
import styles from "./Checkout.module.css";
import { LoadingIcon } from "./Icons";
import { getProducts } from "./dataService";
import { ProductType, ProductsReducer } from "./reducer/ProductsReducer";
// import { getProducts } from './dataService';

// You are provided with an incomplete <Checkout /> component.
// You are not allowed to add any additional HTML elements.
// You are not allowed to use refs.

// Demo video - You can view how the completed functionality should look at: https://drive.google.com/file/d/1bcXpGUzJUyUwITOqEn8QPj8ZOgUbTGQD/view?usp=sharing

// Once the <Checkout /> component is mounted, load the products using the getProducts function.
// Once all the data is successfully loaded, hide the loading icon.
// Render each product object as a <Product/> component, passing in the necessary props.
// Implement the following functionality:
//  - The add and remove buttons should adjust the ordered quantity of each product
//  - The add and remove buttons should be enabled/disabled to ensure that the ordered quantity can’t be negative and can’t exceed the available count for that product.
//  - The total shown for each product should be calculated based on the ordered quantity and the price
//  - The total in the order summary should be calculated
//  - For orders over $1000, apply a 10% discount to the order. Display the discount text only if a discount has been applied.
//  - The total should reflect any discount that has been applied
//  - All dollar amounts should be displayed to 2 decimal places

const Product = ({
  dispatch,
  id,
  name,
  availableCount,
  price,
  orderedQuantity,
  total,
}) => {
  function add() {
    if (orderedQuantity === availableCount) {
      return;
    }
    dispatch({
      type: "OPERATION",
      id,
      orderedQuantity: 1,
    });
  }

  function substract() {
    if (orderedQuantity === 0) {
      return;
    }
    dispatch({
      type: "OPERATION",
      id,
      orderedQuantity: -1,
    });
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableCount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button onClick={add} className={styles.actionButton}>
          +
        </button>
        <button onClick={substract} className={styles.actionButton}>
          -
        </button>
      </td>
    </tr>
  );
};

const Checkout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [productList, dispatch] = useReducer(ProductsReducer, []);

  function calcTotal(productList: ProductType[]): number {
    return productList.reduce((prev, curr) => {
      return prev + curr.total;
    }, 0);
  }

  function calcTotalWithoutDiscount(productList: ProductType[]): number {
    return productList.reduce((prev, curr) => {
      return prev + curr.orderedQuantity * curr.price;
    }, 0);
  }

  const total = calcTotal(productList);

  const totalWithoutDiscount = calcTotalWithoutDiscount(productList);

  useEffect(() => {
    getProducts().then((products) => {
      dispatch({ type: "SET", payload: products });
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <header className={styles.header}>
        <h1>Electro World</h1>
      </header>
      <main>
        {loading ? <LoadingIcon /> : <></>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <Product
                dispatch={dispatch}
                id={product.id}
                orderedQuantity={product.orderedQuantity}
                name={product.name}
                price={product.price}
                total={product.total}
                availableCount={product.availableCount}
                key={product.id}
              />
            ))}
          </tbody>
        </table>
        <h2>Order summary</h2>
        <p>Discount: {totalWithoutDiscount - total}$ </p>
        <p>Total: {Math.round(total)}$ </p>
      </main>
    </div>
  );
};

export default Checkout;
