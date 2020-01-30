import React from 'react'


class Wizard extends React.Component {
  constructor(props) {
    super(props)

    


  }


  render() {
    console.log(this.props)
    return (

      <div className='wizard' class="photo">
        <img src={this.props.image} />
        <h3> Name: {this.props.name}</h3>
        <br />
        <h3>Spell: {this.props.spell}</h3>
        <h3>Wand: {this.props.wand}</h3>

      </div >



    )
  }
}

export default Wizard