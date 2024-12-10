import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'siguiendo' : 'seguir'
    const buttonClassname = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' src={`https://unavatar.io/${userName}`} alt="" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}