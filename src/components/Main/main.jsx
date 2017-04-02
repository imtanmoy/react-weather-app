import React, { Component } from 'react';
import Nav from '../nav/nav';
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
      console.log(location);
      var encodedLocation = encodeURIComponent(location);
      var url= apiUrl+"&q="+encodedLocation;
      axios.get(url).then(res=>{
        this.setState={
          location:location,
          temp:res.data.main.temp,
          isLoaded: true
        }
        console.log(res.data.main.temp);

      });
    }


  render() {
      var {isLoaded, location, temp}=this.state;
      function renderResult(){
      if(isLoaded){
        console.log(location);
        console.log(temp);
        console.log(isLoaded);
        return <h3>Fetching Weather</h3>;
        }else if (temp && location) {
          console.log(temp);
          console.log(location);
          console.log(temp);
          console.log(isLoaded);
          return <WeatherResult location={location} temp={temp}/>;
        }else {
          return "";
        }
      }

    return (
      <div className="container">
          <Nav/>
          <div>
            <h1>React Weather Application</h1>
          </div>
          <WeatherForm onSearch={this.handelSearch.bind(this)}/>
          {renderResult()}
      </div>

    );
  }
}
