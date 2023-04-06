import './App.css';
import { useState } from 'react';
import { HomePage } from './components/homePage';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { List } from './components/List';
import { TotalMoney } from './components/TotalMoney';
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500, id: uuidv4()},
    { description: "Conta de luz", type: "Saída", value: 150, id: uuidv4() }
])

    // const newTransaction = (transaction) => {
    //   return setListTransactions([...listTransactions, transaction])
    // }

    const newTransaction = (transaction) => {
      const addActivity = {...transaction, id: uuidv4()}
      console.log(addActivity)
      return setListTransactions([...listTransactions, addActivity])
    }

    const removeTransaction = (transactionId) => {

      const newTransactionList = listTransactions.filter(transaction => transaction.id !== transactionId)
      setListTransactions(newTransactionList) 

    }
  
 
    const [initialPage, setInitialPage] = useState('Início')

    if (initialPage === 'Início'){

      return (
        <div className='App'>

          <HomePage setInitialPage={setInitialPage} />

        </div>

      ) 
    
    } else {
    
  return (

    <div className='App'>
      <header>
        <Header setInitialPage={setInitialPage}/>
      </header>
      <div className='body'>
        <section>
          <Form newTransaction={newTransaction} />
          <TotalMoney  listTransactions={listTransactions} />
        </section>
        <aside>
          <p>Resumo Financeiro</p>
          <List listTransactions={listTransactions} removeTransaction={removeTransaction}/>
        </aside>
      </div>

    </div>

  );
}
}
export default App;
