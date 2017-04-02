import React ,{Component,PropTypes} from 'react';

export default class  WeatherForm extends Component{

    onType =() =>{
      // console.log(this.refs.location.value);
    }
    formSubmit = (e)=> {
        e.preventDefault();
        // console.log(this.refs.location.value);
        this.props.onSearch(this.refs.location.value);
        this.refs.location.value='';
    }
    render(){
      return(
        <div className="container">
          <form onSubmit={this.formSubmit.bind(this)}>
            <div className="form-group">
              <input onKeyUp={this.onType.bind(this)} ref="location" type="text" className="form-control" placeholder="Example input"/>
            </div>
             <button  type="submit" className="btn btn-default">Submit</button>
          </form>
        </div>
      );
    }
}

WeatherForm.propTypes = {
  onSearch: PropTypes.func.isRequired
}
