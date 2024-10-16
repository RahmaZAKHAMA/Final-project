import React, { useState } from "react";
import { Button, ButtonGroup, Modal } from "flowbite-react";

import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editVehicle } from "../JS/Actions/VehicleActions";
import { editFashion } from "../JS/Actions/FashionActions";
import { editVacation } from "../JS/Actions/VacationActions";
import { editRealEstate } from "../JS/Actions/RealEstateActions";
import { editHomeGarden } from "../JS/Actions/HomeGardenActions";
const EditProduct = ({ product, onSave, onClose }) => {

  const [editedProduct, setEditedProduct] = useState({ ...product });
const [openModal, setOpenModal] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };
const handleSave = () => {
  if (
    product.categorie === "apartment" ||
    product.categorie === "villa" ||
    product.categorie === "ground" ||
    product.categorie === "office" ||
    product.categorie === "commercial"
  ) {
    dispatch(editRealEstate(product._id, editedProduct));
  }
  if (
    product.categorie === "bike" ||
    product.categorie === "car" ||
    product.categorie === "boating" ||
    product.categorie === "motorcycle" ||
    product.categorie === "others" ||
    product.categorie === "truck"
  ) {
    dispatch(editVehicle(product._id, editedProduct));
  }
  if (
    product.categorie === "AccessoriesLuggage" ||
    product.categorie === "clothes" ||
    product.categorie === "shoes" ||
    product.categorie === "WatchJewelery"
  ) {
    dispatch(editFashion(product._id,editedProduct));
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
    dispatch(editHomeGarden(product._id,editedProduct));
  }
  if (
    product.categorie === "villaV" ||
    product.categorie === "hotel" ||
    product.categorie === "flashsale" ||
    product.categorie === "apartmentV"
  ) {
    dispatch(editVacation(product._id,editedProduct));
  }

  setOpenModal(false);
  onClose(true);
 // navigate(-1);
};
  //const handleSave = () => {
  //  onSave(editedProduct); // Enregistre les modifications
    //onClose(); // Ferme le modal
  //};

  return (
    <div className="modal-overlay">
      <Modal show={openModal} size="2xl" onClose={() => onClose(true)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="modal-content">
              <h2>Edit product details</h2>
              <table className="mt-4 table-auto w-full">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(editedProduct).map(
                    ([key, value]) =>
                      key !== "_id" &&
                      key !== "createdAt" &&
                      key !== "updatedAt" &&
                      key !== "__v" && (
                        <tr key={key}>
                          <td className="px-4 py-2 text-left font-semibold">
                            {key}
                          </td>
                          <td className="px-4 py-2">
                            <input
                              type="text"
                              name={key}
                              value={value}
                              onChange={handleChange}
                              className="border p-1 w-full"
                            />
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              </table>
              <div className="modal-footer mt-4">
                <button
                  className="bg-purple-500 text-white px-4 py-2 rounded"
                  onClick={() => handleSave()}
                >
                  Enregistrer
                </button>

                <button
                  onClick={onClose}
                  className="bg-red-400 text-white px-4 py-2 rounded ml-2"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditProduct;
