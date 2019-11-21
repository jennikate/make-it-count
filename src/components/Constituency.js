import React from 'react'
import axios from 'axios'


class Constituency extends React.Component {
  constructor() {
    super()
    this.state = {
      parliamentaryConstituency: '',
      postcode: ''
    }

  }

  componentDidMount() {
    this.setState({
      ...this.props.location.state
    },
    () => {
      axios.get(`http://api.postcodes.io/postcodes/${this.state.postcode}`)
        .then(resp => this.setState({ parliamentaryConstituency: resp.data.result.parliamentary_constituency }))          
        .catch(err => this.setState({ errors: err.response.data.error }))
    }
    )
  }


  render() {
    console.log(this.state)
    return (

      <p>{this.state.parliamentaryConstituency.toLowerCase().split(' ').join('-')}</p>

    )
  }
}


export default Constituency



