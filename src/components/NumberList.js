import React, {useState} from "react";
import { randomNumber } from "../utils";

function NumberList() {

  const [numbers, setNumbers] = useState([1,2,3])
  const numberList = numbers.map((number) => <li key={number}>{number}</li>)
  const [filterBy, setFilterBy] = useState('All')

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...number, newNumber]
    console.log(newNumber);
  }

  function handleLiClick(numberToRemove){
    const newNumberArray = numbers.filter((number) => number !== numberToRemove)
    setNumbers(newNumberArray)
  }

  function handleLiClick(numberToUpdate){
    const newNumberArray = numbers.map((number) => {
      if (number === numberToUpdate) {
        return numberToUpdate + 100 ;
      } else {
        return number
      }
    })
    setNumbers(newNumberArray)
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value)
  }

  let numbersToDisplay = numbers
  if (filterBy === "Even") {
    numbersToDisplay = numbers.filter((num) => num % 2 === 0);
  } elseif (filterBy === "Odd"){
    numbersToDisplay = numbers.filter((num) => num % 2 !== 0)
  }

  const numberList = numbersToDisplay.map((num) => <li key={num}>{num}</li>)


  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
