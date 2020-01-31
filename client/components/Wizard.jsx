import React from 'react'


class Wizard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible:false
    }

    this.mouseEnter = this.mouseEnter.bind(this)

  }


    mouseEnter(event){
      this.setState({isVisible:true});
    }

      mouseLeave(event) {
      this.setState({isVisible:false});
      }


  render() {
    console.log(this.props)
    return (
      <div className='wizard' class='photo' onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <img src={this.props.image} />
        {this.state.isVisible ? 
          <div>
            <h3> Name: {this.props.name}</h3>
            <br />
            <h3>Spell: {this.props.spell}</h3>
            <h3>Wand: {this.props.wand}</h3>
          </div> :null}
        )}
      </div>
    )
  }
}



export default Wizard