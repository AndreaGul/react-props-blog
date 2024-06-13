function Card({title,image,content,tags,published}){
    return(
        <>
        
        <div className={`card-container ${published ? '' : 'not-available'}`}>
        <div className="img-container">
        
        <img src={ `${image || "https://placehold.co/600x400"} `} alt="" />
        </div>
        <div className="text-container">
            <h2>{title}</h2>
            <p>{content}</p>
            <ul>
                {tags.map((tag,index)=>(
                    <li key={`tag ${index}`} className={`color-${tag}`}>{tag}</li>
                ))}
            </ul>
           
            <h3>{image}</h3>
            <button>leggi di più</button>
        </div>
        </div>
        
        </>
    )
}

export default Card