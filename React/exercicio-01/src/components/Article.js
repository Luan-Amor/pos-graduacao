
export const Article = ({ repo }) => {

    return (
        <article className="article">
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{repo.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{repo.full_name}</h6>
                    <p className="card-text">{repo.description}<br />Linguagens: {repo.language}</p>
                    <a href={repo.html_url} className="card-link">Link para o Repositório</a>
                </div>
            </div>
        </article>
    )
}