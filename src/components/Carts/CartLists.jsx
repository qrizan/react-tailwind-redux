import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeItemAction, fetchProductByIdAction } from "../../store/actions/product";
import { currencyFormat } from "../../utils/utils";
import CartCounter from "./CartCounter";
import ProductDetailModal from "../Products/ProductDetailModal";

const CartLists = () => {
    const dispatch = useDispatch();
    const carts = useSelector((state) => state.product.carts);
    const itemDetail = useSelector((state) => state.product.item);
    const [showModalProductDetail, setShowModalProductDetail] = useState(false);

    const removeItem = (id, product_id) => {
        dispatch(removeItemAction(id, product_id));
    };
    
    const showModalProduct = (id) => {
        dispatch(fetchProductByIdAction(id));
        setShowModalProductDetail(true);
    };

    return (
        <div className="bg-white shadow-sm p-4 col-span-12">
            <div className="flex flex-col">
            <div className="shadow-sm overflow-hidden overflow-y-auto h-96">
                <table className="min-w-full table-fixed">
                    <thead className="bg-gray-50">
                        <tr>
                        <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Product
                        </th>
                        <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Size
                        </th>
                        <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Qty
                        </th>
                        <th
                            scope="col"
                            className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Price
                        </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {carts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                        <span className="font-semibold cursor-pointer underline decoration-blue-900 text-blue-900" 
                                            onClick={() => showModalProduct(item.product_id)}>
                                            {item.name}
                                        </span>
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                        {item.size}
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                        <CartCounter 
                                            item={item}
                                        />
                                    </td>
                                    <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                        $ {currencyFormat(item.price)}
                                    </td>
                                    <td>
                                        <div
                                        onClick={() => removeItem(item.id)}
                                        className="cursor-pointer p-3"
                                        >   
                                        {/* start delete icon */}
                                        <svg
                                            className="h-5 w-5 text-red-600"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            {" "}
                                            <rect
                                            x="3"
                                            y="3"
                                            width="18"
                                            height="18"
                                            rx="2"
                                            ry="2"
                                            />{" "}
                                            <line x1="9" y1="9" x2="15" y2="15" />{" "}
                                            <line x1="15" y1="9" x2="9" y2="15" />
                                        </svg>
                                        {/* end delete icon */}                                        
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            </div>
            {showModalProductDetail ? (
        <ProductDetailModal
          setShowModalProductDetail={setShowModalProductDetail}
          itemDetail={itemDetail}
        />
      ) : null}            
      </div>        
    )
}

export default CartLists