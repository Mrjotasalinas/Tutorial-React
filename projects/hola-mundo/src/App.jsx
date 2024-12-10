import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    

    return (
        <section className='App'>
            <TwitterFollowCard  isFollowing userName="midudev" name="Jhonatan Salinas Lopez"/>    
            <TwitterFollowCard  isFollowing userName="pheralb" name="Jesus Raul"/> 
        </section>
        
    )
}