import { useDispatch, useSelector } from "react-redux"
import Layout from "../Layouts/Layouts"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { productAction } from "../Redux/Actions/Product";
import { addToCartAction } from "../Redux/Actions/Cart";


function ProductDetail() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const productReducer = useSelector((state) => state.productReducer);
    const { loading, error, product } = productReducer;

    useEffect(() => {
        dispatch(productAction(id))
    }, [dispatch, id])

    const [qty, setQty] = useState(1);
    const addToCartHandler = () => {
        dispatch(addToCartAction(id, qty));
        alert("Item added to cart");
    }

    return (

        <Layout>
            {loading ? (<div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-infinity loading-xl"></span>
            </div>) : error ? (<h1>{error}</h1>) : (
                <>

                    <section class="text-gray-600 body-font overflow-hidden">
                        <div class="container px-5 py-24 mx-auto">
                            <div class="lg:w-4/5 mx-auto flex flex-wrap">
                                <img alt="ecommerce"
                                    class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                    src={product.image} />
                                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND</h2>
                                    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                                    <div class="flex mb-4">
                                        <span class="flex items-center">
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                            <span class="text-gray-600 ml-3">{product.numReview} Reviews</span>
                                        </span>
                                    </div>


                                    <p class="leading-relaxed">{product.description}</p>
                                    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    </div>
                                    <div class="flex">
                                        <span class="title-font font-medium text-2xl text-gray-900">Price: ${product.price}</span>

                                        {
                                            product.countInStock > 0 ? (
                                                <div class="flex ml-6 items-center">

                                                    <span class="mr-3 ">Quantity</span>
                                                    <div class="relative ">

                                                        <select value={qty} onChange={(e) => setQty(parseInt(e.target.value, 10))} class="cursor-pointer rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                                            {[...Array(product.countInStock).keys()].map((x) => (
                                                                <option key={x + 1} value={x + 1}>
                                                                    {x + 1}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                                <path d="M6 9l6 6 6-6"></path>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                            ) : (
                                                <></>
                                            )
                                        }

                                        {product.countInStock > 0 ? (
                                            <button onClick={addToCartHandler} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cursor-pointer">Add to cart!</button>

                                        ) : (
                                            <button disabled class="flex ml-auto text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded cursor-not-allowed">Out of Stock</button>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>)}
        </Layout>

    )
}

export default ProductDetail;