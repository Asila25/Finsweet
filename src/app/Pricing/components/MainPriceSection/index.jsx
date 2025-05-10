import React from 'react'
import { PriccingContinerWrapper, PricingTitle, PricingWrapper } from './MainPriceSection.style';
import { FaPlay } from "react-icons/fa";
const MainPriceSection = () => {
  return (
    <PricingWrapper className="container">
      <PricingTitle>
        <h2>Our Pricing Plans</h2>
        <p>
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </PricingTitle>

      <PriccingContinerWrapper>
        <div>
          <h2>
            $299 <span>Per Design</span>
          </h2>
          <h3>Landing Page</h3>
          <p>When you're ready to go beyond prototyping in Figma,</p>
          <ul>
            <li>
              <FaPlay color="#97DAAD" /> All limited links
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Own analytics platform
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Chat support
            </li>
            <li className="disabled">
              <FaPlay color="#a8aab0" /> Optimize hashtags
            </li>
            <li className="disabled">
              <FaPlay color="#a8aab0" /> Unlimited users
            </li>
          </ul>
          <button>Get started</button>
        </div>

        <div>
          <h2>
            $399 <span>Multi Design</span>
          </h2>
          <h3>Website Page</h3>
          <p>
            When you're ready to go beyond prototyping in Figma, Webflow's ready
            to help.
          </p>
          <ul>
            <li>
              <FaPlay color="#97DAAD" /> All limited links
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Own analytics platform
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Chat support
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Optimize hashtags
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Unlimited users
            </li>
          </ul>
          <button>Get started</button>
        </div>

        <div>
          <h2>
            $499+ <span>Per Design</span>
          </h2>
          <h3>Complex Project</h3>
          <p>When you're ready to go beyond prototyping in Figma,</p>
          <ul>
            <li>
              <FaPlay color="#97DAAD" /> All limited links
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Own analytics platform
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Chat support
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Optimize hashtags
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Unlimited users
            </li>
            <li>
              <FaPlay color="#97DAAD" /> Assist and Help
            </li>
          </ul>
          <button>Contact us</button>
        </div>
      </PriccingContinerWrapper>
    </PricingWrapper>
  );
}

export default MainPriceSection