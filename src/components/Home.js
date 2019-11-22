import React from 'react'
import PostcodeSearch from './PostcodeSearch'

const Home = () => (
  <section className='hero is-fullheight home hero-colored'>
    <div className='hero-body'>
      <div className='container flex-container'>
        <div>
          <p className='tagline'>The election is coming ...</p>
        </div>
        <div>
          <h1 className='line-1 anim-typewriter has-text-centered'>Make it count</h1>
        </div>
        <div>
          <PostcodeSearch />
        </div>

      </div>
    </div>
  </section>
)



export default Home