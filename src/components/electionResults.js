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

    // console.log(this.getThisConstituency(this.props.constituencyName))
    console.log(Array.isArray(this.state.electionResults[1]))
    console.log(typeof this.state.electionResults[1])
    console.log(this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].resultOfElection)
    // console.log(this.state.electionResults)
    // console.log(this.state.electionResults[0].constituency.label._value)
    // console.log(this.state.electionResults[0].resultOfElection)
    // console.log(this.state.electionResults[0].electorate)
    // console.log(this.state.electionResults[0].majority)
    // console.log(this.state.electionResults[0].turnout)

    //we have constituency name

    return (
      <div>
        {this.props.constituencyName}
      </div>
    )
  }

}

export default ElectionResults