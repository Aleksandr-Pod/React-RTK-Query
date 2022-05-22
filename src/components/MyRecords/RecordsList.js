import { useGetMyRecordsQuery, useDeleteMyRecordMutation } from "../API/MyRecords";
import { RecordItem } from "./RecordItem";
import { Modal } from "components/Modal/modal";
import { useState } from 'react';
import { AddForm } from '../Modal/AddForm';
import { ConfirmForm } from "components/Modal/ConfirmForm";
import { RecordDetails } from "components/Modal/RecordDetails";
import { EditForm } from "components/Modal/EditForm";

export const RecordsList = () => {
    const { data } = useGetMyRecordsQuery("");
    const [ deleteMyRecord ] = useDeleteMyRecordMutation();
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState();

    const onAddRecord = () => {
        setModalContent(<AddForm />)
        setShowModal(true); // включаем модалку
    }
    const confirmation = (id) => {
        setModalContent(<ConfirmForm todelete={todelete} currId={id}/>)
        setShowModal(true); // включаем модалку
    }
    const todelete = (res, currId) => {
        if (res) deleteMyRecord(currId);
        setShowModal(false);
    }
    const recordDetails = (id) => {
        setModalContent(<RecordDetails id={id}/>)
        setShowModal(true); // включаем модалку
    }
    const onEditRecord = (data) => {
        setModalContent(<EditForm data={data} closeModal={() => setShowModal(false)}/>);
        setShowModal(true);
    }
    const onKeyPress = (e) => {
        if (e.code === "Escape") setShowModal(!showModal);
    }
    const onOverlayClick = (evt) => {
        if (evt.target === evt.currentTarget) setShowModal(!showModal)
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <button style={{width: "200px"}} tybe="text" onClick={onAddRecord}>Add data</button>
            {showModal && <Modal onKeyPress={onKeyPress} handleOverlayClick={onOverlayClick}>{modalContent}</Modal>}
            {data && (
                <table>
                    <thead><tr>
                        {Object.keys(data[0]).map((el, idx) => (<th key={idx}>{el}</th>))}
                        <th>Options</th>
                        </tr>
                        {data.map(el => <RecordItem
                            key={el.id}
                            itemData={el}
                            edit={onEditRecord}
                            closeModal={setShowModal}
                            confirmation={confirmation}
                            recordDetails={recordDetails}
                        />)}
                    </thead>
                </table>)}
        </div>
    )
}