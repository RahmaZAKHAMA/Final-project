import { Link } from "react-router-dom"



export default function FooterNav() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-200 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-5 lg:pt-2">
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">
              <b>Real-Estate</b>
            </dt>
            <dd className="mt-2 leading-7 text-gray-400">
              <div>
                <Link to={"/Real-Estate"}>
                  <b>All Real-Estate</b>
                </Link>
              </div>
              <div>
                <Link to={"/Real-Estate-villa"}>
                  <b>Villa</b>
                </Link>
              </div>
              <div>
                <Link to={"/Real-Estate-Apartment"}>
                  <b>Apartment</b>
                </Link>
              </div>
              <div>
                <Link to={"/Real-Estate-Ground"}>
                  <b>Ground</b>
                </Link>
              </div>
              <div>
                <Link to={"/Real-Estate-Office"}>
                  <b>Office</b>
                </Link>
              </div>
              <div>
                <Link to={"/Real-Estate-Commercial"}>
                  <b>Commercial</b>
                </Link>
              </div>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">
              <b>Fashion</b>
            </dt>
            <dd className="mt-2 leading-7 text-gray-400">
              <div>
                <Link to={"/Fashion"}>
                  <b>All-Fashion</b>
                </Link>
              </div>
              <div>
                <Link to={"/Fashion-Clothes"}>
                  <b>Clothes</b>
                </Link>
              </div>
              <div>
                <Link to={"/Fashion-Clothes-Women"}>Women</Link>
              </div>
              <div>
                <Link to={"/Fashion-Clothes-Man"}>Man</Link>
              </div>
              <div>
                <Link to={"/Fashion-Clothes-Kids"}>Kids</Link>
              </div>
              <div>
                <Link to={"/Fashion-Shoes"}>
                  <b>Shoes</b>
                </Link>
              </div>
              <div>
                <Link to={"/Fashion-Shoes-Women"}>Women</Link>
              </div>
              <div>
                <Link to={"/Fashion-Shoes-Man"}>Man</Link>
              </div>
              <div>
                <Link to={"/Fashion-Shoes-Kids"}>Kids</Link>
              </div>
              <div>
                <Link to={"/Fashion-WatchJewelery"}>
                  <b>Watch&Jewelery</b>
                </Link>
              </div>
              <div>
                <Link to={"/Fashion-WatchJewelery-Women"}>Women</Link>
              </div>
              <div>
                <Link to={"/Fashion-WatchJewelery-Man"}>Man</Link>
              </div>
              <div>
                <Link to={"/Fashion-WatchJewelery-Kids"}>Kids</Link>
              </div>
              <div>
                <Link to={"/Fashion-AccessoriesLuggage"}>
                  <b>Accessories&Luggage</b>
                </Link>
              </div>
              <div>
                <Link to={"/Fashion-AccessoriesLuggage-Women"}>Women</Link>
              </div>
              <div>
                <Link to={"/Fashion-AccessoriesLuggage-Man"}>Man</Link>
              </div>
              <div>
                <Link to={"/Fashion-AccessoriesLuggage-Kids"}>Kids</Link>
              </div>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">
              <b>Vehicles</b>
            </dt>
            <dd className="mt-2 leading-7 text-gray-400">
              <div>
                <Link to={"/Vehicles"}>
                  <b>All Vehicles</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars"}>
                  <b>Cars</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-Mercedes"}>Mercedes</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-BMW"}>BMW</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-Peugeot"}>Peugeot</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-Renault"}>Renault</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-Audi"}>Audi</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Cars-Others"}>Others</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles"}>
                  <b>Motocycles</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles-BMW"}>BMW</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles-Honda"}>Honda</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles-Kawasaki"}>Kawasaki</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles-Yamaha"}>Yamaha</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Motorcycles-Others"}>Others</Link>
              </div>
              <div>
                <Link to={"/Vehicles-Trucks"}>
                  <b>Trucks</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Boating"}>
                  <b>Boating</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Bikes"}>
                  <b>Bikes</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vehicles-Others"}>
                  <b>Others</b>
                </Link>
              </div>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">
              <b>Home&Garden</b>
            </dt>
            <dd className="mt-2 leading-7 text-gray-400">
              <div>
                <Link to={"/Home&Garden"}>
                  <b>ALL Home&Garden</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-Furnishing"}>
                  <b>Furnishing</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-Household"}>
                  <b>Household Appliances</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-Tableware"}>
                  <b>Tableware</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-Decoration"}>
                  <b>Decoration</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-HomeTextiles"}>
                  <b>Home Textiles</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-DIY"}>
                  <b>DIY</b>
                </Link>
              </div>
              <div>
                <Link to={"/HomeGarden-Gardening"}>
                  <b>Gardening</b>
                </Link>
              </div>
            </dd>
          </div>
          <div className="flex flex-col items-start">
            <dt className="mt-4 font-semibold text-white">Vacation</dt>
            <dd className="mt-2 leading-7 text-gray-400">
              <div>
                <Link to={"/Vacation"}>
                  <b>ALL Vacation</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vacation-Hotel"}>
                  <b>Hotels</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vacation-Apartment"}>
                  <b>Apartement</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vacation-Villa"}>
                  <b>Villas</b>
                </Link>
              </div>
              <div>
                <Link to={"/Vacation-FlashSale"}>
                  <b>Flash Sale Vacation</b>
                </Link>
              </div>
            </dd>
          </div>
        </dl>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
