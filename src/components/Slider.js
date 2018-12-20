import React from 'react';
import Slider from 'react-slick';

export const sliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 505,
    slideToShow: 1,
    slideToScroll: 1,
    slickGoTo: 10
}

export const generateSlides = ({slides}) => {
    console.log(slides);
    if (slides.list) {
        return (
            <Slider {...sliderSettings} >
                {
                    slides.list.map((item) => {
                        // console.log(item);
                        return (
                            <div key={item.id}>
                                <div className='slider-items' style={{ background: `url('https://picsum.photos/1080/720/?image=${item.imageid}') no-repeat`}}>
                                    <div className='caption'>
                                        <h5>{item.author}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
        )
    }
}

const SliderClass = (props) => {
    // console.log(props);
    return (
        <div className='map'>
            {generateSlides(props)}
        </div>
    )
}

export default SliderClass;