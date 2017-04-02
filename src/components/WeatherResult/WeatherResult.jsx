import React ,{Component,PropTypes} from 'react';

export default class WeatherResult extends Component{

  render(){

      return(
          <div >
            <h1>Weather forecast :{this.props.temp}&#176; C in {this.props.location}</h1>
          </div>
      );
  }
}


WeatherResult.propTypes = {
  location: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
}
