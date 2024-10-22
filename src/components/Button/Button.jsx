import { useState } from "react"

const Button = ({text , color, fn}) => {

    const [count , setCount] = useState(0)

    // console.log("count: ", count)

    const click = () => {
        setCount(count + 1)
        fn(count)
    }

    return(
        <button style={{backgroundColor: color}} onClick={()=> click()}>{text}</button>
    ) 

}

export default Button