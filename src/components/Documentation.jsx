import React from "react";

const Documentation = () => {
  return (
    <div>
      <h1>Documentation</h1>

      <h2>Overview</h2>

      <p>
        The Spectrum Analyzer Application is designed to process and analyze
        videos of spectrum analyzer screens. It detects the waveform in each
        video frame, extracts key characteristics like frequency and amplitude,
        and outputs the results to a CSV file for further analysis.
      </p>

      <p>
        The application includes a graphical user interface (GUI) for
        configuring settings and initiating analysis. It leverages OpenCV for
        image processing and waveform detection. Multiprocessing is used to
        parallelize video analysis across CPU cores.
      </p>

      <h2>Getting Started</h2>

      <h3>Prerequisites</h3>

      <ul>
        <li>Python 3.x</li>
        <li>
          Required Python packages (listed in requirements.txt):
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
        <li>
          Install required packages:
          <pre>
            <code>pip install -r requirements.txt</code>
          </pre>
        </li>
        <li>
          Run the application:
          <pre>
            <code>python SpectrumAnalyzerGUI.py</code>
          </pre>
        </li>
      </ol>

      <h3>Configuration</h3>

      <p>
        The <code>env_vars.py</code> file contains configuration settings like:
      </p>

      <ul>
        <li>Video folder path</li>
        <li>Color threshold values</li>
        <li>Analysis parameters</li>
        <li>Keybindings</li>
      </ul>

      <p>
        These can be modified directly in <code>env_vars.py</code> or through
        the Settings page in the GUI.
      </p>
      <h2>Usage</h2>

      <p>The main interface allows you to:</p>

      <ul>
        <li>Start analysis on video files in the configured folder</li>
        <li>Open settings to customize parameters</li>
        <li>View help documentation</li>
        <li>Exit the application</li>
      </ul>

      <p>
        Clicking "Start Analysis" will begin processing videos and output CSV
        files to the <code>Completed</code> folder.
      </p>

      <p>The Settings page provides options to configure:</p>

      <ul>
        <li>Analysis span, center frequency, etc.</li>
        <li>Video folder path</li>
        <li>Color threshold values</li>
        <li>Keybindings</li>
        <li>Erosion/dilation iterations</li>
      </ul>

      <h2>Code Overview</h2>

      <ul>
        <li>
          <code>SpectrumAnalyzerGUI.py</code>: Main GUI application code
        </li>
        <li>
          <code>main.py</code>: Core analysis logic and multiprocessing
        </li>
        <li>
          <code>utilities.py</code>: Utility functions for image processing and
          analysis
        </li>
        <li>
          <code>env_vars.py</code>: Configuration settings
        </li>
      </ul>

      <p>The key steps:</p>

      <ol>
        <li>
          GUI calls <code>main.py</code> to run analysis
        </li>
        <li>
          <code>main.py</code> gets video files and config settings
        </li>
        <li>Videos are distributed to workers via multiprocessing</li>
        <li>
          Each worker calls <code>utilities.py</code> functions to process
          frames
        </li>
        <li>
          Results are saved to a CSV file in the <code>Completed</code> folder
        </li>
        <li>GUI updates after analysis is complete</li>
      </ol>

      <h2>Troubleshooting</h2>

      <p>Some common issues:</p>

      <ul>
        <li>
          Video folder not found: Ensure the path in <code>env_vars.py</code> is
          correct
        </li>
        <li>
          Warnings about threshold values: Tune the color threshold values for
          your video
        </li>
        <li>
          Analysis not starting: Check for errors during{" "}
          <code>pip install</code> of dependencies
        </li>
        <li>
          CSV file not outputting: Verify multiprocessing is working and{" "}
          <code>Completed</code> folder exists
        </li>
      </ul>

      <h2>Resources</h2>

      <h2>Resources</h2>

      <ul>
        <li>
          <strong>Application Source Code: </strong>
          <a href="https://github.com/JoeyThompson10/spectrumAnalyzerProject">
            https://github.com/JoeyThompson10/spectrumAnalyzerProject
          </a>
        </li>

        <li>
          <strong>Project Website: </strong>
          <a href="https://main.d21hsol1os28ah.amplifyapp.com/">
            https://main.d21hsol1os28ah.amplifyapp.com/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Documentation;
