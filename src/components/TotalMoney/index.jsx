import "./style.css"

export const TotalMoney = ({listTransactions}) => {

    return (

        <div className="totalContainer">
            <span>Valor Total:</span>
            <span className="spanColor"> R${listTransactions.reduce((initialValue, previousValue) => {

                if(previousValue.type === "Entrada") {

                    return initialValue + previousValue.value;

                } else {

                    return initialValue - previousValue.value

                }
                
            }, 0)}</span>
        </div>
    )
}