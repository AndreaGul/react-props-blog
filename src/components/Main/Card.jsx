function Card({title,image,content,tags,published}){
    return(
        <>
        
        
        <div className="img-container">
        <h2>600x400</h2>
        </div>
        <div className="text-container">
            <h2>{title}</h2>
            <p>{content}</p>
            <ul>
                {tags.map((tag,index)=>(
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <h3>{published}</h3>
            <h3>{image}</h3>
            <button>leggi di più</button>
        </div>
       
        
        </>
    )
}

export default Card