import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getVehicles,
  getVehiclesByCategory,
  getVehiclesByCategorySubCategory,
} from "../JS/Actions/VehicleActions";
import {
  getRealEstates,
  getRealEstateByCategory,
} from "../JS/Actions/RealEstateActions";
import {
  getFashions,
  getFashionByCategory,
  getFashionByCategorySubCategory,
} from "../JS/Actions/FashionActions";
import { getHomeGardens, getHomeGardensByCategory } from "../JS/Actions/HomeGardenActions";
import { getVacations, getVacationsByCategory } from "../JS/Actions/VacationActions";
import { Button } from "flowbite-react";
import { Link, useParams } from "react-router-dom";


export default function ProductListSearched() {
 // const [searchTerm, setSearchTerm] = useState(""); // Pour stocker la requête de recherche
   const { searchTerm } = useParams(); 
 console.log(searchTerm);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModalDelete, setshowModalDelete] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.VehicleReducer.vehicles);
  const HomeGarden = useSelector(
    (state) => state.HomeGardenReducer.HomeGardens
  );

  const RealEstates = useSelector(
    (state) => state.RealEstateReducer.RealEstates
  );

  const vacation = useSelector((state) => state.VacationReducer.Vacations);

  const fashions = useSelector((state) => state.FashionReducer.Fashions);
  let products = [
    ...vehicles,
    ...HomeGarden,
    ...RealEstates,
    ...vacation,
    ...fashions,
  ];

  useEffect(() => {
    dispatch(getVehicles());
    dispatch(getFashions());
    dispatch(getHomeGardens());
    dispatch(getVacations());
    dispatch(getRealEstates());
    /////////////
  }, []);
 useEffect(() => {
   if (searchTerm) {
     const filtered = products.filter(
       (product) =>
         product.name &&
         product.name.toLowerCase().includes(searchTerm.toLowerCase())
     );
     setFilteredProducts(filtered);
   } else {
     setFilteredProducts(products); // Afficher tous les produits si aucun terme de recherche
   }
 }, [searchTerm]);
  console.log("gg");
  console.log(products);

  return (
    <div className="bg-white">
      {filteredProducts && (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-72 relative p-4 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col h-full">
                  {/* Fixing a consistent aspect ratio */}
                  <div className="aspect-w-1 aspect-h-1 w-full h-full overflow-hidden rounded-lg bg-gray-200">
                    <Link
                      to={`/Productpage/${product.categorie}/${product._id}`}
                    >
                      <img
                        alt={product.name}
                        src={product.image}
                        className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300 ease-in-out"
                      />
                    </Link>
                  </div>

                  <div className="mt-4 flex-grow">
                    <h3 className="text-sm font-medium text-gray-700">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {product.price}
                    </p>
                    <p className="mt-2 text-md text-gray-600 font-nunito">
                      {product.description}
                    </p>
                    {/*
                   <div className="flex space-x-2">
                     <Button
                       gradientMonochrome="failure"
                       onClick={() => setshowModalDelete(true)}
                     >
                       Delete
                     </Button>
                     <Button
                       gradientMonochrome="purple"
                       onClick={() => setshowModalEdit(true)}
                     >
                       EDIT
                     </Button>
                     {showModalEdit && (
                       <EditProduct
                         product={`${product._id}`}
                         onClose={() => {
                           setSelectedProduct(selectedProduct);
                           setshowModalEdit(false);
                         }}
                       />
                     )}
                     {showModalDelete && (
                       <DeleteProduct
                         product={product}
                         onClose={() => setshowModalDelete(false)}
                       />
                     )}
                   </div>*/}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
