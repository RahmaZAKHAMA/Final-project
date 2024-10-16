import './App.css';
import Banner from './components/Banner';
import NavBarList from './components/NavBarList';
import NavBarTop from './components/NavBarTop';
import Home from './pages/Home';
import RealEstate from './pages/RealEstate';
import { Routes, Route } from "react-router-dom";
import Vehicles from './pages/Vehicles';
import Fashion from './pages/Fashion';
import HomeGarden from './pages/HomeGarden';
import Vacation from './pages/Vacation';
import ErrorPage from './pages/ErrorPage';
import Connect from './pages/Connect';
import Message from "./pages/Message";
import Subscribe from './pages/Subscribe';
import RealEstateVilla from './pages/RealEstateVilla';
import RealEstateGround from './pages/RealEstateGround';
import RealEstateOffice from './pages/RealEstateOffice';
import RealEstateApartment from './pages/RealEstateApartment';
import RealEstateCommercial from './pages/RealEstateCommercial';
import FashionShoes from './pages/FashionShoes';
import FashionClothes from './pages/FashionClothes';
import FashionWatchJewelery from './pages/FashionWatchJewelery';
import FashionAccessoriesLuggage from './pages/FashionAccessoriesLuggage';
import FashionClothesMan from './pages/FashionClothesMan';
import FashionClothesWomen from './pages/FashionClothesWomen';
import FashionClothesKids from './pages/FashionClothesKids';
import FashionWatchJeweleryMan from './pages/FashionWatchJeweleryMan';
import FashionWatchJeweleryWomen from './pages/FashionWatchJeweleryWomen';
import FashionWatchJeweleryKids from './pages/FashionWatchJeweleryKids';
import FashionAccessoriesLuggageMan from './pages/FashionAccessoriesLuggageMan';
import FashionAccessoriesLuggageWomen from './pages/FashionAccessoriesLuggageWomen';
import FashionAccessoriesLuggageKids from './pages/FashionAccessoriesLuggageKids';
import FashionShoesMan from './pages/FashionShoesMan';
import FashionShoesWomen from './pages/FashionShoesWomen';
import FashionShoesKids from './pages/FashionShoesKids';
import VacationFlashSale from './pages/VacationFlashSale';
import VacationApartment from './pages/VacationApartment';
import VacationVilla from './pages/VacationVilla';
import VacationHotel from './pages/VacationHotel';
import HomeGardenGardening from './pages/HomeGardenGardening';
import HomeGardenDIY from './pages/HomeGardenDIY';
import HomeGardenHomeTextiles from './pages/HomeGardenHomeTextiles';
import HomeGardenDecoration from './pages/HomeGardenDecoration';
import HomeGardenTableware from './pages/HomeGardenTableware';
import HomeGardenHousehold from './pages/HomeGardenHousehold';
import HomeGardenFurnishing from './pages/HomeGardenFurnishing';
import VehiclesCars from './pages/VehiclesCars';
import VehiclesMotorcycles from './pages/VehiclesMotorcycles';
import VehiclesTrucks from './pages/VehiclesTrucks';
import VehiclesBoating from './pages/VehiclesBoating';
import VehiclesBikes from './pages/VehiclesBikes';
import VehiclesOthers from './pages/VehiclesOthers';
import VehiclesCarsMercedes from './pages/VehiclesCarsMercedes';
import VehiclesCarsBMW from './pages/VehiclesCarsBMW';
import VehiclesCarsPeugeot from './pages/VehiclesCarsPeugeot';
import VehiclesCarsRenault from './pages/VehiclesCarsRenault';
import VehiclesCarsAudi from './pages/VehiclesCarsAudi';
import VehiclesCarsOthers from './pages/VehiclesCarsOthers';
import VehiclesMotorcyclesBMW from './pages/VehiclesMotorcyclesBMW';
import VehiclesMotorcyclesHonda from './pages/VehiclesMotorcyclesHonda';
import VehiclesMotorcyclesKawasaki from './pages/VehiclesMotorcyclesKawasaki';
import VehiclesMotorcyclesYamaha from './pages/VehiclesMotorcyclesYamaha';
import VehiclesMotorcyclesOthers from './pages/VehiclesMotorcyclesOthers';
import AddNew from './components/AddNew';
import Productpage from './pages/Productpage';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/AuthActions';
import { useEffect } from 'react';
import ProductListSearched from './pages/ProductsListSearched';
import ErrorNotification from './components/ErrorNotification';
import SuccessNotification from './components/SuccessNotification';
  import "react-toastify/dist/ReactToastify.css";
