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
          <a href={appInstallerUrl} download>
            <button>Download Installer</button>
          </a>
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <h2>Documentation</h2>
        </TabPanel>
        <TabPanel>
          <h2>Contact Information</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomePage;
