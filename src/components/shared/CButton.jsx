export function CButton({type,label,onClick}){
    return (
        <button type="button" onClick={onClick} className="w-[300px] bg-lime-300 h-[50px] rounded-lg">
            <span className="font-bold bg-blend-color">{label}</span>
        </button>
    )
}
