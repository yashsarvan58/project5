import Swal from "sweetalert2";
// import { useGetTransactionQuery } from "../../Slice/TransactionSlice";
import TransactionListing from "./TransactionListing";
import { useGetTransactionQuery } from "../../Slice/TransactionSlice";

const TransactionListingWrapper = () => {

   const token = localStorage.getItem("Token")
   const {data} = useGetTransactionQuery({token})

  const handleDelete = (transactionId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this Transaction?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          ({ id: transactionId , token });
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };
 
  return (
    <TransactionListing data={data} onDelete={handleDelete}/>
  )
}
export default TransactionListingWrapper