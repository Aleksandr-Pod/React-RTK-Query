import { useGetMyRecordsQuery } from "./API/MyRecords";



export const MyRecords = () => {
    const { data, error, isLoading } = useGetMyRecordsQuery(1);
    console.log('data:', data);
    console.log('error:', error);
    console.log('isLoading:', isLoading);
    return (
        <>
            {data && <p>My record #{data.id} - name:{data.name}</p>}
        
        </>
    )
}