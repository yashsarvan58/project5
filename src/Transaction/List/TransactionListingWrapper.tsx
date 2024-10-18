
import Swal from "sweetalert2";
import TransactionListing from "./TransactionListing";
import { useDeleteTransactionMutation, useGetTransactionQuery } from "../../Slice/TransactionSlice";

const TransactionListingWrapper = () => {
  const token = localStorage.getItem("token");
  const { data } = useGetTransactionQuery({token});
  const [deleteTxn] = useDeleteTransactionMutation();
    
  const HandleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      try {
        await deleteTxn({id, token})
        Swal.fire("Deleted!", "Your transaction has been deleted.", "success");
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the transaction.", "error");
      }
    }
  };

  return (
    <TransactionListing data={data} HandleDelete={HandleDelete} />
  );
};

export default TransactionListingWrapper;
