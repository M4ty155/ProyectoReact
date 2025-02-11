export function XFollowCard ({ userName, name, isFollowing }) {
    const imgSource = `https://unavatar.io/{username}`
    return (
        <article className = 'xcard'>
        <header className="xcard-header">
            <img alt="Avatar" className="xcard-avatar" src={`https://unavatar.io/${userName}`}/>
            <div className="xcard-info">
                <strong>{name}</strong>
                <span className="xcard-username">@{userName}</span>
            </div>
        </header>
        <aside>
            <button className="xcard-button">
                Seguir
            </button>
        </aside>
    </article>
    )
}