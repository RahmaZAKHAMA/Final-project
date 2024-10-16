import React, { useState } from "react";
import logo1 from '../images/logo1.png';
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { logout } from "../JS/Actions/AuthActions";
const NavBarTop = () => {
    const isAuth = useSelector((state) => state.AuthReducer.isAuth);
     const user = useSelector((state) => state.AuthReducer.user);
     const dispatch=useDispatch();
       const [searchTerm, setSearchTerm] = useState(""); // État pour stocker la saisie de l'utilisateur
       const navigate = useNavigate();

       const handleSearch = (e) => {
         e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
         if (searchTerm) {
           // Redirection vers la page de résultats avec le terme de recherche
           navigate(`/ProductListSearched/${searchTerm}`);
           console.log("Searchffffffffff", searchTerm);
         }
       };
    console.log("isAuth: " , isAuth);
  return (
    <div className="w-screen">
      <div className="lg:flex md:justify-around md:gap-12 font-nunito lg:mx-64 mx-6 mt-4 md:mx-12">
        <div className="flex justify-start items-start lg:-ml-48">
          <div className="-mt-10 w-32">
            <img src="data:image/jpeg;base64,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BopPTQBoVytYrGkMTLltktN7zrMskEdgsqIukYiIgIiICIiAiIgIiICIiAsUsIKyog4OIYWHclEcW2dDr6KynNBWrPRgoKMxLZYgktBBWlFJWwaNfIB04j4HRXXV4ODyXFq9ngeSjtipbnC3i23NjjSLcPCeMfyrhm0lRweynf8AeYB/tXh+JRP71HRE9crf96mlRssDyWk/ZJv1fRRTs0dLStR2pP6sdZ+cIg+SLlTUrPIRj8XLzvh1jHg0F3o0WUwbsk36votyDZUD6K4/B1n3plJHbOSsexSIQZoe7g17vvdlvwC36XA5ZLZu79UCw+Cn9Js6ByXapMGA5KamClOUKebb8+Xha3DwjgiGEbNhttFMMOwkN5LqwUIHJbjGAKZSYoKcBZ0RAREQEREBERAREQEREBERAREQEREBERB8IWN0IKyog1XUbSvBoG9Fuog0RQN6LI2jatpEGJsACyBoX1EBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k="></img>
          </div>
          <div className="md:mt-2 md:w-72 ">
            <img src={logo1}></img>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div>
            {isAuth === true ? (
              <Link to={"/AddNew"}>
                <button className="transition duration-200 ease-in-out border border-gray-300 rounded-lg md:w-64 px-2 h-12 bg-purple-400 hover:bg-purple-900 text-white md:mb-6">
                  Add New Announcement
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="transition duration-200 ease-in-out border border-gray-300 rounded-lg md:w-64 px-2 h-12 bg-gray-400 text-gray-700 md:mb-6 cursor-not-allowed"
              >
                Add New Announcement
              </button>
            )}
          </div>
          <div>
            <form
              onSubmit={handleSearch}
              className="flex items-center w-64 h-12"
            >
              <input
                type="search"
                id="default-search"
                className="block w-full h-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-300 focus:border-purple-300"
                placeholder="Search Cars, clothes, homes..."
                required
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              
                <button
                  type="submit"
                  className="transition duration-200 ease-in-out flex items-center justify-center text-white bg-purple-300 hover:bg-purple-900 rounded-lg h-full p-2 ml-2"
         
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
            
            </form>
          </div>
          <div className="md:flex text-xs font-bold text-gray-500 hidden">
            {!isAuth ? (
              <>
                <Link to={"/connect"}>
                  <div className="w-16 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 ml-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>

                    <span>Connect</span>
                  </div>
                </Link>
              </>
            ) : (
              <div>
                <div>
                  <FiLogOut
                    className="text-2xl"
                    onClick={() => dispatch(logout())}
                  />
                </div>
                <div className="text-purple-700 text-md pr-4 font-bold">
                  {user.name}
                </div>
              </div>
            )}

            <Link to={"/message"}>
              <div className="w-16 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>

                <span>Message</span>
              </div>
            </Link>

            <div className="w-16 h-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

              <span>Favorites</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-xs font-bold text-gray-500 md:hidden mt-3 mx-6 ml-32">
        {!isAuth ? (
          <>
            <Link to={"/connect"}>
              <div className="w-16 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span>Connect</span>
              </div>
            </Link>
          </>
        ) : (
          <div>
            <div>
              <FiLogOut
                className="text-2xl"
                onClick={() => dispatch(logout())}
              />
            </div>
            <div className="text-purple-700 text-md pr-4 font-bold">
              {user.name}
            </div>
          </div>
        )}
        <Link to={"/message"}>
          <div className="w-24 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>
            <span>Message</span>
          </div>
        </Link>
        <div className="w-24 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span>Favorites</span>
        </div>
      </div>
    </div>
  );
};

export default NavBarTop;
