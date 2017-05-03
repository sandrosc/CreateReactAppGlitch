import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>Setting up GitHub Pages for your Glitch app</h2>
          <p>This is a short manual on how to set up this react app to work with GitHub pages. The result should be a <a href="http://glitch.com">glitch.com</a>	project that, when exporting to GitHub will trigger a rebuild and deployment of your website. These tasks will be completed by Travis CI. I followed <a href="https://blog.ngconsultant.io/continuous-deployment-of-client-side-apps-with-github-pages-travis-ci-10e9d641a889">this guide</a>.</p>
          <ul>
            <li>Create a GitHub repository (initialize with a markdown so Glitch can export to GitHub)</li>
            <li>Create a personal access token at <a href="https://github.com/settings/tokens">https://github.com/settings/tokens</a>
              <ul>
                <li>Grant it access to “public_repo”</li>
                <li>Copy it into a notepad or a new VS Code tab or whatever (Point being, you’re going to need it)</li>
              </ul>
            </li>
            <li><a href="https://github.com/integrations/travis-ci">Add Travis CI</a> to your GitHub Accout</li>
            <li>At <a href="https://travis-ci.org/">Travis CI</a> add your newly created repository (with the on/off switch)</li>
            <li>Go to the Travis project settings of your repository and make the following changes
              <ul>
                <li>Enable “Build only if .travis.yml is present”</li>
                <li>Add the GH_REF environment variable. In this example this would be <a href="http://github.com/sandrosc/CreateReactAppGlitch">github.com/sandrosc/CreateReactAppGlitch</a>.</li>
                <li>Add the GH_TOKEN environment variable. Remember this personal blabla random string from GitHub earlier? This is now your
                  GH_TOKEN. Turn “Display this value in build logs” to OFF!</li>
              </ul>
            </li>
            <li>Edit the homepage entry in package.json</li>
            <li>Grant <a href="http://glitch.com">glitch.com</a> access to GitHub (to enable export)</li>
            <li>Copy the GitHub USERNAME/REPO string (basically your GH_REF without <a href="http://github.com/">github.com/</a>)</li>
            <li>Export to GitHub (paste USERNAME/REPO in this blocking pop up that won’t even let you open a new tab to copy this info)</li>
            <li>Things that are not necessary but nice:
              <ul>
                <li>Change your default branch to glitch and delete the master branch</li>
                <li>Add the project url to your project’s description</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
