import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import WeatherForm from '../WeatherForm/WeatherForm';
import WeatherResult from '../WeatherResult/WeatherResult';
import OpenWeatherMap from '../../api/OpenWeatherMap';





export default class Main extends Component {



  constructor(props){
    super(props);
    this.state = {
      isLoaded: false
    }
  }



  handelSearch = (location) =>{
      OpenWeatherMap.getTemp(location).then(result=>{
        console.log(result);
        this.setState({
          data: result,
          isLoaded: true
        });
      });
    }




   renderResult(){
    if(this.state.isLoaded === true){
      return (
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
              <WeatherResult data={this.state.data}/>
          </div>
        </div>

      );
    }
  }

  render() {
    return (
      <div className="container">
          <Nav/>
          <div className="row">
            <h1>React Weather Application</h1>
          </div>
          <WeatherForm onSearch={this.handelSearch.bind(this)}/>
          {this.renderResult()}
      </div>

    );
  }
}
