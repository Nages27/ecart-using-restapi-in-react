import { Dialog } from "@mui/material";
import { useSelector } from "react-redux"


function updatepopup(){

    const  data=useSelector((state)=>state.pop.tempdata);

    return(
        <>
        <Dialog>
            
        </Dialog>
        </>
    )
}