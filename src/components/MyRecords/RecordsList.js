import { useGetMyRecordsQuery, useDeleteMyRecordMutation } from "../API/MyRecords";
import { RecordItem } from "./RecordItem";
import { Modal } from "components/Modal/modal";
import { useState } from 'react';
import { AddForm } from '../Modal/AddForm';
import { ConfirmForm } from "components/Confirmation/ConfirmForm";

export const RecordsList = () => {
    const { data } = useGetMyRecordsQuery("");
    const [ deleteMyRecord ] = useDeleteMyRecordMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(<AddForm />);

    const onAddRecord = () => {
        toggleModal();
    }
    const onEditRecord = () => {
        console.log('Edit Record');
    }
    const confirmation = (id) => {
        setModalContent(<ConfirmForm todelete={todelete} currId={id}/>)
        setShowModal(true); // включаем модалку

    }
    const todelete = (res, currId) => {
        console.log('delete access:', res);
        console.log('current Id:', currId);
        if (res) {
            console.log('deleting ...');
            deleteMyRecord(currId);
            setModalContent(<AddForm />);
        }
        setShowModal(false); // выключаем модалку
    }

    const toggleModal = () => {
        setShowModal(!showModal);
    }
    const onKeyPress = (e) => {
        if (e.code === "Escape") toggleModal();
    }
    const onOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) toggleModal()
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
                        {data.map(el => <RecordItem
                            key={el.id}
                            itemData={el}
                            Edit={onEditRecord}
                            confirmation={confirmation}
                            
                        />)}
                    </thead>
                </table>)}
        </div>
    )
}