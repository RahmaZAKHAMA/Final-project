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
import { Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

export default function ProductList({category}) {
   const [selectedProduct, setSelectedProduct] = useState(null);
 const [showModalDelete, setshowModalDelete] = useState(false);
 const [showModalEdit, setshowModalEdit] = useState(false);
const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.VehicleReducer.vehicles);
    const vehiclesCategory = useSelector((state) => state.VehicleReducer.vehiclesCategory);

const vehiclesCategorySubCategory = useSelector(
  (state) => state.VehicleReducer.vehiclesCategorySubCategory);

  const fashions = useSelector((state) => state.FashionReducer.Fashions);
   const fashionsCategory = useSelector(
     (state) => state.FashionReducer.FashionCategory
   );
const fashionsCategorySubCategory = useSelector((state) => state.FashionReducer.FashionCategorySubCategory);

  const HomeGarden = useSelector((state) => state.HomeGardenReducer.HomeGardens);
   const HomeGardenCategory = useSelector(
     (state) => state.HomeGardenReducer.HomeGardensCategory
   );
  const RealEstatesCategory = useSelector(
    (state) => state.RealEstateReducer.RealEstateCategory);
  const RealEstates = useSelector(
    (state) => state.RealEstateReducer.RealEstates);
  
  const vacation = useSelector((state) => state.VacationReducer.Vacations);
    const vacationCategory = useSelector((state) => state.VacationReducer.VacationsCategory);
  let products = [];

  // Set products based on the category
  switch (category) {
    case "vehicles":
      products = vehicles; // Use the vehicles from the state
      break;
    case "vehiclesBikes":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesCars":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesBoating":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcycles":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesOthers":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesTrucks":
      products = vehiclesCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsOthers":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsAudi":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsBMW":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsPeugeot":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsRenault":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesCarsMercedes":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcyclesBMW":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcyclesHonda":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcyclesKawasaki":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcyclesOthers":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    case "vehiclesMotorcyclesYamaha":
      products = vehiclesCategorySubCategory; // Use the vehicles from the state
      break;
    ///////
    case "fashion":
      products = fashions; // Use the vehicles from the state
      break;

    case "fashionAccessoriesLuggage":
      products = fashionsCategory; // Use the vehicles from the state
      break;
    case "fashionAccessoriesLuggageKids":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionAccessoriesLuggageMan":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionAccessoriesLuggageWomen":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionClothes":
      products = fashionsCategory; // Use the vehicles from the state
      break;
    case "fashionClothesKids":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionClothesMan":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionClothesWomen":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;

    case "fashionShoes":
      products = fashionsCategory; // Use the vehicles from the state
      break;
    case "fashionShoesMan":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionShoesWomen":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionShoesKids":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;

    case "fashionWatchJewelery":
      products = fashionsCategory; // Use the vehicles from the state
      break;
    case "fashionWatchJeweleryKids":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionWatchJeweleryWomen":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;
    case "fashionWatchJeweleryMan":
      products = fashionsCategorySubCategory; // Use the vehicles from the state
      break;

    case "HomeGarden":
      products = HomeGarden; // Use the vehicles from the state
      break;

    case "HomeGardenDecoration":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;

    case "HomeGardenDIY":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "HomeGardenFurnishing":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "HomeGardenGardening":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "HomeGardenTextiles":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "HomeGardenHousehold":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "HomeGardenTableware":
      products = HomeGardenCategory; // Use the vehicles from the state
      break;
    case "realestate":
      products = RealEstates; // Use the vehicles from the state
      break;
    case "realestatevilla":
      products = RealEstatesCategory; // Use the vehicles from the state
      break;

    case "realestateApartment":
      products = RealEstatesCategory; // Use the vehicles from the state
      break;

    case "realestateGround":
      products = RealEstatesCategory; // Use the vehicles from the state
      break;
    case "realestateApartment":
      products = RealEstatesCategory; // Use the vehicles from the state
      break;

    case "realestateOffice":
      products = RealEstatesCategory; // Use the vehicles from the state
      break;

    case "vacation":
      products = vacation; // Use the vehicles from the state
      break;

    case "vacationVilla":
      products = vacationCategory;
      break;

    case "vacationHotel":
      products = vacationCategory;
      break;

    case "vacationFlashSale":
      products = vacationCategory;
      break;

    case "vacationApartment":
      products = vacationCategory;
      break;

    default:
      products = [];
      break;
  }

  useEffect(() => {
  
    switch (category) {
      case "vehicles":
        dispatch(getVehicles());
        break;
      case "vehiclesBikes":
        dispatch(getVehiclesByCategory("bike"));
        break;
      case "vehiclesCars":
        dispatch(getVehiclesByCategory("car"));
        break;
      case "vehiclesBoating":
        dispatch(getVehiclesByCategory("boating"));
        break;
      case "vehiclesMotorcycles":
        dispatch(getVehiclesByCategory("motorcycle"));
        break;
      case "vehiclesOthers":
        dispatch(getVehiclesByCategory("others"));
        break;
      case "vehiclesTrucks":
        dispatch(getVehiclesByCategory("truck"));
        break;
      case "vehiclesCarsMercedes":
        dispatch(getVehiclesByCategorySubCategory("car", "mercedes"));
        break;
      case "vehiclesCarsBMW":
        dispatch(getVehiclesByCategorySubCategory("car", "BMW"));
        break;
      case "vehiclesCarsRenault":
        dispatch(getVehiclesByCategorySubCategory("car", "renault"));
        break;
      case "vehiclesCarsOthers":
        dispatch(getVehiclesByCategorySubCategory("car", "others"));
        break;
      case "vehiclesCarsAudi":
        dispatch(getVehiclesByCategorySubCategory("car", "audi"));
        break;
      case "vehiclesCarsPeugeot":
        dispatch(getVehiclesByCategorySubCategory("car", "peugeot"));
        break;
      case "vehiclesMotorcyclesBMW":
        dispatch(getVehiclesByCategorySubCategory("motorcycle", "BMW"));
        break;
      case "vehiclesMotorcyclesHonda":
        dispatch(getVehiclesByCategorySubCategory("motorcycle", "honda"));
        break;
      case "vehiclesMotorcyclesKawasaki":
        dispatch(getVehiclesByCategorySubCategory("motorcycle", "kawasaki"));
        break;
      case "vehiclesMotorcyclesOthers":
        dispatch(getVehiclesByCategorySubCategory("motorcycle", "others"));
        break;
      case "vehiclesMotorcyclesYamaha":
        dispatch(getVehiclesByCategorySubCategory("motorcycle", "yamaha"));
        break;
      ////////
      case "fashion":
        dispatch(getFashions());
        break;
      case "fashionAccessoriesLuggage":
        dispatch(getFashionByCategory("AccessoriesLuggage"));
        break;
      case "fashionAccessoriesLuggageWomen":
        dispatch(
          getFashionByCategorySubCategory("AccessoriesLuggage", "Women")
        );
        break;
      case "fashionAccessoriesLuggageMan":
        dispatch(getFashionByCategorySubCategory("AccessoriesLuggage", "Man"));
        break;
      case "fashionAccessoriesLuggageKids":
        dispatch(getFashionByCategorySubCategory("AccessoriesLuggage", "Kids"));
        break;

      case "fashionClothes":
        dispatch(getFashionByCategory("clothes"));
        break;
      case "fashionClothesWomen":
        dispatch(getFashionByCategorySubCategory("clothes", "Women"));
        break;
      case "fashionClothesMan":
        dispatch(getFashionByCategorySubCategory("clothes", "Man"));
        break;
      case "fashionClothesKids":
        dispatch(getFashionByCategorySubCategory("clothes", "Kids"));
        break;

      case "fashionShoes":
        dispatch(getFashionByCategory("shoes"));
        break;
      case "fashionShoesWomen":
        dispatch(getFashionByCategorySubCategory("shoes", "Women"));
        break;
      case "fashionShoesMan":
        dispatch(getFashionByCategorySubCategory("shoes", "Man"));
        break;
      case "fashionShoesKids":
        dispatch(getFashionByCategorySubCategory("shoes", "Kids"));
        break;

      case "fashionWatchJewelery":
        dispatch(getFashionByCategory("WatchJewelery"));
        break;
      case "fashionWatchJeweleryWomen":
        dispatch(getFashionByCategorySubCategory("WatchJewelery", "Women"));
        break;
      case "fashionWatchJeweleryMan":
        dispatch(getFashionByCategorySubCategory("WatchJewelery", "Man"));
        break;
      case "fashionWatchJeweleryKids":
        dispatch(getFashionByCategorySubCategory("WatchJewelery", "Kids"));
        break;
      /////////////
      case "HomeGarden":
        dispatch(getHomeGardens());
        break;
      case "HomeGardenDecoration":
         dispatch(getHomeGardensByCategory("decoration"));
        break;

      case "HomeGardenDIY":
        dispatch(getHomeGardensByCategory("DIY"));
        break;
      case "HomeGardenFurnishing":
        dispatch(getHomeGardensByCategory("furnishing"));
        break;
      case "HomeGardenGardening":
        dispatch(getHomeGardensByCategory("gardening"));
        break;
      case "HomeGardenTextiles":
      dispatch(getHomeGardensByCategory("textile"));
        break;
      case "HomeGardenHousehold":
         dispatch(getHomeGardensByCategory("household"));
        break;
      case "HomeGardenTableware":
        dispatch(getHomeGardensByCategory("tableware"));
        break;
      /////////////
      case "vacation":
        dispatch(getVacations());
        break;

      case "vacationVilla":
        dispatch(getVacationsByCategory("villaV"));
        break;

      case "vacationHotel":
        dispatch(getVacationsByCategory("hotel"));
        break;

      case "vacationFlashSale":
        dispatch(getVacationsByCategory("flashsale"));
        break;

      case "vacationApartment":
        dispatch(getVacationsByCategory("apartmentV"));
        break;
      ///////////
      case "realestate":
        dispatch(getRealEstates());
        break;
      case "realestatevilla":
        dispatch(getRealEstateByCategory("villa")); // Use the vehicles from the state
        break;
      case "realestateApartment":
        dispatch(getRealEstateByCategory("apartment")); // Use the vehicles from the state
        break;
      case "realestateGround":
        dispatch(getRealEstateByCategory("ground")); // Use the vehicles from the state
        break;
      case "realestateOffice":
        dispatch(getRealEstateByCategory("office")); // Use the vehicles from the state
        break;
      case "realestateCommercial":
        dispatch(getRealEstateByCategory("commercial")); // Use the vehicles from the state
        break;
      default:
        products = [];
        break;
    }
  }, [dispatch, category]);
console.log("gg")
console.log(products);
console.log(fashionsCategorySubCategory);
 return (
   <div className="bg-white">
     {products && (
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
         <h2 className="sr-only">Products</h2>

         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
           {products.map((product) => (
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
