import Adminnavbar from "./Adminnavbar"
import Adminpage01 from "./Adminpage01"
import Adminpage02 from "./Adminpage02"

function Adminpage({bundle}){
    return(
        <>
            <Adminnavbar/>
            <Adminpage01 bundle={bundle}/>
            <Adminpage02 bundle={bundle}/>
        </>
    )
}

export default Adminpage