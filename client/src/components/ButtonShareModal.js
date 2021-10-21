import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ButtonShare from './ButtonShare';
import './css/ButtonShare.css';
import './css/vivify.min.css';

const ButtonShareModal = () => {
   const [open, setOpen] = useState(false);

   const onOpenModal = () => {
      setOpen(true);
   };
   const onCloseModal = () => {
      setOpen(false);
   };

   return (
      <div className="buttonshare-container vivify popIn delay-2000">
         <button className="buttonshare-share-button" onClick={onOpenModal}>
            SHARE!
         </button>
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
