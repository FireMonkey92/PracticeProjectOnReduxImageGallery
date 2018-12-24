import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getImages } from '../actions'
import Slider from '../components/Slider'


import Reveal from 'react-reveal';
import 'animate.css/animate.css';

// const imageLink = 'https://picsum.photos/g/300/200/?image='
const API300x200 = 'http://www.json-generator.com/api/json/get/cgcnszmdbC?indent=2';
const local = 'http://localhost:3004/imageIndexs';
// const github = 'https://my-json-server.typicode.com/FireMonkey92/PracticeProjectOnReduxImageGallery/imageIndexs';



class ImageGalery extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.props.getImages();
    }
    renderModal = () => {
        return (
            <div>
                <Reveal effect='fadeInUp'>
                    <div className="modal bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center">Slide Images</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <Slider slides={this.props.images}></Slider>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        )
    }

    goToSlide = (index) => {
        // debugger
        // var slider = document.getElementsByClassName('map');
        // slider[0].slick.slickGoTo(parseInt(index));
    }

    doLike = (likes,index) =>{
        //debugger
        console.log('perfoming likes '+likes + " on id=  "  + index);
     
            fetch(`${local}/${index}` , {
                method: 'PATCH',
                headers: {
                    'Accept' : 'application/json',
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({likes: likes + 1})
            }).then(()=>{
                this.props.getImages();
                console.log('Like Succeess..!!!')
            })
       
    }

    doDisLike = (dislikes,index) =>{
        console.log('perfoming dislikes '+dislikes + " on id= "  + index);
       
        fetch(`${local}/${index}` , {
            method: 'PATCH',
            headers: {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({dislikes: dislikes + 1})
        }).then(()=>{
            this.props.getImages();
            console.log('DisLike Succeess..!!!')
        })
       
    }


    renderImages = ({ list }) => {
        if (list) {
            return list.map((item) => {
                return (
                    <Reveal effect='animated fadeInUp' key={item.id}>
                        <div className="image_items col-lg-3 col-md-4 col-sm-6">
                            <div className="d-block mb-4 h-100">
                                <img data-toggle="modal" onClick={() => this.goToSlide(item.id)} data-target=".bd-example-modal-lg" className="img-fluid img-thumbnail" src={`${item.image}${item.imageid}`} alt='Not Found' />
                                <div className='bottomBar'>
                                    <div className='like' onClick={()=>this.doLike(item.likes,item.id)}>
                                        <i className="fas fa-heart"></i>{item.likes}
                                    </div><div className='dislike' onClick={()=>this.doDisLike(item.dislikes,item.id)}>
                                        <i className="fas fa-thumbs-down"></i>{item.dislikes}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )
            })
        }
    }
    render() {
        return (
            <div className='container'>

                <h1 className="my-4 text-center">Thumbnail Gallery</h1>
                <div className="image_cotainer row text-center">
                    {this.renderImages(this.props.images)}
                </div>
                {this.renderModal()}
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

    return bindActionCreators({ getImages }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageGalery);