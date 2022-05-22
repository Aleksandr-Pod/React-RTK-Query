import { DataRow } from "./RecordItem-styled";

export const RecordItem = ({ itemData, edit, closeModal, confirmation, recordDetails }) => {

    return (
        <DataRow >{Object.keys(itemData).map((el, idx) => (
            <td key={idx} onClick={() => recordDetails(itemData.id)}>{itemData[el]}</td>
        ))}
            {/* <td onClick={() => recordDetails(itemData.id)}>{itemData.id}</td>
            <td onClick={() => recordDetails(itemData.id)}>{itemData.name}</td>
            <td onClick={() => recordDetails(itemData.id)}>{itemData.content}</td> */}
            <td>
                <button type="text" onClick={() => confirmation(itemData.id)}>Del</button>
                <button type="text" onClick={() => edit(itemData)}>Edit</button>
            </td>  
        </DataRow>
    )
} 