import FollowCard from "./TwitterFollowCard"
import "./TwitterFollowCard.css"
const App = () => {
  //Simulacion de la respuesta de una Api
  const users = [
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      isFollowing: true
    },
    {
      userName: "pheralb",
      name: "Pablo H.",
      isFollowing: false
    },
    {
      userName: "PacoHdezs",
      name: "Paco Hdez",
      isFollowing: true
    }
  ]
  return (
    <div className = "app">
     {
      users.map(user => {
        //Desestructuramos
        const {userName, name, isFollowing} = user
        return(
          <FollowCard 
          userName = {userName} 
          initialIsFollowing = {isFollowing} 
          name = {name}
          key = {userName}>
          </FollowCard>
        )
      })
     }
    </div>
  )
}
export default App