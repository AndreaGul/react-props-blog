import mainCss from "./Main.module.css"
import Card from "./Card"
import Tags from "./Tags"
import posts from "../../../posts"
function Main (){
    const uniqueTags = [...new Set(posts.flatMap(post => post.tags))];
    return(
    <>
    <main className={mainCss.container}>
        <h1>Il mio blog</h1>
        
        <Tags tags={uniqueTags} />
        
         {posts.map((p)=>(
             <Card
             key={p.id}
             title={p.title}
             image={p.image}
             content={p.content}
             tags={p.tags}
             published={p.published}
             />
         ))} 
        
    </main>
    </>
    )
}

export default Main