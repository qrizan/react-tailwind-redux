import "./App.css";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Product from "./components/Products/Product.jsx";
import Cart from "./components/Carts/Cart.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="flex overflow-hidden bg-white pt-16 h-dvh">
        <Menu />
        <main  className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
          <div className="pt-6 px-4">
            <div className="w-full grid grid-cols-12 gap-4">
              <Product />
              <Cart />
            </div>
          </div>
        </main>

        <p className="text-center text-sm text-gray-500 my-10"></p>
      </div>
    </>
  );
}

export default App;
