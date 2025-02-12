







export default function ProfileCard( { user }: {user: { name: string, title: string }} ){
    
    
    return (
        <>
            <article className="profile-card">
                <h2 className="profile-card__name"> {user.name} </h2>
                <h2 className="profile-card__title"> {user.title} </h2>
                <button className="profile-card__button">Show me more!</button>
            </article>
        </>
    )

}