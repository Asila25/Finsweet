import React from 'react'
import { BlogDescription,  BlogTitle, BlogWrapper } from './BlogHeroSection';
import heroImage from '../../../../assets/bllog-hero.png'
const BlogHeroSection = () => {
  return (
    <BlogWrapper className="container">
      <BlogTitle>
        <h2>A UX Case Study on Creating a Studious Environment for Students</h2>
        <div>
          <h3>Andrew Jonson </h3>
          <span>Posted on 27th January 2021</span>
        </div>
      </BlogTitle>
      
        <img src={heroImage} alt="heroImage" />

      <BlogDescription>
        <h3>
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </h3>
        <p>Read more</p>
      </BlogDescription>
    </BlogWrapper>
  );
}

export default BlogHeroSection