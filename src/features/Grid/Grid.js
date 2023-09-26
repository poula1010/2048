import { gridArraySelector} from "./gridSlice";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import Block from "../../components/Block";
export default function Grid(){
    const gridArr = useSelector(gridArraySelector);
    const Blocks = gridArr.map((row,rowI)=>{
    return(
        row.map((e,colI)=>{
            return(<Block row = {rowI+1} col= {colI+1} key = {rowI*4 + colI} value = {e.value}/>)
            })
        )});

    return(
        <div className="grid">
            {Blocks}
        </div>
    )
}