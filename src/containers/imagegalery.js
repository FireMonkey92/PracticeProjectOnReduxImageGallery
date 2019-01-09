import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getImages, sortByLikeAsc, sortByLikeDesc, sortByDisLikeAsc, sortByDisLikeDesc } from '../actions';



import Slider from 'react-slick'

import Reveal from 'react-reveal';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import 'animate.css/animate.css';
 
// const imageLink = 'https://picsum.photos/g/300/200/?image='
// const API300x200 = 'http://www.json-generator.com/api/json/get/cgcnszmdbC?indent=2';
const local = 'http://localhost:3004/imageIndexs';
const github = 'https://my-json-server.typicode.com/FireMonkey92/PracticeProjectOnReduxImageGallery/imageIndexs';



class ImageGalery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            updateCount: 0,
            sortingIndex: 0
        };
    }

    componentDidMount() {
        this.props.getImages();
    }


    doLike = (likes, index, sortIndex) => {


        fetch(`${github}/${index}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ likes: likes + 1 })
        }).then(res => res.json()).then(
            () => {
                if (sortIndex === 0) {
                    this.props.getImages();
                }
                if (sortIndex === 1) {
                    this.props.sortByLikeAsc();
                }
                if (sortIndex === 2) {
                    this.props.sortByLikeDesc();
                }
                if (sortIndex === 3) {
                    this.props.sortByDisLikeAsc();
                }
                if (sortIndex === 4) {
                    this.props.sortByDisLikeDesc();
                }
            }
        );


    }

    doDisLike = (dislikes, index, sortIndex) => {

        fetch(`${github}/${index}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ dislikes: dislikes + 1 })
        }).then(res => res.json()).then(
            () => {
                if (sortIndex === 0) {
                    this.props.getImages();
                }
                if (sortIndex === 1) {
                    this.props.sortByLikeAsc();
                }
                if (sortIndex === 2) {
                    this.props.sortByLikeDesc();
                }
                if (sortIndex === 3) {
                    this.props.sortByDisLikeAsc();
                }
                if (sortIndex === 4) {
                    this.props.sortByDisLikeDesc();
                }
            }
        );
    }


    renderImages = ({ list }) => {
        if (list) {
            return list.map((item, index) => {
                return (
                    <Reveal effect='animated fadeIn' key={item.id}>
                        <div className="image_items col-lg-3 col-md-4 col-sm-6">
                            <div className="d-block mb-4 h-100">
                                <img data-toggle="modal" data-target=".bd-example-modal-lg" onClick={e => { this.slider.slickGoTo(index);
                                                                                                                                                                                              
                                }} className="img-fluid img-thumbnail" src={`${item.image}${item.imageid}`} alt='Not Found' />
                                <div className='bottomBar'>
                                    <div className='like' onClick={() => {
                                        const sortIndex = this.state.sortingIndex;
                                        this.doLike(item.likes, item.id, sortIndex)
                                    }}>
                                        <RubberBand><i className="fas fa-heart"></i></RubberBand>{item.likes}
                                    </div><div className='dislike' onClick={() => {
                                        const sortIndex = this.state.sortingIndex;
                                        this.doDisLike(item.dislikes, item.id, sortIndex)
                                    }}>
                                        <RubberBand><i className="fas fa-thumbs-down"></i></RubberBand>{item.dislikes}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )
            })
        }
    }


    generateSlides = ({ list }) => {
        //console.log(list);
        const sliderSettings = {
            dots: false,
            infinite: true,
            // fade: true,
            swipeToSlide: true,
            speed: 600,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            beforeChange: (current, next) => this.setState({ slideIndex: next })
        }
        if (list) {
            return (
                <div>
                    <Slider ref={slider => (this.slider = slider)} {...sliderSettings} >
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
            <div>
                <div className='container'>
                    <div>
                        <Zoom>
                            <div className="modal bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title text-center">Slide Images</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className='map'>
                                            {this.generateSlides(this.props.images)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                    <h1 className="my-4 text-center">Thumbnail Gallery</h1>
                    <hr />
                    <div className='sortingBar'>
                        <div className="btn-group">
                            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sort Images
                            </button>
                            <div className="dropdown-menu">
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        sortingIndex: 1
                                    });
                                    this.props.sortByLikeAsc();
                                }}>Ascending by Likes</div>
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        sortingIndex: 2
                                    })
                                    this.props.sortByLikeDesc()
                                }} >Descending by Likes</div>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        sortingIndex: 3
                                    })
                                    this.props.sortByDisLikeAsc()
                                }} >Ascending by Dislikes</div>
                                <div className="dropdown-item" onClick={() => {
                                    this.setState({
                                        sortingIndex: 4
                                    });
                                    this.props.sortByDisLikeDesc()
                                }} >Descending by Dislikes</div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="image_cotainer row text-center">
                        {this.renderImages(this.props.images)}
                    </div>
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        images: state.images
    }
}
function mapDispatchToProps(dispatch) {

    return bindActionCreators({ getImages, sortByLikeAsc, sortByLikeDesc, sortByDisLikeAsc, sortByDisLikeDesc }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageGalery);