import './style.css'
import trash from '../../img/trash.svg'


export const Card = ({transaction, removeTransaction}) => {

    if (transaction.type === "Entrada") {

        return(
            <div className='divCardEntrie'>
                <div className='divDescription'>
                    <h2>{transaction.description}</h2>
                    <p>{transaction.type}</p>
                </div>
                <span>R$ {transaction.value}</span>
                <button onClick={() => removeTransaction(transaction.id)}><img className='ButtonTrash' src={trash} alt="" /></button>
            </div>
        )

    } else {
        return (
            <div className='divCardExit'>
                <div className='divDescription'>
                    <h2>{transaction.description}</h2>
                    <p>{transaction.type}</p>
                </div>
                <span>R$ - {transaction.value}</span>
                <button onClick={() => removeTransaction(transaction.id)}><img className='ButtonTrash' src={trash} alt="" /></button>
            </div>
        )

}
}