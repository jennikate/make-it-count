import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ElectionResults from './ElectionResults'



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
    arr.forEach(element => {
      axios.get(element.person.url)
        .then(resp => {
          const oldArray = [...this.state.persons]
          const persons = oldArray.concat(resp.data)
          this.setState({ persons })
        })

    })
  }

  getIndex(elem) {
    const i = elem.findIndex(p => p.value_type === 'party_ppc_page_url') < 0 ? null : elem.findIndex(p => p.value_type === 'party_ppc_page_url')
    return i
  }

  getPartyUrl(elem) {
    let partyUrl
    switch (elem) {
      case 'Labour Party': partyUrl = 'https://labour.org.uk/'; break
      case 'Green Party': partyUrl = 'https://my.greenparty.org.uk/'; break
      case 'Liberal Democrats': partyUrl = 'https://www.libdems.org.uk/'; break
      case 'Conservative and Unionist Party': partyUrl = 'https://vote.conservatives.com/'; break
      case 'The Brexit Party': partyUrl = 'https://www.thebrexitparty.org/'; break
      case 'Social Democratic Party': partyUrl = 'https://sdp.org.uk/'; break
      case 'Independent': partyUrl = 'https://whocanivotefor.co.uk/parties/ynmp-party:2/independent'; break
      default: partyUrl = 'https://whocanivotefor.co.uk/parties/'
    }
    return partyUrl
  }

  render() {
    if (!this.state.persons.length === 0) {
      return <h1>...Loading</h1>
    }

    
    return (
      <div>
        <nav>
          <Link to='/' className='logo'>Make it count</Link>
        </nav>
        <section className='hero is-fullheight'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>Your Constituency: <span>{`${this.props.match.params.id}`}</span></h1>
              <h2> MP Candidates</h2>
              <div className="columns is-mobile is-multiline">
                {this.state.persons.map((elem, i) => {
                  return (
                    <div key={i} className='column is-full-mobile is-one-third-tablet is-one-quarter-desktop'>
                      <div className="card">
                        <div className='card-image'>
                          <figure className='image'>
                            <img src={!elem.images[0] ? '/images/personplaceholder.jpg' : elem.images[0].image_url} />
                          </figure>
                        </div>
                        <div className='card-content'>
                          <p className='candidateName'>{elem.name}</p>
                          <p><a className='candidateParty' href={this.getPartyUrl(elem.candidacies[(elem.candidacies.length - 1)].party.name)} >{elem.candidacies[(elem.candidacies.length - 1)].party.name}</a></p>
                          {!elem.identifiers[this.getIndex(elem.identifiers)] ? <p></p> : <p><a className='candidateWebsite' href={elem.identifiers[this.getIndex(elem.identifiers)].value}>Candidate Website</a></p>}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section >
        <ElectionResults constituencyName={this.props.match.params.id} />
      </div>
    )
  }

}

export default Constituency


