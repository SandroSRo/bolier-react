export function CInput({type , label, value ,placeholder,onChange}) {


    return(
        <div className="flex flex-col mt-2 p-3">
            <span className="font-bold">{label}</span>
            <input className="
             w-[350px]
             placeholder-slate-800
             p-5 
             border-gray-950
             rounded-md" 
             onChange={onChange}
            type={type} placeholder={placeholder} value={value} />
        </div>
    )
}
