import React from 'react'
import axios from 'axios'


class ElectionResults extends React.Component {
  constructor() {
    super()
    this.state = {
      electionResults: [
        {
          constituency: {
            label: {}
          }
        }
      ]
    }
  }

  componentDidMount() {
    axios.get('http://lda.data.parliament.uk/electionresults.json?_view=Elections&_pageSize=1000&_page=0&electionId=730039')
      .then(resp => this.setState({ electionResults: resp.data.result.items }))
      .catch(err => console.log(err.response.data.error))
  }

  getThisConstituency(elem) {

    const i = this.state.electionResults.findIndex(p => p.constituency.label._value === elem) < 0 ? null : this.state.electionResults.findIndex(p => p.constituency.label._value === elem) 
    console.log('index', i)
  }


  render() {

    console.log(this.getThisConstituency(this.props.constituencyName))
    // console.log(Array.isArray(this.state.electionResults[0].constituency))
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