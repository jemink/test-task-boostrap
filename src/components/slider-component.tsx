import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    {
        id: 0,
        url: 'https://i.pinimg.com/236x/2c/1d/55/2c1d5578da20ceabc4a28343769a5c91--dark-teal-teal-blue.jpg',
        name: 'test'
    },
    {id: 1, url: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg', name: 'test'},
    {id: 2, url: 'https://image.shutterstock.com/image-photo/country-road-600w-628141070.jpg', name: 'test'},
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
        name: 'test'
    }];

interface Props {
}

interface State {
    slideIndex: number
}

class SliderComponent extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            slideIndex: 0
        };
    }

    afterChangeHandler = (slide: any) => {
        this.setState({slideIndex: slide})
    }
    slider: any = null

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            slickGoTo: (index: any, dontAnimate: boolean) => {
            }
        };
        const {slideIndex} = this.state
        return (
            <div className="slider" style={{marginTop: '0px'}}>
                <div>
                    <div className="slider">
                        <Slider {...settings}
                                afterChange={this.afterChangeHandler}
                                ref={slider => (this.slider = slider)}
                        >
                            {
                                images.map((data, index) => (
                                    <div className="slider-thumb-main">
                                        <img src={data.url} height="200px"/>
                                    </div>
                                ))
                            }

                        </Slider>
                    </div>
                    <div className="d-flex justify-content-between mobile-none mt-2">
                        {
                            images.map((data, index) => (
                                <div className={data.id === slideIndex && "slider-thumb active" || "slider-thumb"}>
                                    <img
                                        src={data.url}
                                        // onClick = {() => settings.slickGoTo(data.id, false)}
                                        onClick={() => this.slider.slickGoTo(data.id)}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SliderComponent;