import { useDispatch } from "react-redux";
import {
    incrementCounterAction,
    decrementCounterAction,
    updateQtyAction,
} from "../../store/actions/product";

const CartCounter = (props) => {
    const dispatch = useDispatch();
    const { item } = props;

    const updateQty = (event, product_id, id) => {
        const qty = event.target.value;
        if (Number(qty) && qty > 0) {
          dispatch(updateQtyAction(id, product_id, qty));
        }
    };

    const handleCounterIncrement = (id, product_id) => {
        dispatch(incrementCounterAction(id, product_id));
    };
    
    const handleCounterDecrement = (id, product_id) => {
        dispatch(decrementCounterAction(id, product_id));
    };

    return(
        <div className="flex">
        <button
            onClick={() =>
                handleCounterDecrement(item.id, item.product_id)
            }
            className=" 
            bg-gray-300 
            text-gray-600 
            hover:text-gray-700 
            hover:bg-gray-400 
            w-8
            cursor-pointer 
            outline-none"
        >
          <span className="m-auto text-2xl">−</span>
        </button>
        <input
            type="text"
            name="qty"
            value={item.qty}
            onChange={() =>
                updateQty(event, item.product_id, item.id)
            }
            className="
            outline-none 
            focus:outline-none 
            text-center 
            max-w-11
            font-semibold 
            h-8
            flex 
            border-none	
            bg-gray-300
            text-gray-700"
        ></input>
        <button
            onClick={() =>
                handleCounterIncrement(item.id, item.product_id)
            }
            className="
            bg-gray-300 
            text-gray-600 
            hover:text-gray-700 
            hover:bg-gray-400 
            w-8
            cursor-pointer"
        >
          <span className="m-auto text-2xl">+</span>
        </button>
      </div>
    )

}
export default CartCounter
