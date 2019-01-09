import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImages } from '../actions';


import Slider from "react-slick";

class imageSlider extends Component {

    componentDidMount() {
    }

    componentWillMount() {
        this.props.getImages();
    }

    generateSlides1 = ({ list }) => {
        if (list) {
            return (
                <div>

                    <Slider
                        customPaging={function (i) {
                            return (
                                <span>
                                    <img alt='X' src={`https://picsum.photos/40/20/?image=${list[i].imageid}`} />
                                </span>
                            )
                        }}
                        dots={true}
                        dotsClass={"slick-dots slick-thumb"}
                        infinite={true}
                        fade={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {
                            list.map((item) => {
                                return (
                                    <div key={item.id} data-index={item.id}>
                                        <div className='slider-items' style={{ background: `url('https://picsum.photos/1080/720/?image=${item.imageid}') no-repeat` }}>
                                            <div className='caption'>
                                                <div className='topBar'>
                                                    <div className='like'>
                                                        <i className="fas fa-heart"></i>{item.likes}
                                                    </div><div className='dislike'>
                                                        <i className="fas fa-thumbs-down"></i>{item.dislikes}
                                                    </div>
                                                </div>
                                                <h5>Author : {item.author}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            )
        }
    }

    render() {
        return (
            <div className='container-fluid text-center' >
                <h2>Slide Go to: </h2>
                {this.generateSlides1(this.props.images)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        images: state.images
    }
}
function mapDispatchToProps(dispatch) {

    return bindActionCreators({ getImages }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(imageSlider);