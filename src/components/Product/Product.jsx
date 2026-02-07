import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleWishList } from "../../reducer/features/wishListSlice";
import { addToCart,fetchProduct } from "../../reducer/features/cartSlice";
import { useEffect } from "react";
import "./Product.css"


const Product = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
        <h1>All Products</h1>
        <p>All products are available to order</p>
        <div className="product-container">
            {products.map((item) => (
            <div key={item.id} className="product-card">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>₹{item.price}</p>

                <button onClick={() => dispatch(addToCart(item))}>
                Add to Cart
                </button>

                <button onClick={() => dispatch(toggleWishList(item))}>
                Wishlist
                </button>
            </div>
            ))}
        </div>
    </div>

  );
};

export default Product;