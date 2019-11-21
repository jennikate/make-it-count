import React from 'react'


class PostcodeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      postcode: ''
    }
  }

  handleUpdate(e) {
    console.log(e.target.value)
    this.setState = e.target.value
  }

  render() {
    return (
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label' htmlFor='postcode' >Postcode</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <p className='control'>
              <input className='input' type='text' id='postcode' onChange={(e) => this.handleUpdate(e)}/>
            </p>
          </div>
        </div>
        <button className='button'>Go</button>
      </div>
    )
  }
}


export default PostcodeSearch