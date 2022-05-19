export const ConfirmForm = ({todelete, currId}) => {
    return (
        <>
            <h3>Удалить?</h3><hr/>
            <button type="text" onClick={() => todelete(true, currId)}>YES (ДА)</button>
            <button type="text" onClick={() => todelete(false)}>NO (НЕТ)</button>
        </>
    )
}