import React from 'react'
import axios from 'axios'


class Constituency extends React.Component {
  constructor() {
    super()
    
  }

  render() {

    return  <p>THIS IS THE NEW THING {this.props.match.params.id}</p>
  }

 
  
  
  



  // onsole.log(`https://candidates.democracyclub.org.uk/api/next/ballots/parl.${parliamentaryConstituency.toLowerCase().split(' ').join('-')}.2019-12-12/`)


  //parliamentary_constituency.toLowerCase().split(' ').join('_')

  //candidate url
  //party url


}

export default Constituency