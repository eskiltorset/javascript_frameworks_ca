import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Products() {

    const url = 'https://v2.api.noroff.dev/online-shop';
  
      const [posts, setPosts] = useState([]);
      // State for holding our loading state
      const [isLoading, setIsLoading] = useState(false);
      // State for holding our error state
      const [isError, setIsError] = useState(false);
    
      useEffect(() => {
        async function getData() {
          try {
            // Reset the error state in case there as an error previously
            setIsError(false);
            // Turn on the loading state each time we do an API call
            setIsLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.data);
            console.log(response);
            setPosts(json.data);
            // Clear the loading state once we've successfully got our data
            setIsLoading(false);
          } catch (error) {
            // Clear the loading state if we get an error and then
            // set our error state to true
            setIsLoading(false);
            setIsError(true);
          }
        }
    
        getData();
      }, []);
    
      if (isLoading) {
        return <div>Loading posts</div>;
      }
    
      if (isError) {
        return <div>Error loading data</div>;
      }
    
      return (
        <div className='mx-3'> <h1 className="text-center p-3">Products</h1>
        <div className='d-flex flex-row flex-wrap'>
         {Array.from(posts).map((post) => {
            return (
                <div className='border p-3 mt-2 w-25'>
                <div key={post.id}>
                  <div className='image-div'>
                    <img src={post.image.url} className='w-100'></img>
                  </div>
                  <h5 className='mt-2'>{post.title}</h5>
                  {/* <p>{post.description}</p> */}
                  <p>{post.discountedPrice}$</p>
                  <p>Rating: {post.rating}</p>
                  <h6>Reviews: {post.reviews.length}</h6>
                  {/* <button>View Product</button> */}
                  <Link to={post.id}>View Product</Link>
                </div>
                </div>
             
            );
          })}
        </div>
        </div>
      );
    }

    export default Products;