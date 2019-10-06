Your Task

You have been asked to create a demo web app displaying Congressional data from the ProPublica Congress API on an HTML page (checkout Email and files m2task2). Specifically, you need to create two pages, one for the Senate and one for the House of Representatives. Both will look very similar. You should try to avoid duplicating code as much as possible.

There are several steps to this task:

Getting an API key for the ProPublica Congress API
Getting the JSON objects for the two chambers of Congress and saving them in files
Creating HTML pages that use JavaScript to display the JSON data in tabular form, and CSS to format the tables nicely

Background

API Keys

Web services that return data in JSON or XML form have become very popular. They allow a data consumer web site A to get data from a data producer web site B (or several web sites), manipulate that data, and display it to end users. One concern for the producer is that some consumers may overwhelm the producer’s servers with frequent requests for large amounts of data.

To control this, many web services require that all requests include an API key. This is a long sequence of characters that you need to include in every call to the data producer. You can often get an API key for free. The producer uses the key to track who is asking for data. The producer can easily limit how often you can ask for data and how much data you can get in one call. The producer may allow a consumer to pay for increased access.

JSON

JSON (JavaScript Object Notation) is a format for representing complex data in plain text form. As the name suggests, the format originated with JavaScript, but Douglas Crockford proposed using it as a general data exchange format instead of the more verbose XML (Extensible Markup Language). While XML was very general, powerful and popular, JSON quickly became more popular, because it was easier to code with and was comparatively more compact.


Get a ProPublica Congress API Key

1. Go to the ProPublica site. There's link there to a form for requesting an API key. This is free.

2. Wait for the API key to be emailed to you.
Be patient. This can take a day, perhaps more on weekend.
If you don't receive a key within a day, check your email spam folder. Automated emails of this sort often trigger spam filters.

Get the JSON Data

For developing and testing your code, it's best to have a local copy of some real data.

Testing will be faster
You won't bother the ProPublic server. 

To get a local copy, make one AJAX call to get the JSON you need, save that data in a JavaScript file, then use the JavaScript file. In a later task, it will be easy to switch to using live data.

1. Go to our AjaxTester web page
AjaxTester is a general form that can be used to test AJAX JSON web APIs.

2. Construct a URL for the ProPublica Congress web service to get the members of the Senate for the 113th Congress.
Use this page to see what that looks like. 

3. Enter the URL in the Endpoint field of AjaxTester.

4. Click the + Add header button.

5. Enter X-API-Key as the header name.

6. Put your API key as the header value.

7. Click the Ajax request button. If the URL and key are correct, JSON should appear in the texbox on the right.
You will get an HTTP 0 error if you have an incorrect URL or invalid API key.
8. When you have JSON in the textbox, click on it and hit control-A (Windows and Linux) or command-A (Macintosh), to select the entire JSON text.

9. Open the text editor you use for programming, create a new file, paste the JSON into it, and save under a clear name, e.g., pro-congress-113-senate.json

10. Repeat the above steps, but for the House of Representatives. Since this has almost 10 times as much data, it will take a little longer to appear.  Save in another file, e.g., pro-congress-113-house.json


Convert JSON to JavaScript

Although you’ll use these JSON files in later tasks, to create a standalone demo you need files that are executable JavaScript code. If you try to load the JSON in HTML with <script src="pro-congress-113-senate.json"></script>, you will get a syntax error. A JSON object is not executable code. Fortunately, it’s easy to fix.

1. Open your JSON Senate file in your editor, and insert
var data =
at the very start. This is JavaScript for "save the JSON object in the variable named data." Save this as a new file with the same name but the extension .js, for JavaScript.

2. Repeat with your JSON House file.

Load and Display Raw JSON on Web Page

Confirm that you can load the JSON data from your JavaScript files into a web page.

1. Using the basic html file provided in the email, create an HTML page senate-data.html with the following elements

a PRE element with the ID "senate-data"
a SCRIPT element that loads the JavaScript file you previously saved with Senate data
a SCRIPT element that has source code that puts the value of the variable data (pulled from the JavaScript file you loaded) into the PRE element

TIP: Do not put SCRIPT tags in the HEAD, in the middle of the BODY, and at the end of the BODY.  Middle is definitely not good.  Common practice these days is to bottom-load scripts.

TIP: To make the data variable's contents a string (easier to read), use the stringify method: JSON.stringify(data,null,2)

