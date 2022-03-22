import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Part=({arr , name , ide})=>{ 

    const renderImages = ()=>{
        return (
            arr.map((img , index)=>{
                return(
                    <div key={index}>
                        <img className="image" src={img} alt={name}/>
                    </div>
                )
            })
        )
    }

    return (
            <ModuleWrapper id={ide} className="world"> 
                <h1> {name} </h1>
                <StyledCarousel className='hello '>
                    {renderImages()}
                </StyledCarousel>
            </ModuleWrapper>
    )
};

export default Part;

const ModuleWrapper = styled.div`
    /* display : flex;
    align-items: center;
    justify-content : center; */
    margin-left : 128px;

    > h1{
        margin-top : 100px;
        margin-bottom : 15px;
        text-align: center;
        text-transform: uppercase;
        font-family: cursive;
    }
    @media (max-width : 700px){
        margin-left : 0;
    }

    @media (max-width : 500px){
        transform: scale(1.2);
    }
`;

const StyledCarousel = styled(Carousel)`
    .image{
        height : 500px;
    }

    > .carousel-slider{
        width : 65% !important;
        margin: auto;
    }
    .carousel{
        .thumbs-wrapper{
            display : none;
        }

        .slide {
            img {
                height: 100%;
            }
        }

    }
`

