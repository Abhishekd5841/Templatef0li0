It is a template designed for creating the potfolio with a better interface

How To Use
From your command line, clone and run Templatef0li0:

# Clone this repository
git clone https://github.com/Abhishekd5841/Templatef0li0.git

# Go into the repository
cd Templatef0li0

# Setup default environment variables

make a .env file as instructed below

# Install dependencies
npm i
npm i react-typewriter-hook

# Start a local dev server
npm start


=============================
Linking Portfolio to GitHub
============================= 
Generate a classic GitHub personal access token following these instructions (make sure you don't select any scope just generate a simple token). If you are using GitHub Actions to deploy your portfolio you can skip this section.

1. Create a file called .env in the root directory of your project as in place of .env.example
Note: Configuring environment variables before deploying your portfolio is highly recommended as some components depend on API data.

2. Inside the .env file, add key REACT_APP_GITHUB_TOKEN and assign your GitHub token like this, also add your username as GITHUB_USERNAME
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME"
USE_GITHUB_DATA = "true"

# Set showGithubProfile to true or false to show Contact Profile using GitHub, defaults to false.

# Warning: Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.