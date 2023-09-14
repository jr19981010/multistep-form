import './SplitScreen.css'


export const SplitScreen = ({children}) =>{
    const [header, main] = children;
    return(
        <>

        <div className="container">
            <div className="sidebar">
                {header}
            </div>
            <div className="main">
                {main}
            </div>
        </div>
        
        </>
    )
}