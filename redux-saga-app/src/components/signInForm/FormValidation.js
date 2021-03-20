import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { addUser, putMessage} from "../../redux/actions/actions";

const useForm = (validate) => {

  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const message = useSelector((state) => state.store.message);
  const dispatch = useDispatch();

    
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      dispatch(addUser(values));
      setValues({})
    }
  }, [errors]);

  

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    if (message !== '') {
      dispatch(putMessage(''));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export default useForm;