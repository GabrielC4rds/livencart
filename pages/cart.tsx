import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cartStore';
import styles from '../styles/cart.module.css';
//pagina de carrinho
const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    //pegar o preço total
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Seu carrinho está vazio</h1>
      ) : (
        <>
          <div className={styles.header}>
            <div>Imagem</div>
            <div>Produto</div>
            <div>Preço</div>
            <div>Quantidade</div>
            <div>Ações</div>
            <div>Valor Total</div>
          </div>
          {cart.map((item) => (
            <div key=""className={styles.body}>
              <div className={styles.image}>
              </div>
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <p>{item.quantity}</p>
              <div className={styles.buttons}>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              <p>$ {item.quantity * item.price}</p>
            </div>
          ))}
          <h2>Valor Total: $ {getTotalPrice()}</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;