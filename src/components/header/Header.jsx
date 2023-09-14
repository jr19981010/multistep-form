import './Header.css';
export const Header = () =>{
    return(
        <header>
            <div>
            <span className='number-one'>01</span>
            <span className='number-two'>02</span>
            <span className='number-three'>03</span>
            <span className='number-four'>04</span>
            <h1 className='step-one'><span>STEP 1</span>  YOUR INFO</h1>
            <h1 className='step-two'><span>STEP 2</span> SELECT PLAN</h1>
            <h1 className='step-three'><span>STEP 3</span> ADD-ONS</h1>
            <h1 className='step-four'><span>STEP 4</span> SUMMARY</h1>
            </div>
        </header>
    )
}