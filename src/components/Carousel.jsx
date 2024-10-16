import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVehicles } from "../JS/Actions/VehicleActions";
import { getFashions } from "../JS/Actions/FashionActions";
import { getHomeGardens } from "../JS/Actions/HomeGardenActions";
import { getVacations } from "../JS/Actions/VacationActions";
import { getRealEstates } from "../JS/Actions/RealEstateActions";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);

  // Select products from the Redux store
  const vehicles = useSelector((state) => state.VehicleReducer.vehicles);
  const fashions = useSelector((state) => state.FashionReducer.Fashions);
  const homeGardens = useSelector(
    (state) => state.HomeGardenReducer.HomeGardens
  );
  const realEstates = useSelector(
    (state) => state.RealEstateReducer.RealEstates
  );
  const vacations = useSelector((state) => state.VacationReducer.Vacations);

  const dispatch = useDispatch();

  // Load products from the server on component mount
  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getFashions());
    dispatch(getHomeGardens());
    dispatch(getVacations());
    dispatch(getRealEstates());
  }, [dispatch]);

  // Merge all products and sort by `updatedAt`
  useEffect(() => {
    const allProducts = [
      ...realEstates,
      ...fashions,
      ...homeGardens,
      ...vacations,
      ...vehicles,
    ];

    // Sort products by the most recent date
    const sortedProducts = allProducts.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );

    // Set the first 20 products
    setProducts(sortedProducts.slice(0, 21));
  }, [realEstates, fashions, homeGardens, vacations, vehicles]);

  // Slide navigation functions
  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % Math.ceil(products.length / 10)
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.ceil(products.length / 10)) %
        Math.ceil(products.length / 10)
    );
  };

  // Split products into two groups
  const currentProducts = products.slice(
    currentIndex * 6,
    (currentIndex + 1) * 6
  );

  return (
    <div className="pl-8 relative w-full overflow-hidden my-10">
      <div className="text-gray-400 font-nunito text-m mb-2 ml-2">
        Announcements Added Recently
      </div>
      <div className="flex transition-transform duration-500">
        {currentProducts.map((product) => (
          <a key={product.id} href={product.href} className="group mx-2">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <Link to={`/Productpage/${product.categorie}/${product._id}`}>
                <img
                  alt={product.name}
                  src={product.image}
                  className="h-12 w-24 md:h-52 md:w-56 object-cover object-center group-hover:opacity-75"
                />
              </Link>
            </div>
            <h3 className="mt-4 text-md font-nunito font-bold text-gray-600">{product.name}</h3>
            <p className="mt-1 text-md font-medium text-purple-500">
              {product.price}DT
            </p>
          </a>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-400 text-white p-2 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
