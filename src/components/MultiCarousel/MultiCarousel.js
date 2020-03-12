import React from "react";
import './MultiCarousel.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 9,
        slidesToSlide: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


class MultiCarousel extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            carouselItems:[
                {id:1, title: 'Все как он любит', src_img: './img/1.jpg'},
                {id:2, title: 'Плитка', src_img: './img/2.jpg'},
                {id:3, title: 'tint', src_img: './img/3.jpg'},
                {id:4, title: 'Прованс', src_img: './img/4.jpg'},
                {id:5, title: 'MindStorm', src_img: './img/5.jpg'},
                {id:6, title: 'Kebab', src_img: './img/6.jpg'},
                {id:7, title: 'Coffee&Toast', src_img: './img/7.jpg'},
                {id:8, title: 'IL PRIMO', src_img: './img/8.jpg'},
                {id:9, title: 'Wi-Fi', src_img: './img/9.jpg'},
                {id:10, title: 'RobinFood', src_img: './img/10.jpg'},
                {id:11, title: 'Wires', src_img: './img/11.jpg'},
                {id:12, title: 'Парты', src_img: './img/12.jpg'},
                {id:13, title: 'Фото Дром', src_img: './img/13.jpg'},
                {id:14, title: 'Вивальди', src_img: './img/14.jpg'},
                {id:15, title: 'THE BOX', src_img: './img/15.jpg'},
                {id:16, title: 'IT-Light', src_img: './img/16.jpg'},
                {id:17, title: 'Rasskazov', src_img: './img/17.jpg'},
                {id:18, title: 'Кружева', src_img: './img/18.jpg'},
                {id:19, title: 'Рога', src_img: './img/19.jpg'},
                {id:20, title: 'Квартирник', src_img: './img/20.jpg'},
                {id:21, title: 'The Clear', src_img: './img/21.jpg'},
                {id:22, title: 'ZanZara', src_img: './img/22.jpg'},
                {id:23, title: 'Добрый огонь', src_img: './img/23.jpg'},
                {id:24, title: 'D1', src_img: './img/24.jpg'},
            ]
        }
    }
    render() {
        const styles = this.state.carouselItems.src_img;
        return(
            <div className='carouselBlock'>
                <Carousel
                    className='carousel'
                    responsive={responsive}
                    autoPlay={true}
                    autoPlaySpeed={10}
                    swipeable={true}
                    draggable={true}
                    arrows={false}
                    centerMode={true}
                    infinite={true}
                    customTransition="all 1s ease-in-out"
                    transitionDuration={2500}
                    itemClass={styles}

                >
                    {
                        this.state.carouselItems ?
                            this.state.carouselItems.map(item =>
                                <div
                                    key={item.id}
                                    className={'item' + item.id}
                                    style={{ background:`url(${item.src_img})`, backgroundSize: '100% '}}
                                >
                                </div>) : <div></div>
                    }

                </Carousel>
            </div>

        )
    }
}

export default MultiCarousel;
//{styles}

// { backgroundImage:`url(${item.src_img})` }