import styles from './ProductCard.module.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartStore';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.card}>
        <img className={styles.image} src={product.image} />
        <div className={styles.namePrice}>

          <label>{product.name}</label>
          <label>{product.price}</label>
        </div>
        <button onClick={() => dispatch(addToCart(product))}>Adicionar ao carrinho</button>
      </div>
    </div>
  )

};

export default ProductCard;