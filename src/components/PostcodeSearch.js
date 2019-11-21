import React from 'react'
import axios from 'axios'


class PostcodeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      postcode: '',
      result: {
        parliamentary_constituency: ''
      }
    }
  }

  handleUpdate(e) {
    this.setState({ postcode: e.target.value.toLowerCase().split(' ').join('') })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.postcode)
    axios.get(`http://api.postcodes.io/postcodes/${this.state.postcode}`)
      .then(resp => this.setState({ parliamentary_constituency: resp.data.result.parliamentary_constituency }))
  }

  render() {
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label' htmlFor='postcode'>Postcode</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control'>
              <input className='input' type='text' id='postcode' onChange={(e) => this.handleUpdate(e)} />
            </p>
          </div>
        </div>
        <button className='button' onClick={(e) => this.handleSubmit(e)}>Go</button>
      </div>
    )
  }
}


export default PostcodeSearch