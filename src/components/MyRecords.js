import { useGetMyRecordsQuery } from "./API/MyRecords";

const { data, error, isLoading } = useGetMyRecordsQuery;
console.log('data:', data);
console.log('error:', error);
console.log('isLoading:', isLoading);

export const MyRecords = () => {
    return (
        <>
            {data && data.map(el => <p>My record #{el.id} - name:{el.name}</p>)}
        
        </>
    )
}