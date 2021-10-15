import React, { useState, useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ButtonShare from './ButtonShare';

const ButtonShareModal = () => {
   const [open, setOpen] = useState(false);

   const onOpenModal = () => {
      setOpen(true);
   };
   const onCloseModal = () => {
      setOpen(false);
   };

   return (
      <div>
         <button onClick={onOpenModal}>Share</button>
         <Modal
            open={open}
            showCloseIcon={false}
            onClose={onCloseModal}
            closeOnEsc={true}
            center
         >
            <ButtonShare />
         </Modal>
      </div>
   );
};
export default ButtonShareModal;
