import React from 'react';

const Documentation = () => {

  return (
    <div>
      <h1>Documentation</h1>

      <h2>Overview</h2>

      <p>The Spectrum Analyzer Application is designed to process and analyze videos of spectrum analyzer screens. It detects the waveform in each video frame, extracts key characteristics like frequency and amplitude, and outputs the results to a CSV file for further analysis.</p>

      <p>The application includes a graphical user interface (GUI) for configuring settings and initiating analysis. It leverages OpenCV for image processing and waveform detection. Multiprocessing is used to parallelize video analysis across CPU cores.</p>

      <h2>Getting Started</h2>

      <h3>Prerequisites</h3>

      <ul>
        <li>Python 3.x</li>
        <li>Required Python packages (listed in requirements.txt):
          <ul>
            <li>numpy</li>
            <li>opencv-python</li> 
            <li>scipy</li>
            <li>tkinter</li>
          </ul>
        </li>
      </ul>

      <h3>Installation</h3>

      <ol>
        <li>Clone or download the code repository</li>
        <li>Navigate to the project directory</li> 
        <li>Install required packages:
          <pre><code>pip install -r requirements.txt</code></pre>
        </li>
        <li>Run the application: 
          <pre><code>python SpectrumAnalyzerGUI.py</code></pre>
        </li>
      </ol>

      <h3>Configuration</h3>

      <p>The <code>env_vars.py</code> file contains configuration settings like:</p>

      <ul>
        <li>Video folder path</li>
        <li>Color threshold values</li>
        <li>Analysis parameters</li>
        <li>Keybindings</li>
      </ul>

      <p>These can be modified directly in <code>env_vars.py</code> or through the Settings page in the GUI.</p>

      {/* Rest of documentation */}

    </div>
  );
};

export default Documentation;