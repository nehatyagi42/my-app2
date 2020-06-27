import React from "react"
import ReactDOM from  "react-dom"
import index from "/index.html"
import '/index.html';

//jsx
//ReactDOM.render(<div><h1>Hi Neha tyagi</h1><p>this is  paragraph</p></div>, document.getElementById("root"));

function MySecondApp(){
return(
<div>
<h1>Neha Tyagi</h1>
<p>This is paragraph</p>
<ul>
<li>Thailand</li>
<li>India</li>
<li>Japan</li>
</ul>
</div>
)
}
ReactDOM.render(
<MySecondApp /> ,document.getElementById("hello")


)