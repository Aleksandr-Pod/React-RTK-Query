import { useGetMyRecordByIdQuery } from "components/API/MyRecords";

export const RecordDetails = ({ id }) => {

    const { data: myrecordDetails } = useGetMyRecordByIdQuery(id);
    return (
        <>  
            {myrecordDetails &&
                <>
                    <h3>Details Record #{id}</h3><hr/>
                    <p>Name:{myrecordDetails?.name}</p>
                    <p>Content:{myrecordDetails?.content}</p>
                </>}
        </>
    )
}