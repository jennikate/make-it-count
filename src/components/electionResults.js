import React from 'react'
import axios from 'axios'


class ElectionResults extends React.Component {
  constructor() {
    super()
    this.state = {
      electionResults: []
    }
  }

  componentDidMount() {
    axios.get('http://lda.data.parliament.uk/electionresults.json?_view=Elections&_pageSize=1000&_page=0&electionId=730039')
      .then(resp => this.setState({ electionResults: resp.data.result.items }))
      .catch(err => console.log(err.response.data.error))
  }

  getThisConstituency(elem) {

    const i = this.state.electionResults.findIndex(p => p.constituency.label._value === elem) < 0 ? null : this.state.electionResults.findIndex(p => p.constituency.label._value === elem)
    // console.log('index', i)
    return i
  }


  render() {
    if (this.state.electionResults.length === 0) {
      return <h1>...Loading</h1>
    }

    return (
      <section className='section'>
        <div className='container'>
          <h1 className='title'>2017 General Election Results</h1>
          <h2 className='subtitle'>Result: {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].resultOfElection}</h2>

          <div className='columns'>
            <div className='column'>
              chart
            </div>
            <div className='column'>
              <div>
                Electorate: {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].electorate}
              </div>
              <div>
                Turnout: {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].turnout}
              </div>
              <div>
                Majority: {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].majority}
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }

}

export default ElectionResults