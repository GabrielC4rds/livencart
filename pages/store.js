import axios from 'axios'
import { useEffect, useState } from 'react';
import ProductCard from '../app/components/ProductCard/ProductCard';

export default function Store() {
 
const [all, setAll] = useState([]);
useEffect(() => {
  async function FetchMyApi() {
    //usando axios para pegar os itens da api
    let response = await axios.get(
      'https://5d6da1df777f670014036125.mockapi.io/api/v1/product'
    )
    setAll(response.data)
  }
  FetchMyApi();
 
}, []);

  return (
    <div >
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
        {
          all.map((res) => {
            return (
              <ProductCard id="data" key={res.id} product={res} name={res.name} price={res.price} image={res.img}>
              </ProductCard>
            )
          })
        }
      </div>
    </div>
  )
}