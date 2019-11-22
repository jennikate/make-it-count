import React from 'react'
import PostcodeSearch from './PostcodeSearch'

const Home = () => (
  <section className='hero is-fullheight' id="hero">
    <div className='hero-body'>
      <div className='container'>
        <h1 className='line-1 anim-typewriter has-text-centered'>Make it count</h1>
        <PostcodeSearch />
      </div>
    </div>
  </section>
)



export default Home