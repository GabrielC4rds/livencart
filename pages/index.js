import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';

import ProductCard from '../app/components/ProductCard/ProductCard.tsx';


export default function Home() {
  const [all, setAll] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let response = await axios.get(
        'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
      )
      setAll(response.data)
      console.log(response)
    }
    FetchMyApi();
  }, []);

  return (
    <div >
     
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap"}}>

        {
          all.map((res) => {
            return (

              <ProductCard key={res.id} product={res} name={res.name} price={res.price} image={res.img}>

              </ProductCard>
            )
          })
        }
      </div>
    </div>
  )
}

