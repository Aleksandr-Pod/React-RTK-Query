import { DataRow } from "./RecordItem-styled";

export const RecordItem = ({ itemData, edit, confirmation, recordDetails }) => {

    return (
        <DataRow >
            <td onClick={() => recordDetails(itemData.id)}>{itemData.id}</td>
            <td onClick={() => recordDetails(itemData.id)}>{itemData.name}</td>
            <td onClick={() => recordDetails(itemData.id)}>{itemData.content}</td>
            <td>
                <button type="text" onClick={() => confirmation(itemData.id)}>Del</button>
                <button type="text" onClick={() => edit(itemData.id)}>Edit</button>
            </td> 
        </DataRow>
    )
} 