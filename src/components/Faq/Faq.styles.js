import styled from "styled-components";

export const FaqContainer = styled.div`
    position: relative;
    padding:0;
    padding:0;
    width:100%;
    font-family: 'Inter', sans-serif;
    font-weight:400;
`

export const SideBar = styled.div`
    position:fixed;
    top:0;
    left:0;
    margin:0;
    padding: 0;
    width:30%;
    height:100vh;
    /* background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%); */
    background: #16222A;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #3A6073, #16222A);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #3A6073, #16222A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    font-family: 'Inter', sans-serif;
    padding:40px;
    display: flex;
    flex-direction:column;
    
    > h1{
        margin-bottom:20px;
        margin-top:80px;
        font-weight:900;
        color:#ffffff;
        font-size:1.5rem;
        @media screen and (max-width:600px){
            margin-top:100px;
        }
    }

    > a{
        text-decoration:none;
        margin:10px 0;
        color:rgba(256,256,256,0.8);
        font-weight:400;

        &:hover{
            font-weight:600;
            color:#ffffff;
        }
        @media screen and (max-width:600px){
            border-bottom:2px solid #dddd;
        }
    }

    @media screen and (max-width:600px){
        width: 100%;
        padding:20px;
        position:relative ;
        height: 500px;
    }

`

export const QueryContainer = styled.div`
    width:70%;
    position:absolute;
    right:0;
    top:0;
    padding:50px;

    h1{
        font-size:2rem;
        margin-bottom:15px;
        padding-top:80px;
        font-weight:900;
        
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
        font-size:1.2rem;
        font-weight:600;
    }
    p{
        margin-left:15px;
        font-weight:400;
    }
    p a{
        text-decoration:none;
    }
`