import { useContext, useState } from "react";
import { FaCoins } from "react-icons/fa";

import { AuthContext } from "../../provider/AuthProvider";
import useGetUser from "../../hook/useGetUser";

import NotifyPopUp from "./notificationpopUp/NotifyPopUp";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import logo from '../../assets/image/Green and Pink Gradient Security Initial B Technology Logo (1).png'

const DashbordMenu = () => {
    const [userData, refetch, isLoading] = useGetUser();
    const { user } = useContext(AuthContext);





    return (
        <div className="flex relative">



<div className="z-50 mt-8 -ml-12">
                        <div className="hidden  w-full px-16 0 md:flex  rounded-lg justify-center items-center mx-auto mb-4">
            <Link to="/" className="btn btn-ghost text-white text-xl ">
            <img src={logo} alt="" className="w-24 fixed -mt-2"/>
            </Link>
          </div>
                        </div>

            <div className="text-right  md:fixed w-full right-0 border-r-2 z-20 bg-[#2d3748] border-yellow-400 flex items-center gap-12 justify-between md:justify-end text-white border-b-2 border-t-0 ml-32 p-4">




                
                <div className="sm:flex gap-8 mr-12 justify-end items-center">

         
                    <div className="flex gap-8 justify-end items-center">

                   
                        <div className="relative">
                            
                            <div className="badge bg-yellow-400 text-gray-800 font-bold py-1 px-3 rounded-full ml-2">{userData?.coin}</div>
                            <p className="ml-2">
                                <FaCoins className="text-gold text-xl" />
                            </p>
                            <p className="text-lg font-semibold">{userData?.role}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <img
                            alt="User Profile"
                            src={user?.photoURL}
                            className="rounded-full w-12 h-12 border-2 border-yellow-400"
                        />
                        <p className="text-gray-400 text-center">{user?.displayName || "Anonymous"}</p>
                    </div>
                </div>
                <div>
                    <NotifyPopUp></NotifyPopUp>
                </div>
            </div>

          
        </div>
    );
};

export default DashbordMenu;
