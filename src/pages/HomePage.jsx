import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import About from '../components/About';

function HomePage() {
  // URL to your S3 bucket where the app installer is hosted
  const appInstallerUrl = "https://spectrum-analyzer-installer.s3.amazonaws.com/SpectrumAnalyzerTeam5.exe";

  return (
    <div className="home-page">
      <Tabs>
        <TabList>
          <Tab>Download</Tab>
          <Tab>About</Tab>
          <Tab>Documentation</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanel>
          <h2>Download the App</h2>
          {/* Replace href with your actual S3 URL */}
          <a href={appInstallerUrl} download>
            <button>Download Installer</button>
          </a>
        </TabPanel>
        <TabPanel>
          <h2>About the Project</h2>
          <About />
        </TabPanel>
        <TabPanel>
          <h2>Documentation</h2>
          <p>Access to user guides, API documentation, etc.</p>
        </TabPanel>
        <TabPanel>
          <h2>Contact Information</h2>
          <p>How to reach the team for support or inquiries.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomePage;
