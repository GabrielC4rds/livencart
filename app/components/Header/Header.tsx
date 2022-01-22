import styles from './Header.module.css';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return(

  <header className={styles.header}>
    <Link href="/">
      <h1 className={styles.h1}>Projeto-loja</h1>
    </Link>
    <Link href="/cart">
     <h2 className={styles.h2}>Carrinho ({getItemsCount()})</h2>
    </Link>
  </header>
  )
}


export default Header;