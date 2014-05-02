#Flickr Search Engine

You are going to write a search engine that searches for pictures on Flickr.


###Setup

1. Log into Cloud9 **using your Github account**.
2. Find the "ScriptEd-BIHS-Winter2014" project. Open it.
3. Run the following commands in the terminal: <br/>
      ``git remote set-url origin git@github.com:dopeboy/ScriptEd-BIHS-Winter2014.git``
  <br/>
  ``git pull``<br/>
  ``git remote set-url origin git@github.com:INSERT_YOUR_GITHUB_USER_NAME_HERE/MyScriptEdHomework-BIHS-Winter2014.git``

    A new folder called "8-flickr-api" should appear with just one file: README.md. If it doesn't, call one of the instructors over.

###Preparation
1. This is a sample call to the Flickr API:<br/> ``http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c9f777eb7446f34a7261dc1a54be4b2&tags=clownfish%20sea&has_geo=1&extras=geo&format=json&jsoncallback=?``

      Analyze it first. Where is the search query?

2. Paste that URL into ``http://jsonformatter.curiousconcept.com/``. Go through the results and understand what is being returned by Flickr.



###What you have to do

Your page needs to have the following:

1. A text box where users can enter in their query.
2. A submit button that executes the search.
3. A div below the above that contains the search results.

Your page needs to do the following:

1. Once the user has typed in their query and clicked on the button, they should see pictures that match their search criteria.


###Hints
1. Use ``https://www.flickr.com/services/api/misc.urls.html`` to help you construct an image from the returned results from Flickr.
2. Use $.getJSON("<INSERT_CALL_TO_FLICKR_API_HERE>", INSERT_FUNCTION_NAME_THAT_PROCESSES_FLICKR_API_RESULTS_HERE);

      This function will make the call to the URL you provided and pass the results to the function you defined. Make sure that function takes in one parameter.

###Submission Checklist

This homework is due on **05/08 by midnight**. 

Before submitting your homework, you must perform the following:

1. Make sure all your files are in the "8-flickr-api" folder.
2. Run in the terminal: 
  <br/>
  ``git add *``
  <br/>
  ``git commit -u -m "new homework"``
  <br/>
  ``git push origin master``
3. At this point, log into your github and check that your files are in your repository. If they're not, do not proceed.
4. Go to http://clownfish.io and submit it. Be sure to select the "github" option when uploading your files.
