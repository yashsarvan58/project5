
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import calcu from "../images/calcu.jpg"


const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
        toast("Logout sucessfully")
    };

    return (
        
        <div className={"w-64 h-screen bg-cyan-800 text-gray-400 shadow-lg text-[20px] flex flex-col pl-5 pr-5 gap-1"}  style={{ backgroundImage: `url(${calcu})` }}>
            <Link to="/Layout">
                <div className="p-4 h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2 font-semibold items-center text-center flex justify-center"  >
                    Home
                </div><hr />
            </Link>

            <div className="p-4 h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2  font-semibold items-center text-center flex justify-center">
                <Link to="/add">
                    Add Categories
                </Link>
            </div>

            <Link to="/transaction">
                <div className="p-4 h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2  font-semibold items-center text-center flex justify-center">
                    Transactions
                </div>
            </Link>

            <Link to="/transaction-history">
                <div className="p-4 h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2  font-semibold items-center text-center flex justify-center">
                    History
                </div>
            </Link>

            <div className="p-4 h-10 mt-4 cursor-pointer hover:bg-transparent hover:border-2  font-semibold items-center text-center flex justify-center">
                <button onClick={handleLogout} className="w-full  text-center">
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;

