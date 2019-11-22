import React from 'react'
import axios from 'axios'
import Footer from './Footer'


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
    return i
  }


  render() {
    if (this.state.electionResults.length === 0) {
      return <h1>...Loading</h1>
    }

    const thisElectorate = this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].electorate
    const thisTurnout = this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].turnout
    const thisTurnoutRate = (thisTurnout / thisElectorate) * 100
    const thisNonVoter = ((thisElectorate - thisTurnout) / thisElectorate) * 100

    return (
      <>
      <section className='hero is-fullheight hero-colored'>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title'>2017 General Election Results</h2>
            <h2>Result: <span>{this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].resultOfElection}</span></h2>

            <div className='columns is-centered'>
              <div className='column is-one-quarter' id='left-box'>

                <small className='chart-label'>Voter Turnout</small>
                <div className="pie" style={{ '--segment1': thisTurnoutRate, '--segment2': thisNonVoter }}></div>
              </div>
              <div className='column is-one-quarter' id='right-box'>
                <div>
                  <span>Majority:</span> {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].majority}
                </div>
                <div>
                  <span>Electorate:</span> {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].electorate}
                </div>
                <div>
                  <span>Turnout:</span> {this.state.electionResults[this.getThisConstituency(this.props.constituencyName)].turnout}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </>
    )
  }

}

export default ElectionResults