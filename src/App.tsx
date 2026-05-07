import { useState } from "react";
import Header from "./widgets/header/Header";
import MainRouter from "./routes/MainRouter";
import { CartProvider } from "./features/cart/CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <CartProvider>
        <Header></Header>
        <MainRouter />
      </CartProvider>
    </Provider>
  );
}

export default App;
