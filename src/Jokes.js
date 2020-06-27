import React from "react"

function Jokes(props){
console.log(props.question)
return(
    <div>
<h1>Question: {props.question}</h1>
{/* if u give inline style */}
<h1 style={{color: !props.question && "pink"}}>Answer:{props.punchline}</h1>
<hr/>

</div>

)

}
export default Jokes