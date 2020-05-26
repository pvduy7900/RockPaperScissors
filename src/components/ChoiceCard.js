



import React from 'react'

// chỉ ghi trong 1 div chính
// props o day la cac thanh phan dc ghi ben app, dua no vao ben trong () thì moi co thu de goi ten ra chu
export default function ChoiceCard(props) {
    let result =''

    //1. if props.winner is Tie game, then TIme game 
    if(props.winner === "Tie game!"){
        result = "Tie"
    }else if(props.winner === "Victory!"){
        if(props.title === "Computer"){
            result = "defeat"
        }else if(props.title === "You"){
            result = "Victory"
        }
    }else if(props.winner === 'Defeat!'){
        if(props.title === "Computer"){
            result = "Victory"
        }else if(props.title === "You"){
            result = "defeat"
        }
    }
    //2. if  winner is Victory, then computer is defeat but you is Victory
    //3. if winner is defeat , then computer is Victory and you is defeat 
    console.log("Props:", props);//de hiện ra các thành phần trong phần console nè
    return (

        // props là những cái mà bên trong app.js chứa

        <div className={`choice-card ${result}`}>

            <div className="App,hang_doc">
                <h1>{props.title}</h1>
                <img src={props.imgURL} alt={props.title}/>
                <h3>{result}</h3>
            </div>
        </div>

    )
}
