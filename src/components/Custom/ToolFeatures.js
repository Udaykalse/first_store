import React from 'react';
import Tool from "../style/ToolFeatures.module.css"
import tool1 from "../assets/tool1.png";
import tool2 from "../assets/tool2.png";
import tool3 from "../assets/tool3.png";
import tool4 from "../assets/tool4.png";
// import tool5 from "../assets/tool5.png";

const ToolFeatures = () => {
  return (
    <div className={Tool.toolfeatures}>
      <h1 className={Tool.title}>
      Enhance Your Workflow with Integrated Tools
      </h1>
      <div className={Tool.main}>
      <div className={Tool.feature}>
        <div className={Tool.subfeature}>

          <img src={tool1} alt="Messaging Platform" />
        <h2>Messaging Platform</h2>
        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
        </div>
      </div>

      <div className={Tool.feature}>
        <div className={Tool.subfeature}>
          <img src={tool2} alt="Collaborative Workspace" />
        <h2>Collaborative Workspace</h2>
        <p>Experience the power of collaboration in our shared workspace together.</p>
        </div>
      </div>

      <div className={Tool.feature}>
        <div className={Tool.subfeature}>

          <img src={tool4} alt="Calendar Integration" />
        <h2>Calendar Integration</h2>
        <p>Simplify your scheduling and time management with our calendar integration.</p>
        </div>
      </div>

      <div className={Tool.feature}>
        <div className={Tool.subfeature}>

        <img src={tool3} alt="CRM System" />
        <h2>CRM System</h2>
        <p>Manage client relationships effectively with our user-friendly CRM system.</p>
        </div>
      </div>
      </div>

      <button className={Tool.explorebutton}>Explore Tools</button>
    </div>
  );
};

export default ToolFeatures;
