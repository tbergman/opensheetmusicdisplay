#!/bin/bash

# Prepare files to be published
grunt docs
grunt build:demo

# Clone github page
git clone git@github.com:opensheetmusicdisplay/opensheetmusicdisplay.github.io.git
cd opensheetmusicdisplay.github.io
git status

# Copy class documentation
rsync -a ../build/docs/* ./

# Copy demo application
rsync -a ../build/demo/* ./demo

# Commit and push changes
git status
git add *
git commit -m "Pushed auto-generated class documentation and demo for $TRAVIS_TAG"
git tag -a $TRAVIS_TAG -m "Class documentation and demo for $TRAVIS_TAG"
git push origin master --follow-tags
echo "Deployed class documentation and demo for $TRAVIS_TAG successfully."
cd ..
rm -rf opensheetmusicdisplay.github.io
