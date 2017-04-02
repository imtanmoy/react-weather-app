import React ,{Component,PropTypes} from 'react';
import './style.css';
import img from '../../assets/icons/thunder.svg';

export default class WeatherResult extends Component{

renderDay(){
  var d = new Date();
  var n = d.getDay();
  let days=['Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturaday', 'Monday'];
  return days[n-1];
}

renderTime(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  if (h>12) {
    h-=12;
    return `${h}:${m} PM`
  }else {
    return `${h}:${m} AM`
  }
}

  render(){

      return(
            <div className="card">
              <div className="container">
                <div className="city-name">{this.props.data.name}</div>
                <div className="time">{this.renderDay()} {this.renderTime()}</div>
                <div className="wstatus">{this.props.data.weather[0].main}</div>
                <div className="row">
                    <div className="weather-icon">
                      <img alt="icon" src={img}/>
                      <div className="weather-text">{this.props.data.main.temp}&#176; C</div>
                    </div>
                </div>
              </div>
            </div>
      );
  }
}


WeatherResult.propTypes = {
  data: PropTypes.object.isRequired
}
