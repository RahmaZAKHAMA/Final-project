import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getRealEstateById } from "../JS/Actions/RealEstateActions";
import { getVehicleById } from "../JS/Actions/VehicleActions";

import { LeftOutlined } from "@ant-design/icons";
import { Button } from "flowbite-react";
import { getFashionById } from "../JS/Actions/FashionActions";
import { getHomeGardenById } from "../JS/Actions/HomeGardenActions";
import { getVacationById } from "../JS/Actions/VacationActions";
import DeleteProduct from "../components/DeleteProduct";
import EditProduct from "../components/EditProduct";
import { getUserById } from "../JS/Actions/AuthActions";


const Productpage = () => {
  const [showModalDelete, setshowModalDelete] = useState(false);
  const [showModalEdit, setshowModalEdit] = useState(false);
  const [product, setproduct] = useState(null);
 
const isAuth = useSelector((state) => state.AuthReducer.isAuth);
const user = useSelector((state) => state.AuthReducer.user);
console.log("isAuth:",isAuth);

  const { id, categorie } = useParams();
  const realestate = useSelector((state) => state.RealEstateReducer.RealEstate);
  const vehicle = useSelector((state) => state.VehicleReducer.vehicle);
  const fashion = useSelector((state) => state.FashionReducer.Fashion);
    const vacation = useSelector((state) => state.VacationReducer.Vacation);
    const AdminAnnounce= useSelector((state) => state.AuthReducer.AdminAnnounce);
    console.log("AdminAnnounce", AdminAnnounce);
     const homegarden = useSelector(
       (state) => state.HomeGardenReducer.HomeGarden
     );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
console.log("categorie is " + categorie);
  useEffect(() => {
    
   // setshowModalDelete(false);
  //  setshowModalEdit(false);
    if (
      categorie === "apartment" ||
      categorie === "villa" ||
      categorie === "ground" ||
      categorie === "office" ||
      categorie === "commercial"
    ) {
      dispatch(getRealEstateById(id));
    } 
    if (
      categorie === "bike" ||
      categorie === "car" ||
      categorie === "boating" ||
      categorie === "motorcycle" ||
      categorie === "others" ||
      categorie === "truck"
    ) {
      dispatch(getVehicleById(id));
    }
     if (
       categorie === "AccessoriesLuggage" ||
       categorie === "clothes" ||
       categorie === "shoes" ||
       categorie === "WatchJewelery"
     ) {
       dispatch(getFashionById(id));
     }
 if (
   categorie === "decoration" ||
   categorie === "DIY" ||
   categorie === "furnishing" ||
   categorie === "gardening" ||
   categorie === "textile" ||
   categorie === "household" ||
   categorie === "tableware"
 ) {
  dispatch(getHomeGardenById(id));
 }
 if (
   categorie === "villaV" ||
   categorie === "hotel" ||
   categorie === "flashsale" ||
   categorie === "apartmentV"
 ) {
   dispatch(getVacationById(id));
 }
  
  }, [dispatch, id, categorie]);

  useEffect(() => {
    if (
      categorie === "apartment" ||
      categorie === "villa" ||
      categorie === "ground" ||
      categorie === "office" ||
      categorie === "commercial"
    ) {
      setproduct(realestate);
    }
    if (
      categorie === "bike" ||
      categorie === "car" ||
      categorie === "boating" ||
      categorie === "motorcycle" ||
      categorie === "others" ||
      categorie === "truck"
    ) {
      setproduct(vehicle);
    }
    if (
      categorie === "AccessoriesLuggage" ||
      categorie === "clothes" ||
      categorie === "shoes" ||
      categorie === "WatchJewelery"
    ) {
      setproduct(fashion);
    }
    if (
      categorie === "decoration" ||
      categorie === "DIY" ||
      categorie === "furnishing" ||
      categorie === "gardening" ||
      categorie === "textile" ||
      categorie === "household" ||
      categorie === "tableware"
    ) {
      setproduct(homegarden);
    }
    if (
      categorie === "villaV" ||
      categorie === "hotel" ||
      categorie === "flashsale" ||
      categorie === "apartmentV"
    ) {
      setproduct(vacation);
    }
   
  }, [vehicle, realestate, categorie,fashion,homegarden,vacation]);

    useEffect(() => {
      // Appeler `getUserById` une fois que `product` est défini et que `admin` est présent
      if (product && product.admin) {
        dispatch(getUserById(product.admin));
        console.log("Produit admin récupéré:", product.admin);
      }
    }, [dispatch, product]);
    
console.log("real", realestate);
console.log("productt", product);
//if(product!=null) {  console.log("rerererereretetetet", product.admin);dispatch(getUserById(product.admin));}
console.log("AdminAnnounce", AdminAnnounce);
 

  return (
    <div className="md:px-16 mt-5">
      {AdminAnnounce && (
        <div className="text-base font-semibold leading-7 text-gray-900">
          Admin Information
          <div class="relative overflow-x-auto">
            <table class="mt-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Posted By
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Updated At
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {AdminAnnounce.name}
                  </th>
                  <td class="px-6 py-4">{AdminAnnounce.email}</td>
                  <td class="px-6 py-4">{AdminAnnounce.phone}</td>
                  <td class="px-6 py-4">{AdminAnnounce.updatedAt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {product && (
        <>
          <div className="flex justify-center flex-col items-center">
            <img
              src={product.image} // Use product.image instead of vehicle.image
              alt="car"
              className="mt-5 w-2/5 rounded-lg"
            />
            <div className="flex justify-center items-center gap-4 mt-2">
              <button
                onClick={() => navigate(-1)} // Navigate back
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-white hover:bg-gray-600 transition-colors duration-300"
              >
                <LeftOutlined />
              </button>

              {isAuth == true && user._id == product.admin ? (
                <>
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
                </>
              ) : null}
            </div>
            {showModalEdit && (
              <EditProduct
                product={product}
                onClose={() => setshowModalEdit(false)}
              />
            )}
            {showModalDelete && (
              <DeleteProduct
                product={product}
                onClose={() => setshowModalDelete(false)}
              />
            )}
          </div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              {categorie} Information
            </h3>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              {Object.entries(product).map(([key, value]) => (
                <div
                  className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                  key={key}
                >
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                    {/* Capitalize key */}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </>
      )}
    </div>
  );
};

export default Productpage;
