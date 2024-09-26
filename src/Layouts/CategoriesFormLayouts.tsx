
import { MdElectricBolt } from "react-icons/md";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";




type Props = {};

const CategoriesFormLayouts = (props: Props) => {
 

  return (
    <div className="flex h-screen bg-slate-300  ">
      <div className=""> home </div> <hr />

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

         <div className="flex flex-col gap-5 w-1/3 h-20 bg-slate-200 border-2 rounded text-center shadow-md " >
            <h2 className="text-start pl-2">Saving Plan</h2>
            <h1 className="text-2xl text-start pl-2">2 saving plans</h1>
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
    


  );
};

export default CategoriesFormLayouts;

