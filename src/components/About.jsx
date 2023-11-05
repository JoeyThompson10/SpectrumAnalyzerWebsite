import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Spectrum Analyzer Analysis Tool</h1>
      <h2>Purpose:</h2>
      <p>
        The Spectrum Analyzer Analysis Tool is a capstone creation, dedicated to
        advancing the analysis of frequency spectrums within video feeds. Our tool
        automates the detection and measurement of signal waveforms to support
        the 402 SWEG's data analysis requirements.
      </p>
      <h2>How It Works:</h2>
      <p>
        By employing computer vision techniques and leveraging the OpenCV library, 
        this software tool processes video frames to identify grid lines and signal 
        patterns, calculates waveform properties, and extracts vital information like 
        amplitude and frequency details.
      </p>
      <h2>Functionality:</h2>
      <ul>
        <li><strong>Grid Detection:</strong> Identifies grid patterns for reference scaling.</li>
        <li><strong>Wave Analysis:</strong> Measures waveform properties against the detected grid.</li>
        <li><strong>Data Extraction:</strong> Outputs analysis results to CSV files for further study.</li>
      </ul>
      <h2>Code Repository:</h2>
      <p>
        To view the source code for the project, visit the GitHub repository:
        <a href="https://github.com/JoeyThompson10/spectrumAnalyzerProject" target="_blank" rel="noopener noreferrer"> Spectrum Analyzer Project</a>.
      </p>
      <h2>Team:</h2>
      <p>
        This project is brought to you by Masood Afzal, Ashly Altman, Brooke Ebetino, 
        Tyler Halley, and Joey Thompson, under the mentorship of Dr. Yan Huang.
      </p>
    </div>
  );
};

export default About;
