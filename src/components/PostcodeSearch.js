import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class PostcodeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      postcode: '',
      result: {
        parliamentaryConstituency: ''
      },
      errors: ''
    }
  }

  handleUpdate(e) {
    this.setState({ postcode: e.target.value.toLowerCase().split(' ').join('') })
    this.setState({ errors: '' })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.get(`http://api.postcodes.io/postcodes/${this.state.postcode}`)
      .then(resp => {
        this.setState({ parliamentaryConstituency: resp.data.result.parliamentary_constituency })
        this.props.history.push(`/constituency/${resp.data.result.parliamentary_constituency}`)
      })
      .catch(err => this.setState({ errors: err.response.data.error }))
  }



  render() {
    return (
      <form className='flex-horizontal my-styles' onSubmit={(e) => this.handleSubmit(e)}>
        <label htmlFor='postcode'>Enter postcode</label>
        <input className='input' name='postcode' type='text' id='postcode' onChange={(e) => this.handleUpdate(e)} />
        {this.state.errors && <small className='help is-danger'>
          {this.state.errors}
        </small>}
        <button className="button">Find your candidates</button>
      </form>
    )
  }
}


export default withRouter(PostcodeSearch)

