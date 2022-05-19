import { useGetMyRecordsQuery } from "../API/MyRecords";
import { RecordItem } from "./RecordItem";
import { Modal } from "components/Modal/modal";
import { useState } from 'react';
import { AddForm } from '../Modal/AddForm';
import { ConfirmForm } from "components/Confirmation/ConfirmForm";

export const MyRecords = () => {
    const { data } = useGetMyRecordsQuery("");
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(<AddForm/>)

    const onAddRecord = () => {
        toggleModal();
    }
    const onEditRecord = () => {
        console.log('Edit Record');
    }
    const confirmation = () => {
        toggleModal();
        setModalContent(<ConfirmForm/>)
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const onKeyPress = (e) => {
        console.log(e.code);
        if (e.code === "Escape") {
            toggleModal();
            return;
        }
        if (e.code === "KeyY") {
            console.log('confirmed');
            toggleModal();
        } else {
            console.log("not confirmed");
        }
        
    }
    const onOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) toggleModal({})
  }
    
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{width: "200px"}} tybe="text" onClick={onAddRecord}>Add data</button>
            {showModal && <Modal onKeyPress={onKeyPress} handleOverlayClick={onOverlayClick}>{modalContent}</Modal>}
            {data && (
                <table>
                    <thead>
                        <tr>
                            <th>#</th><th>Name</th><th>content</th><th>Options</th>
                        </tr>
                        {data.map(el => <RecordItem key={el.id} itemData={el} Edit={onEditRecord} confirm={confirmation}/>)}
                    </thead>
                </table>)}
        </div>
    )
}