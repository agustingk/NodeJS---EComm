import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { productListAction } from "../Redux/Actions/Product";
import { Link } from "react-router-dom";

const Products = () => {
    const dispatch = useDispatch();
    const productListReducer = useSelector((state) => state.productListReducer);
    const { loading, error, products = [], } = productListReducer;

    useEffect(() => {
        dispatch(productListAction());
    }, [dispatch]);

    return (

        <div>
            {loading ? (<div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-infinity loading-xl"></span>
            </div>) : error ? (<h1>{error}</h1>) : (
                <>

                    <section class="text-gray-600 body-font">

                        <div class="flex flex-wrap -m-4">
                            {products.map((product) => (

                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>

                                    <div class="mt-6 grid gap-x-6 gap-y-10 xl:gap-x-8">
                                        <div class="group relative">
                                            <img
                                                src={product.image}
                                                alt="Front of men&#039;s Basic Tee in black."
                                                className="aspect-square w-full rounded-md bg-gray-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                                            <div class="mt-4 flex justify-between">
                                                <div>
                                                    <h3 class="text-sm text-gray-700">
                                                        <Link to={`/products/${product._id}`}>
                                                            <span aria-hidden="true" class="absolute inset-0"></span>
                                                            {product.name}
                                                        </Link>
                                                    </h3>
                                                    <p class="mt-1 text-sm text-gray-500"> Review Count: {product.numReview}</p>
                                                </div>
                                                <p class="text-sm font-medium text-gray-900">${product.price}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            ))}
                        </div>

                    </section>

                </>
            )}
        </div>
    );
}

export default Products;