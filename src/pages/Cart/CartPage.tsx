import { useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Cart.module.scss";
import { useCart } from "@/features/cart/CartContext";
import type { Tour } from "@/shared/api/types";

function CartPage() {
  const dispatch = useDispatch();
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.item.price * item.count, 0);
  }, [cart]);

  return (
    <section className="cart">
      <div className={styles.wrapper}>
        <h1>Кошик</h1>

        <div className="list">
          {cart.length > 0 ? (
            cart.map(({ item, count }) => (
              <div className="item" key={item.id} style={{ display: "flex" }}>
                <div
                  className="item__img"
                  style={{
                    height: "200px",
                    width: "300px",
                    backgroundColor: item.img,
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                ></div>
                <div className={styles.info}>
                  <div className="item__name">{item.title}</div>
                  <div className={styles.count}>
                    <button onClick={() => addToCart(item)}>+</button>
                    <div className="item__count">{count}</div>
                    <button onClick={() => removeFromCart(item.id)}>-</button>
                  </div>
                  <div className="item__price">{item.price * count}$</div>
                </div>
                <div className="div">
                  <button onClick={() => removeAllFromCart(item.id)}>
                    Видалити з кошика
                  </button>
                </div>
              </div>
            ))
          ) : (
            <h3>Кошик пустий</h3>
          )}
        </div>
        {cart.length > 0 ? (
          <div className={styles.ofer}>
            <h3>Сума оплати: {totalPrice} $</h3>
            <button>оплатити</button>
          </div>
        ) : (
          <Link to="/">Добавте товар у кошик</Link>
        )}
      </div>
    </section>
  );
}
export default CartPage;
