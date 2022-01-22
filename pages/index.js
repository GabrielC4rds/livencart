import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    async function FetchMyApi() {
      const response = await axios.get(
        'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
        )
        console.log(response)
      }
      FetchMyApi();
    }, []);

  return (
    <div className={styles.container}>
      
    </div>
  )
}

// Home.getInitialProps = async () =>{ 
//   const response = await axios.get(
//     'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
//   )
//   console.log(response)
//   // return [ dados : ]
// }
