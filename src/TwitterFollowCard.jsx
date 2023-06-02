import { useState } from "react"

export function Card({children, userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassName= isFollowing
    ? 'tw-card-button is-following'
    : 'tw-card-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return  (
        <article className='tw-card-article'>
    <header className='tw-card-header'>
        <img className='tw-card-img'
        src={`https://unavatar.io/gravatar/${userName}`} alt="" />
        <div className='tw-card-info'>
            <strong>{children}</strong>
            <span className='tw-card-name'>@{userName}</span>
        </div>
    </header>
    <aside>
        <button className={buttonClassName} onClick={handleClick}>
           
            <span className="text-button"> {text} </span>
            <span className="text-DejardeSeguir">Dejar de seguir</span>
        </button>
    </aside>
</article>
    ) 

}