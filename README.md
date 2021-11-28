# d2jsp User Count
Writes current amount of users on D2 JSP to a CSV

## Setup

### Grab the Source Code

Clone this repository with Git or download from the following link
Download Current: https://github.com/ctsstc/d2jsp-user-count/archive/refs/heads/main.zip

### Install Dependencies

You will need:

- Node
  - You can download and install the latest from: https://nodejs.org/en/download/
  - Or you can use your favorite OS/3rd Party Package Manager
  - Or or or,,, maybe you already have it, run `node -v`, you should try to be on version `16` at least.
- Project Dependencies
  - Run `npm install` from the project directory


### Running

- From the project directory run: `npm start`

Currently this will run every 30 minutes and write the current user count and time to `counts.csv` at the project's root directory.
