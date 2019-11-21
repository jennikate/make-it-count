import React from 'react'
import axios from 'axios'


class Constituency extends React.Component {
  constructor() {
    super()
    this.state = {
      candidates: [],
      persons: []
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
    console.log('currentarr', currentArr)

    arr.forEach(element => {
      currentArr.push(element)
      console.log('currentarrpush', currentArr)
    })
    this.setState({ persons: currentArr })

  }







  render() {
    console.log(this.state.persons)
    return <section className='section'>
      <h1 className='title'>{this.props.match.params.id}</h1>
      <div className='container'>
        <div className='column is-half-mobile is-one-third-tablet is-one-quarter-desktop'>
          {this.state.persons.map((elem, i) => {
            return (
              <div key={i} className="card">
                
                <p>{elem.person.name}</p>

              </div>
            )
          })}
        </div>
      </div>
    </section >
  }








  // onsole.log(`https://candidates.democracyclub.org.uk/api/next/ballots/parl.${parliamentaryConstituency.toLowerCase().split(' ').join('-')}.2019-12-12/`)


  //parliamentary_constituency.toLowerCase().split(' ').join('_')

  //candidate url
  //party url


}

export default Constituency