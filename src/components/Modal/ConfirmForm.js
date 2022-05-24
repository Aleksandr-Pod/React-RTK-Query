export const ConfirmForm = ({todelete, currId}) => {
    return (
        <>
            <h3>Удалить?</h3>
            <p>Все записи по этой карточке будут удалены</p><hr />
            <div className="confirm-button">
                <button type="text" onClick={() => todelete(true, currId)}>YES (ДА)</button>
                <button type="text" onClick={() => todelete(false)}>NO (НЕТ)</button>
            </div>
        </>
    )
}