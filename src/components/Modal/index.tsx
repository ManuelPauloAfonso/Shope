import { Modals } from "./style";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useContext, useState } from "react";
import { ModalContext } from "../../context";

export default function ModalShope() {
   
    Modal.setAppElement('#root');

    const {modalIsOpen, setIsOpen} = useContext(ModalContext)

    return (
       
            <Modal
                 isOpen={modalIsOpen}
               //  onAfterOpen={afterOpenModal}
                 onRequestClose={() => setIsOpen(!modalIsOpen)}
                 contentLabel="Example Modal"
                 className="react-modal-content"
                 overlayClassName="react-modal-overlay"

            
            >
                <Modals>
                      fgfsdgfgfg
                </Modals>
            </Modal>
    )
}


