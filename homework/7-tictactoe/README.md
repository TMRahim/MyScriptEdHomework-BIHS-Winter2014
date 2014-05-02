#Tic Tac Toe

You are going to implement a single player tic-tac-toe game like http://ostermiller.org/calc/tictactoe.html. This is an **individual** assignment. Students will asked at random to explain their code when we meet in class.

###Setup

1. Log into Cloud9 **using your Github account**.
2. Find the "ScriptEd-BIHS-Winter2014" project. Open it.
3. Run the following commands in the terminal: 
  ``git remote set-url origin git@github.com:dopeboy/ScriptEd-BIHS-Winter2014.git``
  <br/>
  ``git pull``
  ``git remote set-url origin git@github.com:INSERT_YOUR_GITHUB_USER_NAME_HERE/MyScriptEdHomework-BIHS-Winter2014.git``

    A new folder called "7-tictactoe" should appear with just one file: README.md. If it doesn't, call one of the instructors over.
 
###What you have to do

Your page needs to have the following:

1. A title up top with your name and the text "Tic-tac-toe game" 
2. A 3x3 grid of squares. Each square must have a numerical ID.
3. A reset button somewhere.
4. Paste ``<script id="clownfish" src="https://clownfish.io/js/clownfish.js"></script>`` in your ``<head>`` tag **below** your jQuery link.

Your page needs to do the following:

1. X's always go first. Everytime the user clicks on an empty square, the appropriate letter should show.
2. If there are 3 of the same letters horizontally, veritically, or diagonally, the game ends and text should be printed saying who won.
3. Everytime the user clicks on the reset button, the grid and any other text should be reset.

Hint:

We used arrays in the memory game to keep the state. Can we also do that here?
 
###Submission Checklist

This homework is due on **04/18 by midnight**. 

Before submitting your homework, you must perform the following:

1. Make sure all your files are in the "7-tictactoe" folder.
2. Run in the terminal: 
  <br/>
  ``git add *``
  <br/>
  ``git commit -u -m "new homework"``
  <br/>
  ``git push origin master``
3. At this point, log into your github and check that your files are in your repository. If they're not, do not proceed.
4. Go to http://clownfish.io and submit it. You will be required to submit a demo; follow the instructions in Clownfish.
