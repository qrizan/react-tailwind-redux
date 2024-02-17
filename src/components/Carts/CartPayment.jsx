import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCartAction,
  updatePaymentAction,
} from "../../store/actions/product";
import { currencyFormat, currencyToNumber } from "../../utils/utils";
import Button from "../Button";
import Input from "../Input";
import CartFinishModal from "./CartFinishModal";

const CartPayment = () => {
  const dispatch = useDispatch();
  const payment = useSelector((state) => state.product.payment);
  const carts = useSelector((state) => state.product.carts);

  const [showModalFinishOrder, setShowModalFinishOrder] = useState(false);

  const handleChangeAmount = (event) => {
    const amount = currencyToNumber(event.target.value);
    if (amount > 0) {
      dispatch(updatePaymentAction(Number(amount)));
    }
  };

  const finishOrder = (e) => {
    e.preventDefault();
    setShowModalFinishOrder(true);
  };

  const resetCart = () => {
    dispatch(resetCartAction());
  };

  return (
    <div className="bg-white shadow-sm col-span-5">
      <div className="px-4 py-6 sm:px-6 mt-6">
        <div className="flex justify-between text-xl font-medium text-gray-900 mb-8">
          <p>Total</p>
          <p>$ {currencyFormat(payment.total)}</p>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-gray-900 mb-4">
          <p>Payment Amount</p>
          <div className="relative mt-2 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <Input
              action={handleChangeAmount}
              alert={payment.amount < payment.total}
              value={currencyFormat(payment.amount)}
              focus={true}
            />
          </div>
        </div>
        <div className="flex justify-between items-center text-sm font-medium text-gray-900">
          <p>Change</p>
          <div className="relative mt-2 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <Input
              action={handleChangeAmount}
              alert={false}
              value={payment.change > 0 ? currencyFormat(payment.change) : 0}
              focus={false}
              readOnly={true}
            />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Button
            action={resetCart}
            disable={carts.length < 1}
            label="Reset"
            type="negatif"
          />
          <Button
            action={finishOrder}
            disable={
              carts.length < 1 ||
              payment.amount <= 0 ||
              payment.amount < payment.total
            }
            label="Finish"
            type="positif"
          />
        </div>
      </div>
      {showModalFinishOrder ? (
        <CartFinishModal
          setShowModalFinishOrder={setShowModalFinishOrder}
          resetCart={resetCart}
          carts={carts}
          payment={payment}
        />
      ) : null}
    </div>
  );
};

export default CartPayment;
