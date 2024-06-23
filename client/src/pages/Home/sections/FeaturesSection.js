import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import './styles/FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features">
      <h2>Repeatedly coding the same standard features for your app? There's a better way.</h2>
      <div className="features-container">
        <div className="column without-buildkwik">
          <h3>Without BuildKwik</h3>
          <ul>
            <li><CancelIcon className="list-icon" /> Manually coding every feature</li>
            <li><CancelIcon className="list-icon" /> Inefficiencies and errors</li>
            <li><CancelIcon className="list-icon" /> Inconsistent components</li>
            <li><CancelIcon className="list-icon" /> Poor collaboration</li>
            <li><CancelIcon className="list-icon" /> Disjointed tools</li>
            <li><CancelIcon className="list-icon" /> Time-consuming integrations</li>
            <li><CancelIcon className="list-icon" /> No performance insights</li>
            <li><CancelIcon className="list-icon" /> Security concerns</li>
          </ul>
        </div>
        <div className="column with-buildkwik">
          <h3>With BuildKwik</h3>
          <ul>
            <li><CheckCircleIcon className="icon" /> Rapid prototyping</li>
            <li><CheckCircleIcon className="icon" /> Reusable components</li>
            <li><CheckCircleIcon className="icon" /> Better collaboration</li>
            <li><CheckCircleIcon className="icon" /> Smooth integrations</li>
            <li><CheckCircleIcon className="icon" /> Performance analytics</li>
            <li><CheckCircleIcon className="icon" /> Secure environment</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
