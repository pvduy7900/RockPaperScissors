

import './App.css';
import ChoiceCard from "./components/ChoiceCard"; // liên kết choiceCard
import React, { useState } from "react";
import ChoiceButtons from './components/ChoiceButtons'; //liên kết choiceButton







export const getRandomChoice = () => { //này là cái gì? tại sao lại có export
  let choiceNames = Object.keys(CHOICES); // returns an array of the keys, chiceNames: ['scissors', 'paper', 'rock']
  let randomIndex = Math.floor(Math.random() * 3); // lấy ra 1 số ngẫu nhiên, nhưng tại sa lai nhân 3, math.floor là lấy hần nguyên
  let choiceName = choiceNames[randomIndex];// gán choiceName thành choiceNAME NHƯNG Ở VỊ TRÍ THỨ random số vừa dc lấy ở trên
  return CHOICES[choiceName];//trả về kết quả này, tức là cái tên-vị trí
};
// đây là Object?
export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
};

export const getRoundOutcome = userChoice => { // truyền giá trị vào userChoice, get..... là tên Function
  const computerChoice = getRandomChoice().name; // gọi hàm random, sẽ có kết quả là 1 cái Object chứa name và url, cái .name sau cùng là để lấy riêng ra name
  let result; // đây là kết quả

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";//ko hiểu đoạn này
    /*
      if (computerChoice === "scissors") {
        result = "Victory"
      } else {
        result = "Defeat"
      }

    */
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice]; //["Victory", "rock"]
};




function App() {
  const [prompt, setGamePrompt] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);//history


  const onPlayerChoose = playerChoice => {
    console.log("eee", playerChoice)
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    //console.log("prom",prompt)
    console.log("rr", result)
    setGamePrompt(result);
    gameHistory.push(result);
    setGameHistory(gameHistory);
  };


  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3 flex-container">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard

              title="Computer"
              imgURL={computerChoice && computerChoice.url}
              winner={prompt}
            />
            <div className="container">
              <ChoiceButtons onPlayerChoose={onPlayerChoose} />
            </div>
            <h1>{prompt}</h1>
            <ChoiceCard
              title="You"
              imgURL={playerChoice && playerChoice.url}
              winner={prompt}
            />

            
          </div>
          <div className="col-md-4 themed-grid-col">
              <h3>History</h3>
              <ul>
                {gameHistory.map(result => {
                  return <li>{result}</li>;
                })}
              </ul>
            </div>
        </div>
      </div>
    </div>

  )
}

export default App;
