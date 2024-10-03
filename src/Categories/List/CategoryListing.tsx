
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate} from "react-router-dom";


const CategoryListing = ({ data , onDelete }: any) => {
const navigate=useNavigate()
  return (
    <div className="flex justify-center items-center h-screen text-gray-400 bg-slate-500">
     
        <div className="w-full max-w-4xl p-6 bg-slate-600  border border-gray-200 rounded-lg shadow-md">
          <div className="flex justify-between items-center   mb-6">
            <h2 className="text-xl font-semibold">Category</h2>
            
              <button onClick={()=>{ 
               navigate("/dashboard/add-category")
              }} className="bg-green-500 text-white px-4 py-2 rounded">
                Add Category
              </button>
          </div>

        
          <table className="min-w-full  border bg-slate-500 ">
            <thead className=" border">
              <tr className="text-slate-600   text-center">
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody className="text-slate-900 text-center bg-slate-400">
              {data?.data.length > 0 ? (
                data?.data.map((category: any) => (
                  <tr key={category._id}>
                    <td className="py-2 px-4 border-b">{category.categoryname}</td>
                    <td className="py-2 px-4 border-b">
                      <Link to={`edit-category/${category._id}`}>
                        <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded"
                        onClick={() => onDelete(category._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      
    </div>
  );
};

export default CategoryListing;
