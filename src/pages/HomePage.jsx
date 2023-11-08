import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import About from '../components/About';
import Download from '../components/Download';
import Documentation from '../components/Documentation';
import Contact from '../components/Contact';

function HomePage() {
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
          <Download />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Documentation />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default HomePage;
