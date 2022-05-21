// import { useGetMyRecordByIdQuery } from "components/API/MyRecords";
import { useEditMyRecordMutation } from 'components/API/MyRecords';
import { useState } from 'react';

export const EditForm = ({ data, closeModal }) => {
    // const { data: myRecord } = useGetMyRecordByIdQuery(data.id);
    const [editRecord] = useEditMyRecordMutation();
    const [name, setName] = useState(data.name);
    const [content, setContent] = useState(data.content);

    const onChange = e => {
        e.preventDefault();
        switch (e.currentTarget.name) {
            case 'name':
                setName(e.currentTarget.value);
                break;
            case 'content':
                setContent(e.currentTarget.value);
                break;
            default:
        }
    }
    const onSubmit = (e) => {
        e.preventDefault();
        editRecord({ id: data.id, name, content });
        closeModal();
    }
    return (
        <>
            <h2>EDIT FORM</h2>
            <p>record #{data.id}</p><hr />
            <form onSubmit={onSubmit}>
                <label>Name: 
                    <input type="text" name="name" value={name} onChange={onChange}/>
                </label><br/>
                <label>Content: 
                    <input type="text" name="content" value={content} onChange={onChange}/>
                </label>
                <button>Save Edited Record</button>
            </form>
            
        </>
    )
}