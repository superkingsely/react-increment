import { ReactNode } from "react"

const App = () => {
    const listofplayer=['messi','ronaldo','kaka']
  return (
    <div>
        {
            listofplayer.map(function(player){
                return(
                    <div>
                        <h1>{player}</h1>
                    </div>
                )
            })
        }
        <ul>

        {
            listofplayer.map(player=>{
                return(
                    <li><h1>{player}</h1></li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default App