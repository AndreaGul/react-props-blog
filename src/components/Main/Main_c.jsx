import  mainCss from "./Main.module.css"
import Card from "./Card"
function Main (){
    return(
    <>
    <main className={mainCss.container}>
        <h1>Il mio blog</h1>
        <Card/>
    </main>
    </>
    )
}

export default Main