
import React from 'react'
import { CHOICES } from '../App'

export default function ChoiceButtons(props) {
    return (
        <div>
            <button onClick = {() => props.onPlayerChoose("rock")}>Rock</button>
            <button onClick = {() => props.onPlayerChoose("paper")}>paper</button>
            <button onClick = {() =>  props.onPlayerChoose("scissors")}>scissors</button>
        </div>
    )
}






















// import React from 'react'

// export default function ChoiceButtons(props) {
//     return (
//         <div>
//              <button
//                 className="btn btn-success btn-lg"
//                 onClick={() => props.onPlayerChoose("rock")}
//               >
//                 Rock
//   </button>
//               <button
//                 className="btn btn-success btn-lg"
//                 onClick={() => props.onPlayerChoose("paper")}
//               >
//                 Paper
//   </button>
//               <button
//                 className="btn btn-success btn-lg"
//                 onClick={() => props.onPlayerChoose("scissors")}
//               >
//                 Scissors
//   </button>
//         </div>
//     )
// }
