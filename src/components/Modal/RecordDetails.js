import { useGetMyRecordByIdQuery } from "components/API/MyRecords";

export const RecordDetails = ({ id }) => {
    const { data: myrecordDetails } = useGetMyRecordByIdQuery(id);
    return (
        <>  
            {myrecordDetails &&
                <>
                    <h3>Details</h3><hr />
                    {Object.keys(myrecordDetails).map((el, idx) => (
                        <p><b>{el}:</b> {myrecordDetails[el]}</p>
                    ))}
                </>}
        </>
    )
}