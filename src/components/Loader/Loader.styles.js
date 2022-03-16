import styled from "styled-components";

export const LoaderContainer = styled.div`
    width:100%;
    height:100vh;
    margin:0;
    padding:0;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#000000;
    .wrapper{
        position:relative;
        width:150px;
        height:150px;
        margin:0;
        padding:0;
    }
    .img-box{
        position:absolute;
        padding:0;
        margin:0;
    }
    .box-1{
        top:25px;
        left:25px;
        width:100px;
        height:100px ;
        animation:rotate 1.5s infinite linear;
    }
    .box-2{
        top:45px;
        left:45px;
        width:60px;
        height:60px;
        animation:rotate 1.5s infinite linear reverse;
    }
    .box-3{
        top:35px;
        left:35px;
        width:80px;
        height:80px;
    }
    .box-4{
        width:80px;
        height:80px;
        top:35px;
        left:35px;
    }
    img{
        width:100%;
        height:100%;
    }
    

    @keyframes rotate{
        0%{
            transform:rotateZ(0deg) ;
            
        }
        100%{
            transform: rotateZ(360deg) ;
        }
    }
`