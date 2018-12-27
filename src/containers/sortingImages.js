import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sortByLikeAsc, sortByLikeDesc, sortByDisLikeAsc, sortByDisLikeDesc } from '../actions/index'


class SortingDropDown extends Component {
    render() {
        return (
            <div className='sortingBar'>
            <div className="btn-group">
                <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort Images
                    </button>
                <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => { this.props.sortByLikeAsc() }}>Ascending by Likes</div>
                    <div className="dropdown-item" onClick={() => { this.props.sortByLikeDesc() }} >Descending by Likes</div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={() => { this.props.sortByDisLikeAsc() }} >Ascending by Dislikes</div>
                    <div className="dropdown-item" onClick={() => { this.props.sortByDisLikeDesc() }} >Descending by Dislikes</div>
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

    return bindActionCreators({ sortByLikeAsc, sortByLikeDesc, sortByDisLikeAsc, sortByDisLikeDesc }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SortingDropDown);
