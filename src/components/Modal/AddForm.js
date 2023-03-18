import { useAddMyRecordMutation } from 'components/API/MyRecords';

export const AddForm = () => {
    const [addRecord] = useAddMyRecordMutation();
    const fields = ["name", "content", "value"];

    const onSubmit = async e => {
        e.preventDefault();
        const data = {
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
                <li key={idx} style={{ listStyle: 'none' }}>
                    <label style={{display: 'flex'}}>{el+': '}
                    <input style={{marginLeft: 'auto'}} type="text" name={el} id="start"/>
                    </label><br/>
                </li>
            ))}
            <hr/>
            <button style={{ margin: "auto" }}>Submit</button>
        </form>
        </div>
    )
} 