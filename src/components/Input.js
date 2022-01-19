export const Input=({id,type,...props})=>{
    return (
        <input type={type} id={id} {...props} />
    )
}