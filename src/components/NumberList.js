import React, {useState} from "react";
import { randomNumber } from "../utils";

function NumberList() {

  const [numbers, setNumbers] = useState([1,2,3])
  const numberList = numbers.map((number) => <li key={number}>{number}</li>)

  function handleAddNumber() {
    const newNumber = randomNumber();
    const newNumberArray = [...number, newNumber]
    console.log(newNumber);
  }

  function handleLiClick(numberToRemove){
    // const newNumberArray = numbers.filter((number) => number !== numberToRemove)
    // setNumbers(newNumberArray)

    const newNumberArray = numbers.map((number) => {
      if (number === numberToRemove) {
        return numberToRemove + 100 ;
      } else {
        return number
      }
    })
    setNumbers(newNumberArray)
  }


  return (
    <div>
      <button onClick={handleAddNumber}>Add Number</button>
      <ul>{numberList}</ul>
    </div>
  );
}

export default Numbers;
