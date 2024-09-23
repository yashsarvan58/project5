import React from 'react'

type Props = {}

const AddTransactionWrapper = (props: Props) => {
    const [transactions, setTransactions] = useState([]);
  const [transactionAdd] = useTransactionAddMutation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/transactions');
  };

  const validationSchema = Yup.object({
    amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
    type: Yup.string().required('Type is required'),
    remark: Yup.string().required('Remark is required'),
    date: Yup.date().required('Date is required').nullable(),
  });

  const handleSubmit = (values, { resetForm }) => {
    transactionAdd(values).then((res) => {
      console.log(res.data?.data.data);
    });
    setTransactions([...transactions, values]);
    resetForm();
  };

  return (
    <AddTransaction/>
  )
}