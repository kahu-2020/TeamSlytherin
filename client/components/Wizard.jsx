import React from 'react'


class Wizard extends React.Component {
  constructor(props) {
    super(props)




  }

  render() {
    console.log(this.props)
    return (

      <div className='wizard'>


        <img className="image" src={this.props.image} />

        <div className="text">

          <h3> Name: {this.props.name}</h3>
          <h3>Spell: {this.props.spell}</h3>
          <h3>Wand: {this.props.wand}</h3>
        </div>

      </div >



    )
  }
}

export default Wizard