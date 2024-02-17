import { useSelector } from "react-redux";
import CartPayment from "./CartPayment";
import CartLists from "./CartLists"

const Cart = () => {
    const carts = useSelector((state) => state.product.carts);

    return (
        <div className="col-span-6">
            <CartLists carts={carts} />
            <CartPayment carts={carts} />
        </div>
    );
  }

export default Cart;
