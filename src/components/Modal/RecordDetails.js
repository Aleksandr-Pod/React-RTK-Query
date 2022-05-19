import { useGetMyRecordByIdQuery } from "components/API/MyRecords";

export const RecordDetails = ({ id }) => {

    const { getMyRecordById } = useGetMyRecordByIdQuery(id);
    console.log('recordsDetails', getMyRecordById); // undefined
    return (
        <>
            <h3>MyRecordById - {id}</h3>
            {/* <p>{getMyRecordById.name}</p>
            <p>{getMyRecordById.content}</p> */}
        </>
    )
}