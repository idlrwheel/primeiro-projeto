import './Navbar.css';
const array = ['home','cadastro', 'login']
function Navbar(){
    return(
        <>
        <div className="lineBreak">
        {array.map( (item)=>(<p>{item}</p>) )}
        </div>
        </>
    )
}
export default Navbar