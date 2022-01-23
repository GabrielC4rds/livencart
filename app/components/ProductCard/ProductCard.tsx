import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cartStore';
import {Cards, Image, NamePrice, Button} from './ProductCard.module';


const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  //aqui estou usando a função para mandar um produto especifico por vez para o carrinho
  return (
    <div>
      <Cards>
        <Image src={product.image}/>
        <NamePrice>
          <label>{product.name}</label>
          <label>{product.price}</label>
        </NamePrice>
        <Button id="Button" onClick={() => dispatch(addToCart(product))}>Adicionar ao carrinho</Button>
      </Cards>
    </div>
  )

};

export default ProductCard;