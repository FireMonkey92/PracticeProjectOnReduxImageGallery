import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  getAllCountries } from '../actions/index'
import { bindActionCreators } from 'redux';


// import HighChartsWeather from  '../components/HighChart';


class WeatheDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countrySelected: false,
            selectedCountry: ''
        }
    }


    componentDidMount(){
        this.props.getAllCountries();
    }

    selectCountry = (selected) => {
        this.setState({
            countrySelected: true,
            selectedCountry: selected
        })

        
    }

    renderCountries = ({countries} ) => {

        //console.log(countries);
        if (countries) {
           // const uniqueCountries = [...new Set(cities.map(item => item.country))];
            return countries.map((item) => {
                return (
                    <div key={item.code} >
                        <button onClick={() => this.selectCountry(item)} className="dropdown-item" type="button">{item.name}</button>
                    </div>
                )
            })
        }
    }


    // renderCities = ({ cities },selectedCountry) => {
    //     if (cities && selectedCountry ) {

    //         const cityList = cities.filter(city => city.country === selectedCountry);
    //         cityList.sort((a, b) => a.name.localeCompare(b.name))
    //         return cityList.map((item, index) => {
    //             return (
    //                 <div key={index} >
    //                     <button className="dropdown-item" type="button">{item.name}</button>
    //                 </div>
    //             )
    //         });
    //     }
    // }

    render() {
        const weather = this.props.countries;
        //const selectedCountry = this.state.selectedCountry;

        return (
            <div>
                <div className='text-center'>
                    <h3 className='pt-4 pb-4'>Weather forcast</h3>
                    <div className="btn-group">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Plesase Select country
                    </button>
                        <div className="dropdown-menu dropdown-menu">
                            {this.renderCountries(weather)}
                        </div>
                    </div>

                    <br />
                    <div className={this.state.countrySelected ? 'btn-group mt-4' : 'd-none'}  >
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Plesase Select City
                    </button>
                        <div className="dropdown-menu dropdown-menu">
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    //console.log(state)
    return {
        countries : state.weather
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllCountries }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatheDetails);
