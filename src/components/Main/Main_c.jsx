import  mainCss from "./Main.module.css"
import Card from "./Card"
import posts from "../../../posts"
function Main (){
    return(
    <>
    <main className={mainCss.container}>
        <h1>Il mio blog</h1>
        <div className="card-container">
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
        </div>
    </main>
    </>
    )
}

export default Main