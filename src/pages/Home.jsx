import React, { useEffect } from 'react'
import { useState } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products';
    const [loading , setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    async function fetchProductData(){
        setLoading(true);

        try{
            const result = await fetch(API_URL);
            const data = await result.json();
            setPosts(data);
        }
        catch(err){
            console.log("Error aa gaya");
            setPosts([]);
        }

        setLoading(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])
  return (
    <div>
        {
            loading?<Spinner/>:
            posts.length>0?
            (posts.map((post)=>{
                <Product key={post.id} post={post}/>
            })):
            (<div>No Post Fount</div>)
        }
    </div>
  )
}

export default Home