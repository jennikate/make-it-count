import React from 'react'
import axios from 'axios'


class Constituency extends React.Component {
  constructor() {
    super()
    this.state = {
      candidates: [],
      persons: [],
      test: 'hithest'
    }
  }

  componentDidMount() {
    const constituencyFormatted = this.props.match.params.id.toLowerCase().split(' ').join('-')
    axios.get(`https://candidates.democracyclub.org.uk/api/next/ballots/parl.${constituencyFormatted}.2019-12-12/`)
      .then(resp => this.setState({ candidates: resp.data.candidacies }, () => this.getCandidate2()))
      .catch(err => console.log(err.response.data.error))

  }

  getCandidate2() {
    const arr = this.state.candidates
    const currentArr = [...this.state.persons]

    arr.forEach(element => {
      axios.get(element.person.url)
        .then(resp => currentArr.push(resp.data))
    })
    this.setState({ persons: currentArr })

  }


  render() {

    console.log(this.state.persons)

    return (
      <div>hi</div>
    )
  }








}

export default Constituency