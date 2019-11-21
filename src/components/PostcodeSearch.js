import React from 'react'
import axios from 'axios'


class PostcodeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      postcode: '',
      result: {
        parliamentary_constituency: ''
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
      .then(resp => this.setState({ parliamentary_constituency: resp.data.result.parliamentary_constituency }))
      .catch(err => this.setState({ errors: err.response.data.error }))
  }

  render() {
    console.log(this.state.parliamentary_constituency)
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label' htmlFor='postcode'>Postcode</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control'>
              <input className='input' name='postcode' type='text' id='postcode' onChange={(e) => this.handleUpdate(e)} />
              {this.state.errors && <small className='help is-danger'>
                {this.state.errors}
              </small>}
            </p>
          </div>
        </div>
        <button className='button' onClick={(e) => this.handleSubmit(e)}>Go</button>
      </div>
    )
  }
}


export default PostcodeSearch