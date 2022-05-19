import { useDeleteMyRecordMutation } from "../API/MyRecords";

export const RecordItem = ({ itemData, Edit }) => {
    const [deleteRecord, delStatus] = useDeleteMyRecordMutation();

    const onDelete = (id) => {
        confirm();

        deleteRecord(id);
    }
    const confirm = () => {

    } 
    return (
        <tr>
            <td>{Number(itemData.id) + 1}</td>
            <td>{itemData.name}</td>
            <td>{itemData.content}</td>
            <td>
                <button type="text" onClick={() => onDelete(itemData.id)} disabled={delStatus.isLoading}>Del</button>
                <button type="text" onClick={() => Edit(itemData.id)}>Edit</button>
            </td> 
        </tr>
    )
} 