import React from "react";

var userRegistered='true';
function s(v){
    return <Input
    text={v.text}
    name={v.name}
    />
}

function Input(props){
    return (<div><input style={{display:"block"}} type={props.text} placeholder={props.name} />
    <button>{userRegistered=="false"? "login":"register"}</button>
    {userRegistered==="false" && (<button>register</button>)}
    </div>
    );
    
}
export default s;