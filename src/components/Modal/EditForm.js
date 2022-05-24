// import { useGetMyRecordByIdQuery } from "components/API/MyRecords";
import { useEditMyRecordMutation } from 'components/API/MyRecords';
import { useState } from 'react';

export const EditForm = ({ data, closeModal }) => {
    // const { data: myRecord } = useGetMyRecordByIdQuery(data.id);
    const [editRecord] = useEditMyRecordMutation();

    // const [name, setName] = useState(data.name);
    // const [content, setContent] = useState(data.content);
    const [card, setCard] = useState(data); // состояние - объект
    const onChange = e => {
        e.preventDefault();
        // в этом стейте может быть любое количесво полей.
        setCard(card => ({...card, [e.target.name]: e.target.value}))
        // switch (e.currentTarget.name) {
        //     case 'name':
        //         setName(e.currentTarget.value);
        //         break;
        //     case 'content':
        //         setContent(e.currentTarget.value);
        //         break;
        //     default:
        
    }
    const onSubmit = (e) => {
        e.preventDefault();
        editRecord(card);
        // editRecord({ id: data.id, name, content });
        closeModal(true);
    }
    return (
        <>
            <h2>EDIT FORM</h2>
            <p>record #{data.id}</p><hr />
            <form onSubmit={onSubmit}>
            {/* генерируем все поля кроме "id", последнего элемента */}
                {Object.keys(data).slice(0, (Object.keys(data).length-1)).map((el, idx) => (
                    <>
                        <label key={idx}>{el}: 
                            <input type="text" name={el} value={card[el]} onChange={onChange}/>
                        </label><br/>
                    </>
                ))}
                {/* <label>Name: 
                    <input type="text" name="name" value={card.name} onChange={onChange}/>
                </label><br/>
                <label>Content: 
                    <input type="text" name="content" value={card.content} onChange={onChange}/>
                </label><br/> */}
                <button>Save Edited Record</button>
            </form>
            
        </>
    )
}