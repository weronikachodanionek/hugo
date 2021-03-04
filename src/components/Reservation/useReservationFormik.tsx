//held temporary. So far not used anywhere

import { useCallback } from "react";
interface ReservationFormFields {
  user: string;
  room: string;
  desk: string;
}

function useReservationForm() {
  const handleSubmit = useCallback(() => {
    console.log("Wysłano rezerwację");
  }, []);
  const initialValues: ReservationFormFields = {
    user: "",
    room: "",
    desk: "",
  };
  return {
    handleSubmit,
    initialValues,
  };
}

export default useReservationForm;
