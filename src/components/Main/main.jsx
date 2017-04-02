import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import WeatherForm from '../WeatherForm/WeatherForm';
import WeatherResult from '../WeatherResult/WeatherResult';
import axios from 'axios';



const apiUrl = "http://api.openweathermap.org/data/2.5/weather?appid=4cb8e35d1e36c4f6fb29f7ed2c4b878c&units=metric";




export default class Main extends Component {



  constructor(props){
    super(props);
    this.state = {
      isLoaded: false
    }
  }



  handelSearch = (location) =>{
      var encodedLocation = encodeURIComponent(location);
      var url= apiUrl+"&q="+encodedLocation;
      axios.get(url).then(res=>{
        let newLocation=location;
        let newTemp=res.data.main.temp;
        this.setState({
          location:newLocation,
          temp:newTemp,
          isLoaded: true
        });
      });
    }




   renderResult(){
    if(this.state.isLoaded === true){
      return (<WeatherResult location={this.state.location} temp={this.state.temp}/>);
    }
  }

  render() {
    return (
      <div className="container">
          <Nav/>
          <div>
            <h1>React Weather Application</h1>
          </div>
          <WeatherForm onSearch={this.handelSearch.bind(this)}/>
          {this.renderResult()}
      </div>

    );
  }
}
