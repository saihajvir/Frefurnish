# Frefurnish

All packages are installed using Yarn so do not use NPM to install.
Make sure to install the packages inside the frefurnish-app directory.


After cloning, run the following commands:

yarn add styled-components

yarn add lottie-react-native

yarn add react-native-vector-icons

Once all the dependencies are installed, use "expo start" to run the app.

If you want to make any edits or begin to build components, please do so on your own branch.

Creating a branch in your VSC terminal is simple. Enter the following:

git branch "branch-name" //This creates a new branch. Don't use quotes when making your actual branch or checking out to it.

git checkout "branch-name" //This changes you from your current branch to whatever branch you enter. Don't use quotes.

Name your branches based on the component or change you're making.

For example, if you're making a card component, your branch commands would appear like the following:

git branch card-ui

git checkout card-ui

Don't use capital letters in your branch and use dashes as spaces.

When you need to commit, either use the Git features in VSC or enter the following commands into terminal:

git add *
git commit -m "enter your commit message here" //USE QUOTES
git push origin "branch-name" //DON'T USE QUOTES

Once you've pushed, double check on Github to make sure it was successful. Don't push directly to main unless you've gotten the OK from the rest of the group.

When you need to download the latest repository, checkout to main and run:

git fetch
git pull



