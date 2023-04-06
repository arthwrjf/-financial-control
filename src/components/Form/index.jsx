import { useState } from "react";
import "./style.css"

export const Form = ({newTransaction}) => {

    const [inputDescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputType, setInputType] = useState("Entrada")

    const financialActivity = {description: inputDescription,
                               type: inputType,
                               value: inputValue,
                              };

  
const handleSubmit = (event) => {

    event.preventDefault()
  
    newTransaction(financialActivity) 
   
}
  
    return (

        <form className="formContainer" onSubmit={handleSubmit}>
            <div className="descContainer">
               <label htmlFor="description">Descrição</label>
               <input type="text" 
                      id="description" 
                      onChange={(event) => setInputDescription(event.target.value)}
                      placeholder="Digite aqui sua descrição" 
               />
               <span>Ex: Compra de roupas</span>
            </div>
            <div className="valueTypeContainer">
              <div className="valueContainer">
                <label htmlFor="value">Valor</label>
                <input type="number"
                       id="value"
                       onChange={(event) => setInputValue(Number(event.target.value))}
                       placeholder="R$"
                />
              </div>
              <div className="typeContainer">
                <label htmlFor="type">Tipo de valor</label>
                <select id="type"
                        onChange={(event) => setInputType(event.target.value)}
                >
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
              </div>
            </div>
               <button className="buttonSubmit" type="submit">Inserir Valor</button>
        </form>
    )
   
 }
