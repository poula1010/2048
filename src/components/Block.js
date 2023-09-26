export default function Block({row,col,value}){
    return(
        <div className={`block _${value}`} style= {{gridRowStart:row,gridColumnStart:col,gridRowEnd:row+1,gridColumnEnd:col+1}}>{value}</div>
    );
}