2. In order to write JavaScript that stores text into an HTML element, you can use getElementbyId. You can check Resources for more information.

Example:

document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
3. Open the HTML page in your browser.

4. If you see the JSON data, go on to the next step. If you don’t, open your browser’s Developer Console, reload the page, and look for error messages.

SUBMIT: Submit your Senate HTML file for mentor review
Submit Load and Display Raw JSON on Web PageTarea
Sin finalizar: Submit Load and Display Raw JSON on Web Page
Format the JSON Data as a Table

Once you are successfully getting the JSON data into your page, you can focus on displaying that data in a user-friendly HTML table. See javascript How to Create Dynamic HTML Pages

1. Replace the PRE element on your page with a TABLE element with the same ID.

2. The data variable contains a results field. The results field contains an array of members of the Senate.

3. Change your JavaScript code to be a loop over that array. (This code will be in place of the code you had in the last step that put content into the PRE element.) The loop should construct a string of HTML using an approach such as the following:

For each element of the array, it should build a TR element. Within that TR element, it should create strings with TD elements, filled with the following data from the array element:

full name, built from the array element fields for last, first, and middle names
party (D, R, or I)
state (two letter code)
seniority (years in the office they currently hold)
percentage of votes with party, with a % added

4. After building the string, the JavaScript should store the HTML in the TABLE element. See Resources for review material on arrays, loops, and using both to construct and display a string combining data and HTML markup.

5. Open the page in your browser. If the page looks correct, go to the next step. If not, open the Developer Console and look for error messages.

TIP: Do not put SCRIPT tags in the HEAD, in the middle of the BODY, and at the end of the BODY.  Middle is definitely not good.  Common practice these days is to bottom-load scripts.

TIP: Use (... || "") to avoid null's in the table, like the middle name.


Add Links and Headers

Now update your displayed content with helpful links (to the Senators' home pages) and descriptions of your table's contents (with headers).

1. Change your code so that when it constructs the HTML, the name is a link to the Senator's official home page, as given by the URL field in the results array.

2. Open the page, and test several of the links. Make sure they go to the right web page.

3. Add headers for your table to describe the contents of each column (e.g. 'Senator', 'Party Affilication').

TIP: If you need to review HTML markup for links and headers, check web resources m2task2.


Style the Page with Bootstrap

Style/build out page per wireframes included in email.

1. Add code to load the Bootstrap 4 CSS file. See web resources m2task2 for help on doing this.

2. Add the appropriate elements and attributes to your HTML to build out the navigation bar with dropdown menu. See web resources m2task2 for help on setting up your page to use Bootstrap.

3. Add the appropriate elements and attributes to your HTML to build out the page body and footer per the wireframes.

4. Add the appropriate elements and attributes to your HTML to use the default Bootstrap table styling. The table styling will not have borders, which is what our client prefers. See you Resources for help on using Bootstrap’s provided classes to style tables and their contents.

5. Check your page in the browser.

SUBMIT: Submit your HTML for mentor review
Submit Style the Page with BootstrapTarea
Sin finalizar: Submit Style the Page with Bootstrap
Repeat for House Data

Do the same process for the House data.

1. Repeat steps 4-7, starting with creating an HTML page named house-data.html. When you're through, this will be a much longer page than the Senate page, but you should have very little new work to do.

SUBMIT: When your House page is working and styled, submit the HTML to your mentor for review.
Submit Repeat for House DataTarea
Sin finalizar: Submit Repeat for House Data 
Create Home Page with Accordion Feature

Build your home page per the wireframe provided.

1. Using the basic html file provided in the email, create an HTML page (home.html).

2. Add code to load the Bootstrap 4 CSS file. See web resources m2task2 for help on doing this. 

3. Build out the navigation bar, the page body, and the footer like you did for the House and the Senate pages. (Use bootstrap Navbar)

4. Select an image for the TGIF Logo and an image for the Home page. 

5. Call these images in your HTML file and format with Bootstrap per the wireframes.

6. Add links to the Home page, the House page, and the Senate page in the HTML navigation bar. Copy this navigation link information to all pages.

7. Add the appropriate elements and attributes to your HTML to use the Bootstrap Accordion feature. 
The content on the home page should expands out when a link or button is clicked.  See Resources for help on using Bootstrap’s provided classes to create an accordion feature.

8. Check your page in the browser.
