import CartProvider from "./pages/CartProvider";
import Product from "./pages/Product";
import Addtofile_route from "./routes/Addtofile_route";


function App() {
  return (
    <div>
      <CartProvider>
        <Addtofile_route />
      </CartProvider>


    </div>
  );
}

export default App;
