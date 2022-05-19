export const RecordItem = ({ itemData, Edit, confirmation }) => {

    return (
        <tr>
            <td>{itemData.id}</td>
            <td>{itemData.name}</td>
            <td>{itemData.content}</td>
            <td>
                <button type="text" onClick={() => confirmation(itemData.id)}>Del</button>
                <button type="text" onClick={() => Edit(itemData.id)}>Edit</button>
            </td> 
        </tr>
    )
} 