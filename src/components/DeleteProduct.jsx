
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteVacationById } from "../JS/Actions/VacationActions";
import { deleteHomeGardenById } from "../JS/Actions/HomeGardenActions";
import { deleteFashionById } from "../JS/Actions/FashionActions";
import { deleteVehicleById } from "../JS/Actions/VehicleActions";
import { deleteRealEstateById } from "../JS/Actions/RealEstateActions";

export default function DeleteProduct({product,onClose}) {
  console.log("product to deleet",product)
  const [openModal, setOpenModal] = useState(true);
   const dispatch = useDispatch();
const navigate=useNavigate();
const handleClose=()=>{
 if (
   product.categorie === "apartment" ||
   product.categorie === "villa" ||
   product.categorie === "ground" ||
   product.categorie === "office" ||
   product.categorie === "commercial"
 ) {
   dispatch(deleteRealEstateById(product._id));
 }
 if (
   product.categorie === "bike" ||
   product.categorie === "car" ||
   product.categorie === "boating" ||
   product.categorie === "motorcycle" ||
   product.categorie === "others" ||
   product.categorie === "truck"
 ) {
   dispatch(deleteVehicleById(product._id));
 }
 if (
   product.categorie === "AccessoriesLuggage" ||
   product.categorie === "clothes" ||
   product.categorie === "shoes" ||
   product.categorie === "WatchJewelery"
 ) {
   dispatch(deleteFashionById(product._id));
 }
 if (
   product.categorie === "decoration" ||
   product.categorie === "DIY" ||
   product.categorie === "furnishing" ||
   product.categorie === "gardening" ||
   product.categorie === "textile" ||
   product.categorie === "household" ||
   product.categorie === "tableware"
 ) {
   dispatch(deleteHomeGardenById(product._id));
 }
 if (
   product.categorie === "villaV" ||
   product.categorie === "hotel" ||
   product.categorie === "flashsale" ||
   product.categorie === "apartmentV"
 ) {
   dispatch(deleteVacationById(product._id));
 }
   
setOpenModal(false);
navigate(-1);
}
const handleonClose = () => {
  setOpenModal(false);
  onClose(false);
};
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={() => handleonClose()} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => handleClose()}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => handleonClose()}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
