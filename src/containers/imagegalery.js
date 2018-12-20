import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import slick from 'react-slick';
import { getImages } from '../actions'
import Slider from '../components/Slider'


// const imageLink = 'https://picsum.photos/g/300/200/?image='
class ImageGalery extends Component {
    componentWillMount() {
        this.props.getImages();

    }
    renderModal = () => {
        return (
            <div>
                <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
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
            </div>
        )
    }

    goToSlide=(index)=>{
        // debugger
        // var slider = document.getElementsByClassName('map');
        // slider[0].slick.slickGoTo(parseInt(index));
    }

    renderImages = ({ list }) => {
        if (list) {
            return list.map((item) => {
                return (
                    <div className="image_items col-lg-3 col-md-4 col-sm-6" key={item.id}>
                        <div className="d-block mb-4 h-100">
                            <img data-toggle="modal" onClick={()=>this.goToSlide(item.id)} data-target=".bd-example-modal-lg" className="img-fluid img-thumbnail" src={`${item.image}${item.imageid}`} alt='Image Not Found' />
                        </div>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className='container'>

                <h1 className="my-4 text-center">Thumbnail Gallery</h1>
                
                <Slider slides={this.props.images}></Slider>
                
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