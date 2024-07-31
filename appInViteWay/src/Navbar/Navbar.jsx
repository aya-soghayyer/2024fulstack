
import style from'./navbar.module.css' 

function Navbar({count , age, children }) {
    console.log(count, age)

    let isLoading = true ; 
    if (isLoading) {
        return <div>Loading...</div>;
        }
        else {
    return (
    <div className={style.br}>
            <ul type="none" className={style.list}>
                <li > <a href="" className={style.white} >home</a></li>
                <li > <a href="" className={style.white}>blog</a></li>
                <li > <a href="" className={style.white}>about{age}</a></li>
                <li > <a href="" className={style.white}>contact{count}</a></li>
            </ul>
        </div>
    );}
}

export default Navbar