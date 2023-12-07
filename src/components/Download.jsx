import React from 'react';

const About = () => {
    const appInstallerUrl = "https://spectrum-analyzer-installer.s3.amazonaws.com/SpectrumAnalyzerGUI.exe";
    
    return (
        <div>
            <h1>Download the Spectrum Analyzer</h1>
            <h2>Installation Instructions:</h2>

            <h3>Executable:</h3>
            <p>Download the executable file and run it on your system. Follow the on-screen instructions to complete the installation.</p>

            <a href={appInstallerUrl} download>
                <button className="download-button">Download Executable</button>
            </a>
            <p>Version: 2.2</p>
            <p>File Size: 106 MB</p>
            <p>Release Date: 2023-12-07</p>
            <p>System Requirements: Windows 10/11, 4GB RAM, 500MB Disk Space</p>

            <h3>GitHub Repository:</h3>
            <p>Download and run the project from our GitHub repository. Here's how:</p>
            <ol>
                <li>Visit our GitHub repository at <a href="https://github.com/JoeyThompson10/spectrumAnalyzerProject" target="_blank">Spectrum Analyzer Project</a>.</li>
                <li>Clone the repository or download the ZIP file and extract it on your computer.</li>
                <li>Navigate to the project directory where the <code>main.py</code> file is located.</li>
                <li>Open a terminal or command prompt in this directory.</li>
                <li>Ensure you have Python installed on your system and the necessary libraries by running <code>pip install -r requirements.txt</code> (the requirements file should list all the necessary libraries).</li>
                <li>Run the application by executing <code>python main.py</code> in the terminal.</li>
            </ol>
            <p>Note: You can also find detailed instructions and documentation on how to set up and run the project in the repository's README file.</p>

        </div>
    );
};

export default About;