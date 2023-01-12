import "./App.css";
import { CartItem } from "./component/cartItem";
import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";
import { useGlobalContext } from "./context/context";

function App() {
  const { state } = useGlobalContext();

  return (
    <div className="App">
      <main>
        <Navbar {...state} />
        <section className="cart">
          <header>
            <h2>Your bag</h2>
          </header>
          <div>
            {state.cart.map((cartItem) => {
              return <CartItem key={cartItem.id} {...cartItem} />;
            })}
          </div>
          <Footer {...state} />
        </section>
      </main>
    </div>
  );
}

export default App;
