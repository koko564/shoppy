import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {selectedProduct, removeselectedProduct} from '../redux/actions/productActions'
const DetailsProduct = () => {
    const product =useSelector ((state) => state.product);
    const {description,title,image,price,category}=product;
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product)

    const fetchProductDetails = async () =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err);
        });

        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId && productId!== "")
        fetchProductDetails();
        return () => {
          dispatch(removeselectedProduct());
        }
        },[productId])

    return (
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div class="ui large active centered inline loader"></div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui blue label">${price}</a>
                  </h2>
                  <p>{description}</p>
                  <div className="ui horizontal animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default DetailsProduct