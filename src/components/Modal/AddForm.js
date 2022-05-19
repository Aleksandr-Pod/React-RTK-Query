import { useAddMyRecordMutation } from 'components/API/MyRecords';

export const AddForm = () => {
    const [addRecord] = useAddMyRecordMutation();

    const onSubmit = async e => {
        e.preventDefault();
        const data = {
        id: Date.now(),
        name: e.target.elements.name.value,
        content: e.target.elements.content.value
        }
        try {
        await addRecord(data);
        } catch (error) {
        console.log('Error:', error);
        }
        e.target.elements.name.value = "";
        e.target.elements.content.value = "";
        document.getElementById("start").select();
    }
    
    return (<div className="formBox">
        <h2 style={{textAlign: "center"}}>Add record</h2>
        <form onSubmit={onSubmit}>
            <label>Name
                <input type="text" name="name" id="start"/>
            </label>
            <br/><br/>
            <label>Content
                <input type="text" name="content"/>
            </label>
            <hr/>
            <button style={{ margin: "auto" }}>Submit</button>
        </form>
        </div>
    )
} 