import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, Tab } from "@headlessui/react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Label, Select } from "flowbite-react";
import { addRealEstate } from "../JS/Actions/RealEstateActions";
import { useDispatch, useSelector } from "react-redux";
import { addFashion } from "../JS/Actions/FashionActions";
import { addHomeGarden } from "../JS/Actions/HomeGardenActions";
import { addVacation } from "../JS/Actions/VacationActions";
import { addVehicle } from "../JS/Actions/VehicleActions";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const SubCategList = [
  {
    name: "car",
    subcategorie: "mercedes",
  },
  {
    name: "car",
    subcategorie: "audi",
  },
  {
    name: "car",
    subcategorie: "BMW",
  },
  {
    name: "car",
    subcategorie: "peugeot",
  },
  {
    name: "car",
    subcategorie: "renault",
  },
  {
    name: "car",
    subcategorie: "others",
  },
  {
    name: "motorcycle",
    subcategorie: "BMW",
  },
  {
    name: "motorcycle",
    subcategorie: "yamaha",
  },
  {
    name: "motorcycle",
    subcategorie: "kawasaki",
  },
  {
    name: "motorcycle",
    subcategorie: "honda",
  },
  {
    name: "motorcycle",
    subcategorie: "others",
  },
];
const AddNew = () => {
  const user = useSelector((state) => state.AuthReducer.user);
  console.log(user._id, user.name)
  const [selectedCategVehicle, setselectedCategVehicle] = useState("car");
  const [categ, setCateg] = useState("");
  const [subcateg, setSubCateg] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [newData, setnewData] = useState({});

  const [isEndRE, setIsEndRE] = useState(false);
  const [isEndF, setIsEndF] = useState(false);
  const [isEndVE, setIsEndVE] = useState(false);
  const [isEndV, setIsEndV] = useState(false);
  const [isEndHG, setIsEndHG] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  const handleCateg = (selectedValue, e) => {
    setCateg(selectedValue);
    setselectedCategVehicle(selectedValue);
     //  if (selectedCategVehicle != "car" || selectedCategVehicle != "")
      //   setselectedCategVehicle(categ);
      
    //handleChange(e);
  };
  const handleSubCateg = (selectedValue, e) => {
    setSubCateg(selectedValue);
    console.log(subcateg);
    //handleChange(e);
  };

  const handleChange = (e) => {
    console.log(e.target.value);

    setnewData({ ...newData, [e.target.name]: e.target.value });
  };
  
useEffect(() => {
  if (isEndRE) {
    setnewData((prevData) => ({ ...prevData, admin: String(user._id) }));
    dispatch(addRealEstate({ ...newData, admin: String(user._id) })); // Passez admin ici directement
    setOpen(false);
    navigate("/");
  }
  if (isEndF) {
    setnewData((prevData) => ({ ...prevData, admin: String(user._id) }));
    dispatch(addFashion({ ...newData, admin: String(user._id) }));
    setOpen(false);
    navigate("/");
  }
  if (isEndHG) {
    setnewData((prevData) => ({ ...prevData, admin: String(user._id) }));
    dispatch(addHomeGarden({ ...newData, admin: String(user._id) }));
    setOpen(false);
    navigate("/");
  }
  if (isEndVE) {
    setnewData((prevData) => ({ ...prevData, admin: String(user._id) }));
    dispatch(addVehicle({ ...newData, admin: String(user._id) }));
    setOpen(false);
    navigate("/");
  }
  if (isEndV) {
    setnewData((prevData) => ({ ...prevData, admin: String(user._id) }));
    dispatch(addVacation({ ...newData, admin: String(user._id) }));
    setOpen(false);
    navigate("/");
  }
}, [categ, subcateg, isEndRE, isEndF, isEndVE, isEndV, isEndHG]);

console.log("newDataAdded///", newData);
  const handleAddRealEstate = (e) => {
    e.preventDefault();
    console.log(categ);
    let updatedData;
    if (categ === "") updatedData = { ...newData, categorie: "apartment" };
    else updatedData = { ...newData, categorie: categ };

    setnewData(updatedData);

    setIsEndRE(true);

    console.log("New data added:", updatedData);
  };
  const handleAddFashion = (e) => {
    e.preventDefault();
    console.log(categ);
    let updatedData;

    if (categ === "" && subcateg === "") {
      updatedData = {
        ...newData,
        categorie: "AccessoriesLuggage",
        subcategorie: "Man",
      };
    }
    if (categ != "" && subcateg === "") {
      updatedData = {
        ...newData,
        categorie: categ,
        subcategorie: "Man",
      };
    }
    if (categ === "" && subcateg != "") {
      updatedData = {
        ...newData,
        categorie: "AccessoriesLuggage",
        subcategorie: subcateg,
      };
    }
 if (categ != "" && subcateg != "") {
   updatedData = {
     ...newData,
     categorie: categ,
     subcategorie: subcateg,
   };
 }
    setnewData(updatedData);

    setIsEndF(true);

    console.log("New data added:", updatedData);
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    console.log(categ);
    let updatedData;

    if (categ === "" && subcateg === "") {
      updatedData = {
        ...newData,
        categorie: "car",
        subcategorie: "Man",
      };
    }
    if (categ != "" && subcateg === "") {
      updatedData = {
        ...newData,
        categorie: categ,
        subcategorie: "Man",
      };
    }
    if (categ === "" && subcateg != "") {
      updatedData = {
        ...newData,
        categorie: "car",
        subcategorie: subcateg,
      };
    }
 if (categ != "" && subcateg != "") {
   updatedData = {
     ...newData,
     categorie:categ,
     subcategorie: subcateg,
   };
 }
    setnewData(updatedData);

    setIsEndVE(true);

    console.log("New data added:", updatedData);
  };

  const handleAddHomeGarden = (e) => {
    e.preventDefault();
    console.log(categ);
    let updatedData;
    if (categ === "") updatedData = { ...newData, categorie: "decoration" };
    else updatedData = { ...newData, categorie: categ };

    setnewData(updatedData);

    setIsEndHG(true);

    console.log("New data added:", updatedData);
  };
  const handleAddvacation = (e) => {
    e.preventDefault();
    console.log(categ);
    let updatedData;
    if (categ === "") updatedData = { ...newData, categorie: "villaV" };
    else updatedData = { ...newData, categorie: categ };

    setnewData(updatedData);

    setIsEndV(true);

    console.log("New data added:", updatedData);
  };

  return (
    <div className="flex justify-center">
      <Dialog
        static
        open={open}
        onClose={handleClose}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center text-center">
            <DialogPanel className="relative bg-white w-full max-w-3xl p-6 min-h-[500px]">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon className="h-6 w-6" />
              </button>

              {/* Tabs */}
              <Tab.Group>
                <Tab.List className="flex space-x-8 bg-gray-200 rounded-lg p-1">
                  {[
                    "Add Real-Estate",
                    "Add Fashion",
                    "Add Vehicle",
                    "Add Home&Garden",
                    "Add Vacation",
                  ].map((tab) => (
                    <Tab
                      key={tab}
                      className={({ selected }) =>
                        classNames(
                          "w-full text-sm font-medium text-gray-700 rounded-lg py-2 px-4 text-center", // Ajout du padding pour égaliser les onglets
                          selected ? "bg-white shadow" : "hover:bg-gray-100"
                        )
                      }
                    >
                      {tab}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels className="mt-6 min-h-[200px]">
                  {/* Add Real Estate */}
                  <Tab.Panel>
                    <form onSubmit={handleAddRealEstate}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new Real estate
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add new announcement to your account
                          </p>
                          <div className="max-w-md">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select category"
                              />
                            </div>
                            <Select
                              id="Category"
                              required
                              onChange={(e) => handleCateg(e.target.value, e)}
                              name="categorie"
                            >
                              <option>apartment</option>
                              <option>villa</option>
                              <option>ground</option>
                              <option>office</option>
                              <option>commercial</option>
                            </Select>
                          </div>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*name */}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="name"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*year*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                year
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="year"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*price*/}

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Estimated value
                              </label>

                              <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm"></span>
                                </div>
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="price"
                                  name="price"
                                  type="number"
                                  placeholder="0.00"
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option>TND</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/*description*/}
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => handleChange(e)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the vehicle.
                              </p>
                            </div>
                            {/*image*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Image URL
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    autoComplete="image"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>
                  {/* fashion */}
                  <Tab.Panel>
                    <form onSubmit={handleAddFashion}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new fashion
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add new announcement to your account
                          </p>
                          <div className=" max-w-md">
                            <div className="mb-2">
                              <Label
                                htmlFor="countries"
                                value="Select category"
                              />
                            </div>
                            <Select
                              id="Category"
                              onChange={(e) => handleCateg(e.target.value, e)}
                              name="categorie"
                            >
                              <option name="AccessoriesLuggage">
                                AccessoriesLuggage
                              </option>
                              <option name="clothes">clothes</option>
                              <option name="shoes">shoes</option>
                              <option name="WatchJewelery">
                                WatchJewelery
                              </option>
                            </Select>
                            <div className="mb-2">
                              <Label
                                htmlFor="countries"
                                value="Select SubCategory"
                              />
                            </div>
                            <Select
                              id="SubCategory"
                              onChange={(e) =>
                                handleSubCateg(e.target.value, e)
                              }
                            >
                              <option name="Man">Man</option>
                              <option name="Woman">Woman</option>
                              <option name="Kids">kids</option>
                            </Select>
                          </div>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*name */}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="name"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*year*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                year
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="year"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*price*/}

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Estimated value
                              </label>

                              <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm"></span>
                                </div>
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="price"
                                  name="price"
                                  type="number"
                                  placeholder="0.00"
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option>TND</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/*description*/}
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => handleChange(e)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the vehicle.
                              </p>
                            </div>
                            {/*image*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Image URL
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    autoComplete="image"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>
                  {/* vehicle */}
                  <Tab.Panel>
                    <form onSubmit={handleAddVehicle}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new Vehicle
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add new announcement to your account
                          </p>
                          <div className="max-w-md">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select category"
                              />
                            </div>
                            <Select
                              id="Category"
                              required
                              onChange={(e) => handleCateg(e.target.value, e)}
                              name="categorie"
                            >
                              <option>car</option>
                              <option>bike</option>
                              <option>boating</option>
                              <option>motorcycle</option>
                              <option>truck</option>
                              <option>others</option>
                            </Select>
                          </div>
                          <div className="max-w-md">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select subcategory"
                              />
                            </div>
                            <Select
                              id="SubCategory"
                             
                              onChange={(e) =>
                                handleSubCateg(e.target.value, e)
                              }
                              name="subcategorie"
                            >
                              {SubCategList.map(
                                (product) =>
                                  product.name === selectedCategVehicle && (
                                    <option>{product.subcategorie}</option>
                                  )
                              )}
                            </Select>
                          </div>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*Name*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="name"
                                    type="text"
                                    placeholder="Mercedes-Benz"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*Brand*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Brand
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="brand"
                                    name="brand"
                                    type="text"
                                    placeholder="Mercedes-Benz"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*Model*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="model"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Model
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="model"
                                    name="model"
                                    type="text"
                                    placeholder="G-Class"
                                    autoComplete="model"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                            {/*Description*/}
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => handleChange(e)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the vehicle.
                              </p>
                            </div>
                            {/*image*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Image URL
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    autoComplete="image"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Engine Information
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Use a permanent address where you can receive mail.
                          </p>

                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*fuel*/}
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="fuel"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Fuel
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="fuel"
                                  name="fuel"
                                  type="text"
                                  autoComplete="given-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            {/*year*/}
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="year"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Year
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="year"
                                  name="year"
                                  type="number"
                                  autoComplete="family-name"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*price*/}
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Price
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            We'll always let you know about important changes,
                            but you pick what else you want to hear about.
                          </p>

                          {/* PRICE INPUT */}
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Estimated value
                          </label>

                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm"></span>
                            </div>
                            <input
                              onChange={(e) => handleChange(e)}
                              id="price"
                              name="price"
                              type="number"
                              placeholder="0.00"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            <div className="absolute inset-y-0 right-0 flex items-center">
                              <label htmlFor="currency" className="sr-only">
                                Currency
                              </label>
                              <select
                                id="currency"
                                name="currency"
                                className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                              >
                                <option>TND</option>
                                <option>USD</option>
                                <option>EUR</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>
                  {/* Home & garden */}
                  <Tab.Panel>
                    <form onSubmit={handleAddHomeGarden}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new Home or Garden
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add new announcement to your account
                          </p>
                          <div className="max-w-md">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select category"
                              />
                            </div>
                            <Select
                              id="Category"
                              required
                              onChange={(e) => handleCateg(e.target.value, e)}
                              name="categorie"
                            >
                              <option>decoration</option>
                              <option>DIY</option>
                              <option>furnishing</option>
                              <option>gardening</option>
                              <option>textile</option>
                              <option>household</option>
                              <option>tableware</option>
                            </Select>
                          </div>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*name */}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>

                            {/*price*/}

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Estimated value
                              </label>

                              <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm"></span>
                                </div>
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="price"
                                  name="price"
                                  type="number"
                                  placeholder="0.00"
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option>TND</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/*description*/}
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => handleChange(e)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the vehicle.
                              </p>
                            </div>
                            {/*image*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Image URL
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    autoComplete="image"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>

                  {/* vacation */}
                  <Tab.Panel>
                    <form onSubmit={handleAddvacation}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new Home or Garden
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            Add new announcement to your account
                          </p>
                          <div className="max-w-md">
                            <div className="mb-2 block">
                              <Label
                                htmlFor="countries"
                                value="Select category"
                              />
                            </div>
                            <Select
                              id="Category"
                              required
                              onChange={(e) => handleCateg(e.target.value, e)}
                              name="categorie"
                            >
                              <option>villaV</option>
                              <option>hotel</option>
                              <option>flashsale</option>
                              <option>apartmentV</option>
                            </Select>
                          </div>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/*name */}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="brand"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>

                            {/*price*/}

                            <div className="sm:col-span-4">
                              <label
                                htmlFor="price"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Estimated value
                              </label>

                              <div className="relative mt-2 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                  <span className="text-gray-500 sm:text-sm"></span>
                                </div>
                                <input
                                  onChange={(e) => handleChange(e)}
                                  id="price"
                                  name="price"
                                  type="number"
                                  placeholder="0.00"
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                  <label htmlFor="currency" className="sr-only">
                                    Currency
                                  </label>
                                  <select
                                    id="currency"
                                    name="currency"
                                    className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                  >
                                    <option>TND</option>
                                    <option>USD</option>
                                    <option>EUR</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            {/*description*/}
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={(e) => handleChange(e)}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  defaultValue={""}
                                />
                              </div>
                              <p className="mt-3 text-sm leading-6 text-gray-600">
                                Write a few sentences about the vehicle.
                              </p>
                            </div>
                            {/*image*/}
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="image"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Image URL
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={(e) => handleChange(e)}
                                    id="image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/image.jpg"
                                    autoComplete="image"
                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          onClick={handleClose}
                          className="text-sm font-semibold leading-6 text-gray-900"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AddNew;
