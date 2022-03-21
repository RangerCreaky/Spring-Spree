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
                        <p className="legend"> {name} </p>
                    </div>
                )
            })
        )
    }

    return (
            <ModuleWrapper id={ide} className="world"> 
                <StyledCarousel className='hello '>
                    {renderImages()}
                </StyledCarousel>
            </ModuleWrapper>
    )
};

export default Part;

const ModuleWrapper = styled.div`
    display : flex;
    align-items: center;
    justify-content : center;
    width : 100%;
    height: 100vh;
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


    }
`

