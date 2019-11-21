import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Constituency from './Constituency'


class PostcodeSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      postcode: ''
    }
  }

  handleUpdate(e) {
    this.setState({ postcode: e.target.value.toLowerCase().split(' ').join('') })
    this.setState({ errors: '' })
  }



  

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
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

          <Link
            to={{
              pathname: '/constituency',
              state: this.state
            }}>
            Go
          </Link>

        </div>
      </form>
    )
  }
}


export default PostcodeSearch



// .then(this.setState({ constituencyId: this.state.parliamentaryConstituency.toLowerCase().split(' ').join('-') }))