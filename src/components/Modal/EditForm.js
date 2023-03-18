import { useEditMyRecordMutation } from 'components/API/MyRecords';
import { useState } from 'react';

export const EditForm = ({ data, closeModal }) => {
    const [editRecord] = useEditMyRecordMutation();
    const [card, setCard] = useState(data); // состояние - объект
    const onChange = e => {
        e.preventDefault();
        // в этом стейте может быть любое количесво полей.
        setCard(card => ({...card, [e.target.name]: e.target.value})) 
    }
    const onSubmit = (e) => {
        e.preventDefault();
        editRecord(card);
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
                        <label>{el}
                            <input key={idx} type="text" name={el} value={card[el]} onChange={onChange}/>
                        </label><br/>
                    </>
                ))}
                <button type='submit'>Save changes</button>
            </form>
        </>
    )
}