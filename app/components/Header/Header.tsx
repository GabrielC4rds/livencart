import {Navbar, Title, SubTitle} from './Header.module';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);
 
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return(

  <Navbar>
    <Link href="/">
      <Title>Projeto-loja</Title>
    </Link>
    <Link href="/cart">
    <SubTitle>Carrinho ({getItemsCount()})</SubTitle>
    </Link>
  </Navbar>
  )
}


export default Header;