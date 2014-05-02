#Memory Exercise

You are going to implement a basic memory game like this: http://www.kielack.com/games/memory.php

##Phase I

The first step of this project will involve your group producing a grid using HTML and CSS.

###Setup

1. Log into Cloud9 **using your Github account**.
2. Find the "ScriptEd-BIHS-Winter2014" project. Open it.
3. Run the following commands in the terminal: 
  ``git remote set-url origin git@github.com:dopeboy/ScriptEd-BIHS-Winter2014.git``
  <br/>
  ``git pull``
  ``git remote set-url origin git@github.com:INSERT_YOUR_GITHUB_USER_NAME_HERE/MyScriptEdHomework-BIHS-Winter2014.git``

    A new folder called "4-memory-game" should appear with just one file: README.md. If it doesn't, call one of the instructors over.
 
###What you have to do

Your page needs to have the following:

1. A title up top with your team name and the text "Memory game" 
2. A 4x4 grid of squares. Each square must have a numerical ID.
3. Each square must have a question mark in it.
4. A reset button somewhere.
5. A score somewhere.

Your page needs to do the following:

1. Everytime the user clicks on a square, there should be an alert box that shows the ID of the clicked square.
2. Everytime the user clicks on the reset button, there should be an alert box that shows the text "reset clicked".

Once you're done with this phase, submit your code to Github only. Run in the terminal: 
  <br/>
  ``git add *``
  <br/>
  ``git commit -u -m "new homework"``
  <br/>
  ``git push origin master``


##Phase II

At this point, you should have the user interface and basic click handlers implemented. You are now going to complete the rest of the project.

###Setup

*None*

###What you have to do

Your page needs to do the following:

1. The game should start with all cards face down.
2. The game is a single player game only.
2. There should be a picture hidden behind each card. At this point, do not worry about randomly ordering the pictures. (Hint: You'll need to collect 8 pictures; make sure they are goofy!)
2. Everytime the user clicks on the reset button, the score should be reset to 0 and all cards should be flipped down.
3. Everytime the user finds a match, the score should increase by 1 point and the matched cards should remain flipped up.
4. Everytime the user does not find a match, the score should decrease by 1 point and the unmatched cards should be flipped down.
5. Once every match has been found, there should be some kind of indication telling the user the game is complete.
 
###Submission Checklist

This homework is due on **03/27 by midnight**. One submission per group.

Before submitting your homework, you must perform the following:

1. Make sure all your files are in the "4-memory-game" folder.
2. Run in the terminal: 
  <br/>
  ``git add *``
  <br/>
  ``git commit -u -m "new homework"``
  <br/>
  ``git push origin master``
3. At this point, log into your github and check that your files are in your repository. If they're not, do not proceed.
4. Go to http://clownfish.io and submit it.
