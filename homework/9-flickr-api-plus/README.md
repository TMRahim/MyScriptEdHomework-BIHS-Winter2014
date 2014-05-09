#Flickr API - Additional Exercises

We are going to do some additonal exercises around the Flickr API page. We will all start at the same point, however those that have already done their homework can use that to help them through these additional exercises.

###Setup

1. Log into Cloud9 **using your Github account**.
2. Find the "ScriptEd-BIHS-Winter2014" project. Open it.
3. Run the following commands in the terminal:  

  ``git remote set-url origin git@github.com:dopeboy/ScriptEd-BIHS-Winter2014.git``  
  ``git pull``  
  ``git remote set-url origin git@github.com:INSERT_YOUR_GITHUB_USER_NAME_HERE/MyScriptEdHomework-BIHS-Winter2014.git``  
  
  A new folder called "9-flickr-api-plus" should appear with four files: 1) this README.md file, 2) an index.html file, 3) a flickr.css file, and 4) a flickr.js file. If it doesn't, call one of the instructors over.

###Exercises  
  
(to be done in Cloud9)  
  
1. First off, make sure your code is working. Type something into the search box, and click 'Search'. You should get a basketball-related picture.

2. Now, just as we did in class together, change the code so that when you press Search, the picture reflects the word you put in the search box. For example, if I type in ``clownfish``, I expect to see a photo of a clownfish. If I type in ``basketball``, I expect to see a basketball-related photo.

3. Using CSS, make the width and height of the image 300x300.

4. Instead of just showing the first photo returned from the API call, let's show all the photos that are returned from the API. Loops! This is similar to what you did in your HW except you will use a ``for loop`` this time. So loop through all the photos and show each one of them on the page.

5. Next we want to only have one image per row, rather than having them side by side. What element can you use to make each element occupy only one row? Use it.

6. Place the title of each photo above its photo. Can you find where the title key is in the API response? This will be similar to how you grabbed the ``farm``, ``server``, and ``secret`` values to construct the image URL.

7. Finally, let's add the ability to let the user decide HOW MANY photos they want to display. Add another input box that allows the user to specify the number of photos. When the user presses the 'Search' button now, only the number of photos specified should show up on the page. Make sure to do this by changing the API call (see the Hint below).

  Hint: You will need to look at the page ``https://www.flickr.com/services/api/flickr.photos.search.html``. On this page, you need to find how to add a parameter to the API call so that you can limit the number of photos returned.

8. Change this new input box to a dropdown with the values of 5, 10, 50, and 100. Hmm. How does one grab the value of a dropdown field?
