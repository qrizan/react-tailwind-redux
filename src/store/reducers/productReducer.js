import { products } from "../../utils/data";
import uuid from 'react-uuid'

const initialState = {
    products: products,
    productsFiltered: [],
    item: {},
    carts: [],
    payment: {
        'total': 0,
        'amount': 0,
        'change': 0
    },
    active: 'All'
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_PRODUCTS_BY_CATEGORY": {

        if(payload !== 'All'){
            const productsFiltered = state.products.filter(
                (item) => item.category === payload
              );
        
              return {
                ...state,
                productsFiltered: productsFiltered,
              };
        }else{
            return {
                ...state,
                productsFiltered: products,            
            }
        }
    }
    case "FETCH_PRODUCT_BY_ID": {
        const item = state.products.find((item) => item.id === payload);
        if(item){
            return {
                ...state,
                item: item,
            };
        }else{
            return state
        }
    }    
    case "ADD_TO_CART": {
        const checkItemInCart = state.carts.find(
            (item) => item.product_id === payload.id && item.size === payload.size
        );

        const totalCarts = state.carts.reduce(
            (totalPrice, current) => totalPrice + current.price,
            0
        );
        
        const product = state.products.find((item) => item.id === payload.id)

        const newPayment = {
            total: totalCarts + product.price,
            amount: state.payment.amount,
            change: state.payment.amount - (totalCarts + product.price)
        };

        if (!checkItemInCart) {
            const newItemCart = {
            id: uuid(),
            product_id: product.id,
            image: product.image,
            name: product.name,
            price: product.price,
            size: payload.size,
            qty: 1,
            };


            return {
            ...state,
            carts: [...state.carts, newItemCart],
            payment: newPayment

            };
      } else {

        const itemInCarts = state.carts.map((item) => {
          if (item.product_id === payload.id && item.size === payload.size) {
            return {
              ...item,
              price: (checkItemInCart.qty + 1) * product.price,
              qty: checkItemInCart.qty + 1
            };
          } else {
            return item;
          }
        });

        return {
          ...state,
          carts: itemInCarts,
          payment: newPayment

        };
      }
    }
    case "UPDATE_QTY": {
        const originalPrice = state.products.find(
            (item) => item.id === payload.product_id
        ).price;

        const newPayment = {
            ...state.payment,
            total: payload.qty * originalPrice,
            change: state.payment.amount - (payload.qty * originalPrice)
        };
          
        const itemInCarts = state.carts.map((item) => {
            if (item.id === payload.id) {
            return {
                ...item,
                qty: payload.qty,
                price: payload.qty * originalPrice,
            };
            } else {
            return item;
            }
        });

        return {
            ...state,
            carts: itemInCarts,
            payment: newPayment
        };
    }
    case "INCREMENT":{
        const originalPrice = state.products.find(item => item.id === payload.product_id).price
              
        const newPayment = {
            ...state.payment,
            total: state.payment.total + originalPrice,
            change: state.payment.amount - (state.payment.total + originalPrice)
        };

        const incrementCarts = state.carts.map((item) => {
          if(item.id === payload.id){
            return{
              ...item,
              qty: item.qty + 1,
              price: item.price + originalPrice
            }
          }else{
            return item
          }
        })
        return {
          ...state,
          carts: incrementCarts,
          payment: newPayment
        }
    }

    case "DECREMENT":{
        const originalPrice = state.products.find(item => item.id === payload.product_id).price
        
        const decrementCarts = state.carts.map((item) => {
          if(item.id === payload.id && item.qty !== 0){
            return{
              ...item,
              qty: item.qty - 1,
              price: item.price - originalPrice
            }
          }else{
            return item
          }
        })

        const newPayment = {
            ...state.payment,
            total: (state.payment.total > 0) ? state.payment.total - originalPrice : 0,
            change: (state.payment.total > 0) ? state.payment.amount - (state.payment.total - originalPrice) :  state.payment.amount
        };        

        return {
          ...state,
          carts: decrementCarts,
          payment: newPayment
        } 
    }
    case "UPDATE_PAYMENT": {
        const totalCarts = state.carts.reduce(
            (totalPrice, current) => totalPrice + current.price,
            0
          );
      
        const newPayment = {
            total: totalCarts,
            amount: payload,
            change: payload - totalCarts

        };

        return {
            ...state,
            payment: newPayment
        };


    }
    case "REMOVE_ITEM": {
        const newCart = state.carts.filter((item) => item.id !== payload.id)
        const subtotalProductPrice = state.carts.find((item) => item.id === payload.id).price
        const newPayment = {
            ...state.payment,
            total: state.payment.total - subtotalProductPrice,
            change: state.payment.amount - (state.payment.total - subtotalProductPrice)
        };        

        return {
            ...state,
            carts: newCart,
            payment: newPayment
        };
    }
    case "RESET_CART": {
        return {
            ...state,
            item: {},
            carts: [],
            payment: {
              'total': 0,
              'amount': 0,
              'change': 0
            }        
        };
    }
    case "ACTIVE_MENU": {
      
      state.payment.active
      return {
          ...state,
          active: payload
      };
  }    
    default:
      return state;
  }
};

export default productReducer;
