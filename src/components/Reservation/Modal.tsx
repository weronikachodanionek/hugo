import ReactModal from "react-modal";
import { useModal } from "react-modal-hook";
import { Reservation } from "..";
import { Button } from "../common";

import "./Reservation.scss";

interface IModalReservation {
  handleModalReservation?: () => void;
}

const ModalReservation: React.FC<IModalReservation> = ({
  handleModalReservation,
}) => {
  const [showModal, hideModal] = useModal(() => {
    return (
      <ReactModal isOpen>
        <Reservation closeModal={hideModal} />
      </ReactModal>
    );
  });

  const handleClick = (): void => {
    showModal()
    handleModalReservation && handleModalReservation();
  }

  return (
    <div className="buttonModal d-flex justify-content-center align-items-center pt-5 pb-5">
      <Button className="btn btn-violet" onClick={handleClick}>
        Zarezerwuj
      </Button>
    </div>
  );
};

export default ModalReservation;
