
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";



type Props = {};

const CategoriesFormLayouts = (props: Props) => {
 

  return (
    <div className="flex h-screen  ">
  
      <aside className="bg-gray-500 text-slate-800 w-1/7 p-5">
        <h2 className="text-xl mb-5"><IoMdHome fontSize={28} /></h2>
        <hr  className="border-stone-400"/>
        <nav className="flex flex-col gap-3">
          <button className="hover:bg-slate-300 p-2 rounded">Dashboard</button>
          <button className="hover:bg-slate-300 p-2 rounded">categories </button>
          <button className="hover:bg-slate-300 p-2 rounded">Transaction</button>
          <button className="hover:bg-slate-300 p-2 rounded">History</button>
          <button className="hover:bg-slate-300 p-2 rounded">Settings</button>
        </nav>
      </aside>

      <div className="flex flex-col flex-grow bg-gray-100">
        <header className="flex items-center justify-between p-5 bg-opacity-30 backdrop-blur-md">
          <div className="flex items-center gap-3">
            
            <h1 className="text-xl">HOME EXPENSES MANAGER</h1>
          </div>
          <div className="flex gap-5">
           
            <button>
              <CgProfile className="text-xl" />
            </button>
          </div>
        </header><hr  className="border"/>

        <main className="flex justify-around flex-grow p-10">
          <div className="flex flex-col gap-5 w-1/3">
            <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-sm">
              <p className="text-gray-600">Balance overview</p>
              <h1 className="text-3xl">₹ 21,847.00</h1>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md backdrop-filter backdrop-blur-2xl">
              <p className="text-gray-600">Expense & Incomes</p>
              <div className="flex justify-between">
                <div className="text-green-600">+ ₹ 15,000 <br /> Total income this month</div>
                <div className="text-red-600">- ₹ 12,000 <br /> Total expense this month</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-1/3 h-20 bg-slate-300" >
            <h2 className="text-xl">Saving Plan</h2>
            <h1 className="text-2xl">2 saving plans</h1>
            <div className="flex justify-around bg-white rounded-lg p-5 shadow-md">
              <div className="flex items-center">
             
                <p>Petrol</p> 1,000
              </div>
              <div className="flex items-center">
                <MdElectricBolt />
                <p>Electricity bill</p>
              </div>
              <div className="flex items-center">
                <TbDeviceMobileMessage />
                Mobile Recharge
              </div>
            </div>
          </div>
        </main>

  
      </div>
    </div>
  );
};

export default CategoriesFormLayouts;

