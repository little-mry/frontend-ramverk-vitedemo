import Children from "./Children"

const Parent = ({ message, energy }: {message: string, energy: number}) => {
  return (
    <Children message={message} energy={energy}/>
  )
}

export default Parent



/* import ProfileCard from "./Card"

export default function Parent() { 
    const user  = {
        name: 'Nicodemus Naveltuta',
        age: '47',
        title: 'vice ninja',
        email: 'nicokick@theoffice.net'
    }

    return (
        <ProfileCard 
             user = {user}
        />
        
    )
}
 */
