import {useState} from "react";

//Component FollowCard
const FollowCard = ({userName, name, initialIsFollowing}) => {
  const elementUserName = <span>@{userName}</span>
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo": "Seguir"
  const followState = isFollowing ? "tw-follow-card-button is-following": "tw-follow-card-button"; 

  //Function to change state's button
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }
  return (
      <div className = "tw-follow-card">
        <article className = "tw-follow-card-article">
          <header className = "tw-follow-card-header">
            <img src = {`https://unavatar.io/${userName}`} alt = "Avatar" className = "tw-follow-card-imgUser"/>
            <div className = "tw-follow-card-info-user">
              <strong>{name}</strong>
              {elementUserName}
            </div>
          </header>
          <aside className="tw-follow-card-aside">
            <button className = {followState} onClick = {handleClick}>{text}
            <span className = "tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
          </aside>
        </article>
      </div> 
    )
}
export default FollowCard