import styled from "styled-components";

export const FormDash = styled.form`
width:100%;
height:140px;
background-color:#225AC5;
margin-top:30px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
box-shadow: 0px 5px 6px rgb(0 0 0 / 20%);

div{
    display:flex;
    flex-direction:column;

}

div>input{
    box-sizing: border-box;
    width:300px;
    height:40px;
    border:none;
    border-radius:8px;
   
    box-sizing:border-box;
}

div>button{
    border:none;
    border-radius:8px;
    width:95px;
    height:35px;
    background-color:#0EC991;
    color:white;
    font-weight:700;
    font-size:80%;
    cursor:pointer;
    position:absolute;
    margin-top:67px;
    margin-left:204px;
    float:right;

   
    
}

div>select{
    width:300px;
    height:40px;
    border:none;
    border-radius:8px;
    margin-right:50px;
    margin-top:10px;
    margin-bottom:15px;
    box-sizing:border-box;
    
}





input::placeholder{
    font-size:18px;
    padding-left:10px;
}


select {
    
}



@media only screen and (min-width: 768px) {
   
    div{
        display:flex;
        flex-direction:row;
        align-items:center
    }

    div>button{
        position:static;
        
        margin-top:0px;
        margin-left:0px;
        height:60%;
        margin-left:20px;
    }

    

    

}

`
export const Option = styled.option`


`
