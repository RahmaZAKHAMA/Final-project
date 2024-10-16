import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, Tab } from "@headlessui/react";
import { PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
 const handleChange = (e) => {
  // setNewCar({ ...newCar, [e.target.name]: e.target.value });
 };
const AddNew = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [newData, setNewData] = useState({});

  const handleClose = () => {
    setOpen(false);
    navigate("/"); // Redirection après la fermeture du modal
  };

  const handleInputChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("New data added:", newData); // Vous pouvez ici ajouter votre logique pour ajouter les données
    setOpen(false);
    navigate("/"); // Redirection après ajout
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
                          "w-full text-sm font-medium text-gray-700 rounded-lg",
                          selected ? "bg-white shadow" : "hover:bg-gray-100"
                        )
                      }
                    >
                      {tab}
                    </Tab>
                  ))}
                </Tab.List>

                <Tab.Panels>
                  {/* Add Cars Tab */}
                  <Tab.Panel>
                    <form onSubmit={handleAdd}>
                      <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Add new Car
                          </h2>
                          <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be
                            careful what you share.
                          </p>

                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                              <label
                                htmlFor="brand"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Brand name
                              </label>
                              <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                  <input
                                    onChange={handleInputChange}
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
                                    onChange={handleInputChange}
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
                            <div className="col-span-full">
                              <label
                                htmlFor="description"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Description
                              </label>
                              <div className="mt-2">
                                <textarea
                                  onChange={handleInputChange}
                                  id="description"
                                  name="description"
                                  rows={3}
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
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
                                    onChange={handleInputChange}
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

                        {/* Engine Information */}
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Engine Information
                          </h2>
                          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="fuel"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Fuel
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={handleInputChange}
                                  id="fuel"
                                  name="fuel"
                                  type="text"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-3">
                              <label
                                htmlFor="year"
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                Year
                              </label>
                              <div className="mt-2">
                                <input
                                  onChange={handleInputChange}
                                  id="year"
                                  name="year"
                                  type="number"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Price Information */}
                        <div className="border-b border-gray-900/10 pb-12">
                          <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Price
                          </h2>
                          <label
                            htmlFor="price"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Estimated value
                          </label>
                          <div className="relative mt-2 rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-gray-500 sm:text-sm">
                                $
                              </span>
                            </div>
                            <input
                              onChange={handleInputChange}
                              type="number"
                              name="price"
                              id="price"
                              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                              placeholder="0.00"
                            />
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
