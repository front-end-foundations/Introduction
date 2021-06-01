# Introduction

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Do not dismiss someone because they have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer specializing in CSS, JavaScript, React and Node

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

[Syllabus](syllabus.docx) - or https://docs.google.com/document/d/1zizI_IXPvOG9MompmZA2YlP32AfRMxVbFlt9SZfCrL0/edit

[LinkedIn](https://www.linkedin.com/in/danieldeverell/) - https://www.linkedin.com/in/danieldeverell/

### Github

[Github](https://github.com/front-end-foundations) - `https://github.com/front-end-foundations`, is the source for _all files_ used in this class. Each class's activities will be documented in a readme file.

You can download a zip file from Github using the green "Clone or Download" menu and selecting "Download ZIP."

Please keep the page open in a tab during class for reference and in order to copy and paste code.

The edited files as they existed at the end of class can be downloaded from the `*-done` branch of this and all subsequent Github repositories. Be sure to select the branch on Github _before_ downloading the zip. I will demonstarte this in class.

### Reading and (optional) Textbook 

Online reading and videos will be assigned.

For those who prefer a textbook, a [textbook](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) - _HTML5 and CSS3: Building Responsive Websites_ - is available in paperback [online](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) in a variety of formats. _This text is optional but recommended for those who would like some additional material._ I will not be assigning readings from it. 

<!-- ### NYU Server

You are welcome to use your own prefered resources for sharing code however [server Space](http://oit2.scps.nyu.edu) at `http://oit2.scps.nyu.edu` - is provided.

First, test to ensure your account is active by entering `http://oit2.scps.nyu.edu/~<username>` into a browser (note the tilde`~`, be sure to replace `<username>` with your username). E.g. [http://oit2.scps.nyu.edu/~devereld](http://oit2.scps.nyu.edu/~devereld)

Your username is the first seven letters of your last name + the first letter of first name. e.g `jdoe`. (If your name is less than 7 characters, your username is your entire last name plus the first letter of your first name.)

Your password is your first initial plus your last initial plus 123890. e.g. `dd123890` and the computer name is `oit2.scps.nyu.edu`.

You can upload and download files using SFTP (Secure File Transfer Protocol). Recommended free SFTP clients include [Cyberduck](https://cyberduck.io) and [Filezilla](https://filezilla-project.org). Note - you _must_ use port 22 or SFTP in order to connect via SFTP.

When you log into your account you will see a number of files and folders. The `web` folder is where you place folders and files in order to make them accessible at `http://oit2.scps.nyu.edu/~<username>/`. 

Do not leave original copies of material on the server as accounts are deleted at the end of the semester. -->

## Server

We will be using [Netlfy](https://www.netlify.com/) to put our files on the internet - please create an account.  

## Homework

Homework should be handed in by uploading the files to the NYU server and alerting me via email - daniel.deverell@nyu.edu.

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- HTML, CSS and JavaScript (of course!)
- Visual Studio Code and the Terminal
- Git and Github
- Node Package Manager (NPM)
- SASS - a CSS preprocessor
- the [JAM Stack](https://jamstack.org/) (JAM: JavaScript, API's, Markup)
- Static site generation (using [11ty](https://www.11ty.io/))
- Markdown, AJAX and APIs

## A Sample Exercise

Download the zip file from this page using the green "Code" download button.

Open the folder (`cmd-o`) `session1-master` in VS Code.

Open `app/index.html` in Google Chrome. Right click on any text and choose `Inspect`.

No matter which browser you are working in, the inspector is your first line of defense when troubleshooting and should be kept open _at all times_ when you are working. (Pro tip: set the inspector to the right side of the screen using the kebab menu.)

The shortcut for opening the developer tools is `command-option-i`.

## Three Pillars of Web Design

This simple page illustrates the three pillars of the web - content, appearance and behavior. It is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

- Content (HTML) - uses HTML to _semantically_ markup the contents
- Appearance (CSS) - uses CSS to determine how the content will appear to the user
- Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

Try:

- Examine elements in the browser with the Elements and Styles dev tools panels open
- Click on the cat picture and note the changes in the document, how the Elements inspector displays the number, and what happens in the Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the inspector
  <!-- - Use multiple cursors to change a variable -->

Note that the CSS is linked in the head of the document and the JavaScript is the last item in the HTML just above the closing body tag.

<!-- ## Separation of Concerns

This sample page illustrates the three pillars of the web and comprise an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

Another example of the separation of concerns might be MVC (model, view, controller) which corresponds to database, interface, and business logic.

Concerns here are the different aspects of software functionality. For instance, in MVC, the business logic or _controller_ is a concern, and the interface or _view_ through which a person uses this logic is another. Changing the interface should not require changing the business logic, and vice versa. This makes it possible to assign different roles and responsibilities to each area for a large organization. -->

### HTML and Semantics

HTML tags convey _meaning_ to the content that makes up the document to help make it understandable. Since HTML tags can be made to look anyway you want they are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important. The proper use of HTML tags is important for accessibility.

HTML tags have attributes to provide additional information about HTML elements. See: the `<img >` tag.

Try:

- Use the inspector to change the `div` tag to an `article` or aside tag

There are only a small [number](https://www.w3schools.com/tags/) of html tags but each has a meaning.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the content can be displayed even in the absence of a style sheet. You will typically build on top of these.

### Block vs Inline

Most HTML tags or elements all have a default `display` property set to `block` which means that they create a rectangular region in the browser.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text (inline) does not and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

Try:

- Use the inspector to set the em tag to `display: block`, and then try `position: absolute; top: 10px`

### HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

- HTML: `<!-- -->`
- CSS: `/* */`
- JavaScript: `/* */` for multiline comments and `//` for single line comments

Try:

- Comment on and off the meta tag in the HTML file and viewing the result in the browser with the Toggle device button on and off
- Comment out a CSS property and a CSS rule
- Comment out the first line of JavaScript - click on the kitten and note the error

### The Box Model

Block elements are interpreted as a box in the browser. Block elements have CSS properties such as padding, borders, position and margins. Taken together these elements form the box model.

Try:

- Adding `margin`, `padding` and `height` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

## CSS Syntax

CSS rules consist of a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected.

The properties are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  height: 100px;
  width: 80%;
}
```

Refresh the page and inspect the paragraph again. Note the changes in the inspector.

<!-- Try:

- Setting the height to 4px with `overflow: hidden;` and `overflow: auto;` -->

Note the drop down (triangle) next to padding, margin and border properties in the inspector. This indicates a CSS shortcut. Click on it. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333333;
border-width: 3px;
```

Try:

- `border-top-style: dotted;`

### Box Sizing

Examine the paragraphs in the inspector. Box dimensions are additive by default - the amount of space they take up in the browser will be a combination of the amount of content, width, padding and border properties (margins are outside the box model).

There is another sizing method called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```css
p {
  box-sizing: border-box;
  ...;
}
```

Note the the height is now exactly 100px.

Try:

- Setting the width of the paragraphs to 400px
- Then comment out the box sizing property and examine the width and height using the inspector

See this [sample](https://codepen.io/DannyBoyNYC/pen/gqeKqd) on Codepen.

### Media Queries Demo

Add a media query to `styles.css`:

```css
@media (min-width: 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Resize the browser and note:

- overrides in the inspector
- `min-width` means "greater than"
- the css for `>` (greater than) 700px is _added_ to the styles when the condition is true.

Change it to use `max-width`:

```css
@media (max-width: 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Note:

- `max-width` means "less than"

In the first case (`min-width`) the styles are added when the screen is small. In the second the styles are added when the screen is wide. This will be important when we start optimizing our CSS for devices with different screen sizes.

### Debugging CSS with the inspector

By keeping an eye on the inspector you will quickly see when something has gone wrong with:

- misspelling
- bad or inapropriate selectors
- missing units
- and more
