import { useState } from "react"

const AboutUs = (props)=>{
    console.log("props",props)
    const [myState,setMyState] = useState('hiiii')
    let data = ''
    return(
        <div>
            <p>AboutUs page</p>
            <p>my name is : {props.name}</p>
            {
                setMyState('sdjfnkjrsff')
            }
        </div>
    )
}
export default AboutUs