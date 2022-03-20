import styled from "styled-components";

export const FaqContainer = styled.div`
    position: relative;
    padding:0;
    padding:0;
    width:100%;
    font-family:arial;

`

export const SideBar = styled.div`
    position:fixed;
    top:0;
    left:0;
    margin:0;
    padding: 0;
    width:30%;
    height:100vh;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);

    padding:40px;
    display: flex;
    flex-direction:column;
    
    > h1{
        margin-bottom:30px;
        margin-top:60px;
        font-weight:800;
        color:#ffffff;
        font-size:1.5rem;
    }

    > a{
        text-decoration:none;
        margin:10px 0;
        color:rgba(256,256,256,0.8);
        font-weight:500px;
        font-family:arial;

        &:hover{
            font-weight:600;
            color:#ffffff;
        }
    }

    @media screen and (max-width:600px){
        width: 100%;
        padding:20px;
        position:relative ;
        height: 400px;
    }

`

export const QueryContainer = styled.div`
    width:70%;
    position:absolute;
    right:0;
    top:0;
    padding:50px;

    h1{
        font-size:1.5rem;
        margin-bottom:15px;
        padding-top:80px;
        font-weight:800;
        font-family:arial;
        
    }
    @media screen and (max-width:600px){
        width: 100%;
        padding:20px;
        position:relative;
    }

`

export const Query = styled.div`
    max-width:900px;
    min-width:250px;
    margin-bottom:15px;
    h2{
        font-weight:600;
        margin-bottom:10px;
        font-size:1.25rem;
    }
    p{
        margin-left:15px;
    }
`