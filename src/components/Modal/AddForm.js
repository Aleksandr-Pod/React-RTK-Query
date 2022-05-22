import { useAddMyRecordMutation } from 'components/API/MyRecords';

export const AddForm = () => {
    const [addRecord] = useAddMyRecordMutation();
    const fields = ["name", "content", "value"]
    const onSubmit = async e => {
        e.preventDefault();
        const data = {
        id: Date.now(),
        name: e.target.elements.name.value,
        content: e.target.elements.content.value,
        value: e.target.elements.value.value
        }
        try {
        await addRecord(data);
        } catch (error) {
        console.log('Error:', error);
        }
        e.target.elements.name.value = "";
        e.target.elements.content.value = "";
        e.target.elements.value.value = "";
        document.getElementById("start").select();
    }
    
    return (<div className="formBox">
        <h2>Add record</h2>
        <form onSubmit={onSubmit}>
            {fields.map((el, idx) => (
                <>
                <label>{el}
                <input type="text" name={el} id="start"/>
                </label><br/>
                </>
            ))}
            <hr/>
            <button style={{ margin: "auto" }}>Submit</button>
        </form>
        </div>
    )
} 