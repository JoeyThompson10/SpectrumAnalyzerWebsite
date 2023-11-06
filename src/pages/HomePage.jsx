import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import About from '../components/About';

function HomePage() {
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
          <h2>Download the Spectrum Analyzer</h2>
          <h3>Installation Instructions:</h3>
          <p>Download the installer and run it on your system. Follow the on-screen instructions to complete the installation.</p>

          <a href={appInstallerUrl} download>
            <button className="download-button">Download Installer</button>
          </a>
          <p>Version: 1.6</p>
          <p>File Size: 15 MB</p>
          <p>Release Date: 2023-11-05</p>
          <p>System Requirements: Windows 10/11, 4GB RAM, 500MB Disk Space</p>

          <h3>Release Notes:</h3>
          <ul>
            <li>Added support for new signal processing algorithms.</li>
            <li>Improved UI responsiveness for high-resolution displays.</li>
            <li>Fixed bug causing incorrect frequency display on certain devices.</li>
          </ul>

          
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