function App() {
   const dispatch = useDispatch();

   const isAuth = useSelector((state) => state.AuthReducer.isAuth);

   const user = useSelector((state) => state.AuthReducer.user);

   const authErrors = useSelector((state) => state.AuthReducer.errors);

   const authSuccess = useSelector((state) => state.AuthReducer.success);

   useEffect(() => {
     if (localStorage.getItem("token")) {
       dispatch(current());
     }
   }, [dispatch]);

  return (
    <div className="App">
      {authErrors && authErrors.map((el) => <ErrorNotification error={el} />)}
      {authSuccess && Array.isArray(authSuccess) && authSuccess.length > 0
        ? authSuccess.map((el) => <SuccessNotification success={el} />)
        : null}

      <NavBarTop />
      <NavBarList />
      <Banner />
      <Routes>
        <Route path="/Dashboard/:id" element={<Dashboard />} />
        <Route path="/Productpage/:categorie/:id" element={<Productpage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Connect" element={<Connect />} />
        <Route path="/AddNew" element={<AddNew />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        ////////Real Estate routes
        <Route path="/Real-Estate" element={<RealEstate />} />
        <Route path="/Real-Estate-villa" element={<RealEstateVilla />} />
        <Route path="/Real-Estate-Ground" element={<RealEstateGround />} />
        <Route path="/Real-Estate-Office" element={<RealEstateOffice />} />
        <Route
          path="/Real-Estate-Apartment"
          element={<RealEstateApartment />}
        />
        <Route
          path="/Real-Estate-Commercial"
          element={<RealEstateCommercial />}
        />
        ////////Vehicles routes
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Vehicles-Cars" element={<VehiclesCars />} />
        <Route
          path="/Vehicles-Cars-Mercedes"
          element={<VehiclesCarsMercedes />}
        />
        <Route path="/Vehicles-Cars-BMW" element={<VehiclesCarsBMW />} />
        <Route
          path="/Vehicles-Cars-Peugeot"
          element={<VehiclesCarsPeugeot />}
        />
        <Route
          path="/Vehicles-Cars-Renault"
          element={<VehiclesCarsRenault />}
        />
        <Route path="/Vehicles-Cars-Audi" element={<VehiclesCarsAudi />} />
        <Route path="/Vehicles-Cars-Others" element={<VehiclesCarsOthers />} />
        <Route path="/Vehicles-Motorcycles" element={<VehiclesMotorcycles />} />
        <Route
          path="/Vehicles-Motorcycles-BMW"
          element={<VehiclesMotorcyclesBMW />}
        />
        <Route
          path="/Vehicles-Motorcycles-Honda"
          element={<VehiclesMotorcyclesHonda />}
        />
        <Route
          path="/Vehicles-Motorcycles-Kawasaki"
          element={<VehiclesMotorcyclesKawasaki />}
        />
        <Route
          path="/Vehicles-Motorcycles-Yamaha"
          element={<VehiclesMotorcyclesYamaha />}
        />
        <Route
          path="/Vehicles-Motorcycles-Others"
          element={<VehiclesMotorcyclesOthers />}
        />
        <Route path="/Vehicles-Trucks" element={<VehiclesTrucks />} />
        <Route path="/Vehicles-Boating" element={<VehiclesBoating />} />
        <Route path="/Vehicles-Bikes" element={<VehiclesBikes />} />
        <Route path="/Vehicles-Others" element={<VehiclesOthers />} />
        ////////Fashion routes
        <Route path="/Fashion" element={<Fashion />} />
        <Route path="/Fashion-Clothes" element={<FashionClothes />} />
        <Route path="/Fashion-Clothes-Man" element={<FashionClothesMan />} />
        <Route
          path="/Fashion-Clothes-Women"
          element={<FashionClothesWomen />}
        />
        <Route path="/Fashion-Clothes-Kids" element={<FashionClothesKids />} />
        <Route path="/Fashion-Shoes" element={<FashionShoes />} />
        <Route path="/Fashion-Shoes-Man" element={<FashionShoesMan />} />
        <Route path="/Fashion-Shoes-Women" element={<FashionShoesWomen />} />
        <Route path="/Fashion-Shoes-Kids" element={<FashionShoesKids />} />
        <Route
          path="/Fashion-WatchJewelery"
          element={<FashionWatchJewelery />}
        />
        <Route
          path="/Fashion-WatchJewelery-Man"
          element={<FashionWatchJeweleryMan />}
        />
        <Route
          path="/Fashion-WatchJewelery-Women"
          element={<FashionWatchJeweleryWomen />}
        />
        <Route
          path="/Fashion-WatchJewelery-Kids"
          element={<FashionWatchJeweleryKids />}
        />
        <Route
          path="/Fashion-AccessoriesLuggage"
          element={<FashionAccessoriesLuggage />}
        />
        <Route
          path="/Fashion-AccessoriesLuggage-Man"
          element={<FashionAccessoriesLuggageMan />}
        />
        <Route
          path="/Fashion-AccessoriesLuggage-Women"
          element={<FashionAccessoriesLuggageWomen />}
        />
        <Route
          path="/Fashion-AccessoriesLuggage-Kids"
          element={<FashionAccessoriesLuggageKids />}
        />
        ////////Home&Garden routes
        <Route path="/Home&Garden" element={<HomeGarden />} />
        <Route path="/HomeGarden-Household" element={<HomeGardenHousehold />} />
        <Route
          path="/HomeGarden-Furnishing"
          element={<HomeGardenFurnishing />}
        />
        <Route path="/HomeGarden-Tableware" element={<HomeGardenTableware />} />
        <Route
          path="/HomeGarden-Decoration"
          element={<HomeGardenDecoration />}
        />
        <Route
          path="/HomeGarden-HomeTextiles"
          element={<HomeGardenHomeTextiles />}
        />
        <Route path="/HomeGarden-DIY" element={<HomeGardenDIY />} />
        <Route path="/HomeGarden-Gardening" element={<HomeGardenGardening />} />
        ////////Vacation routes
        <Route path="/Vacation" element={<Vacation />} />
        <Route path="/Vacation-FlashSale" element={<VacationFlashSale />} />
        <Route path="/Vacation-Apartment" element={<VacationApartment />} />
        <Route path="/Vacation-Villa" element={<VacationVilla />} />
        <Route path="/Vacation-Hotel" element={<VacationHotel />} />
        // Error Page route
        <Route path="/*" element={<ErrorPage />} />
        <Route
          path="/ProductListSearched/:searchTerm"
          element={<ProductListSearched />}
        />
      </Routes>
    </div>
  );
}

export default App;
