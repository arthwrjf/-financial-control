import { Card } from "../Card";

export const List = ({listTransactions, removeTransaction}) => {

    return (
        
        listTransactions.map((transaction, index) => <Card key={index} transaction={transaction} removeTransaction={removeTransaction} />)
    )
}

