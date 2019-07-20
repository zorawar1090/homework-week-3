import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import ModelDetails from './ModelDetails'

const data = [
  {
    name: "Ivel Z3",
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  {
    name: "Bally Astrocade",
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  {
    name: "Sord M200 Smart Home Computer",
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  {
    name: "Commodore 64",
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
]

class Select extends React.Component {

  updateSelection = (event) => {
    this.setState({
      name: event.target.value
    })
  }

   handleClick = (name) => {
     const action = {type: 'ADD_MODEL', payload:this.state}
     store.dispatch(action)
  }


  render() {
    return (
      <div>
        <select onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {data.map(item => {
            return (
              <option key={item.year} value={item.name}>
                {item.name} ({item.year})
            </option>
            )
          })}
        </select>
        <button onClick={this.handleClick}>Add</button>
        <ModelDetails name={this.props.name}/>
      </div>
    )
  }
}



const MapStateToProps = (state) => {
  if(state.length > 0){
    return {name: state[state.length-1].name}
  }
  else{
    return {}
  }
} 

export default connect(MapStateToProps)(Select)