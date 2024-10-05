

import React from 'react';
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

type Props = {}

const DashboardLayout = (props: Props) => {
  return (
    <div className="flex h-screen bg-slate-500">
      <main className="flex flex-col mt-[70px] items-center w-full p-4">
        
        {/* Balance and Income/Expense Section */}
        <div className="flex flex-col md:flex-row gap-5 w-full max-w-3xl mb-5">
          <div className="bg-white p-4 md:p-5 rounded-lg shadow-md flex-1">
            <p className="text-gray-600 text-sm md:text-base">Balance Overview</p>
            <h1 className="text-2xl md:text-3xl">₹ 21,847.00</h1>
          </div>
          <div className="bg-white p-4 md:p-5 rounded-lg shadow-md flex-1">
            <p className="text-gray-600 text-sm md:text-base">Expense & Income</p>
            <div className="flex justify-between text-sm md:text-base">
              <div className="text-green-600">+ ₹ 15,000 <br /> Total Income This Month</div>
              <div className="text-red-600">- ₹ 12,000 <br /> Total Expense This Month</div>
            </div>
          </div>
        </div>

        {/* Saving Plan Section */}
        <div className="bg-slate-200 border-2 rounded-lg shadow-md w-full max-w-3xl p-4 md:p-5">
          <h2 className="text-start text-sm md:text-lg">Saving Plan</h2>
          <h1 className="text-xl md:text-2xl text-start">2 Saving Plans</h1>
          <div className="flex flex-col sm:flex-row justify-around bg-white rounded-lg p-3 md:p-5 mt-3 shadow-md">
            <div className="flex items-center mb-4 sm:mb-0">
              <p className="mr-2 text-sm md:text-base">Petrol</p> 
              <span className="text-sm md:text-base">₹ 1,000</span>
            </div>
            <div className="flex items-center mb-4 sm:mb-0">
              <MdElectricBolt className="mr-2 text-xl md:text-2xl" />
              <p className="text-sm md:text-base">Electricity Bill</p>
            </div>
            <div className="flex items-center">
              <TbDeviceMobileMessage className="mr-2 text-xl md:text-2xl" />
              <p className="text-sm md:text-base">Mobile Recharge</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
