import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getImages } from '../actions';


import Slider from "react-slick";


class imageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }
    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    componentWillMount(){
        this.props.getImages();
        console.log('mounted')
    }

    generateSlides1 = ({ list }) => {
        if (list) {
            return (
                <div>
                    <Slider asNavFor={this.state.nav2}
                    ref={slider => (this.slider1 = slider)}
                    slidesToScroll={1} >
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
    generateSlides2 = ({ list }) => {
        if (list) {
            return (
                <div>
                    <Slider asNavFor={this.state.nav1}
                    ref={slider => (this.slider2 = slider)}
                    slidesToShow={3}
                    focusOnSelect={true}
                    swipeToSlide={true}
                    focusOnSelect={true} >
                        {
                            list.map((item) => {
                                return (
                                    <div key={item.id} data-index={item.id}>
                                        <div className='slider-items2' style={{ background: `url('https://picsum.photos/1080/720/?image=${item.imageid}') no-repeat` }}>                             </div>
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
            <div className='container text-center'>
                <h2>Slider Syncing (AsNavFor)</h2>
                <h4>First Slider</h4>
                {this.generateSlides1(this.props.images1)}
                <h4>Second Slider</h4>
                {this.generateSlides2(this.props.images1)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        images1: state.images
    }
}
function mapDispatchToProps(dispatch) {

    return bindActionCreators({ getImages }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(imageSlider);