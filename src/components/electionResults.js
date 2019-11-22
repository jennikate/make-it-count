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

  render() {
    
    console.log(Array.isArray(this.state.electionResults[0].constituency))
    console.log(this.state.electionResults[0].constituency.label._value)
    console.log(this.state.electionResults[0].resultOfElection)
    console.log(this.state.electionResults[0].electorate)
    console.log(this.state.electionResults[0].majority)
    console.log(this.state.electionResults[0].turnout)
    return (
      <div>
        hi
      </div>
    )
  }

}

export default ElectionResults