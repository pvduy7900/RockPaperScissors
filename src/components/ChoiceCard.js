

import React from 'react'

// chỉ ghi trong 1 div chính
// props o day la cac thanh phan dc ghi ben app, dua no vao ben trong () thì moi co thu de goi ten ra chu
export default function ChoiceCard(props) {
    console.log("Props:", props);//de hiện ra các thành phần trong phần console nè
    return (

        // props là những cái mà bên trong app.js chứa

        <div className={`choice-card ${props.winner ? 'winner' : 'loser'}`}>

            <div className="App,hang_doc">
                <h1>{props.title}</h1>
                <img src={props.imgURL} alt={props.title}/>
                <h3>{props.winner ? 'Won' : 'Loss'}</h3>
            </div>
        </div>

    )
}
