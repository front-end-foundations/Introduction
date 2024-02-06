- [Class Info](#class-info)
  - [Resources](#resources)
    - [Github](#github)
    - [Homework and Assignments](#homework-and-assignments)
  - [Zoom Tips](#zoom-tips)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [What is Front End Development?](#what-is-front-end-development)
  - [Introductory Exercise](#introductory-exercise)
    - [Suggested Reading](#suggested-reading)
    - [Dev Tools](#dev-tools)
    - [The Box Model](#the-box-model)
    - [Block vs Inline](#block-vs-inline)
    - [HTML and Semantics](#html-and-semantics)
    - [User Agent Styles](#user-agent-styles)
  - [CSS](#css)
    - [Three Pillars of the Web](#three-pillars-of-the-web)
    - [HTML, CSS and JavaScript Comments](#html-css-and-javascript-comments)
    - [Box Sizing](#box-sizing)
    - [Media Queries Demo](#media-queries-demo)

# Class Info

1. There is no such thing as a silly question, you are encouraged to speak up anytime something is not clear to you
2. There is no such thing as a silly mistake, they are a gateway to learning
3. Everyone will have a different level of experience - be kind to others
4. During class exercises you promise to alert me the second something goes awry with your project
5. I will make myself available before or after class to clarify or expand on topics (or we can set an alternate time via email)

## Resources

Your instructor - Daniel Deverell (he, him): Front & Back end developer specializing in CSS, JavaScript, React and Node.

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

[Syllabus](syllabus.pdf) - syllabus.pdf

[LinkedIn](https://www.linkedin.com/in/danieldeverell/) - https://www.linkedin.com/in/danieldeverell/

### Github

Go to [Github](https://github.com/front-end-foundations). `https://github.com/front-end-foundations`, is the source for _all files_ and notes used in this class. Class activities are documented in a readme file.

_The notes are updated frequently so do not download them until the day of the class._

Please keep the notes open in a browser tab during class for reference and in order to copy and paste code.

At the end of class I typically upload or "push" my files back up to Github for your reference.

### Homework and Assignments

Assignments should be handed in by uploading the files to Github/Netlify and alerting me via email - daniel.deverell@nyu.edu. You will learn how to use Github during this class. To hand in homework before you've learned to use Github simply email me the files as a zip file.

## Zoom Tips

- Press the spacebar if muted to temporarily enable the microphone
- If possible, leave your camera on
- Use a second screen by dialing into Zoom on another device or use a larger monitor
- You may need to configure Zoom for screen sharing (requires restarting Zoom)
- Recordings are made available on request
- If I fail to notice a raised hand or question in chat please alert me via voice

## Summary of Tools and Technology

A listing of applications and technologies you will be introduced to in the class include:

- HTML, CSS and JavaScript DOM manipulation
- Visual Studio Code and the Terminal
- Git and Github
- Node and Node Package Manager (NPM)
- SASS - a CSS preprocessor
- the [JAM Stack](https://jamstack.org/) (JAM: JavaScript, API's, Markup)
- Static site generation [eleventy](https://www.11ty.io/)
- Site deployment using [Netlify](https://www.netlify.com)
- Fetching, processing and displaying data from third party APIs such as [New York Times Developer](https://developer.nytimes.com)

## What is Front End Development?

Front end development is the part of web development that is responsible for everything the user sees, touches, clicks and interacts with on a website. It is the part of the web that is visible to the user and is responsible for the look and feel of the site. It is also responsible for the user experience and the user interface.

[MDN](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer) has a good overview of the role of the front end developer.

## Introductory Exercise

### Suggested Reading

- [MDN HTML Basocs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- if you prefer videos (with interactivity) you may be interested in this free course from [Front End Masters](https://frontendmasters.com/courses/web-development-v3/)

---

This exercise introduces some web development basics but is primarily intended to get set up and to give you a feel for the techniques we will be using.

1. Create a directory "NYU-introduction" in your preferred location that you will use for _all files in this class_.
2. Download the zip file from this page using the green "Code" download button on Github
3. Unarchive the zip file into your new directory
4. Open the folder in VS Code via File > Open (select the folder)
5. Create a new file `index.html` in the `src` directory
6. In your HTML file - type in "html:5" (or simply "!") and press tab or select from the contectual menu and something like this should appear:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

1. Add the code below to the body tag in `index.html`

```html
<h1>Hello world!</h1>
<div>
  <p>Paragraph's and divs are block elements. They're rendered inside a box.</p>
  <p>
    This <em>italic text</em> is an inline element. Here is a
    <a href="#test">link</a> - also an inline element.
  </p>
</div>
```

Demo - the difference between opening via file and via server.

1. Open file file in Google Chrome and note the path in the address bar
1. Install the Live Server extension in VSCode and use it to open `src/index.html` in Google Chrome

Even though the file is the same, the address bar will be different. This is because the file is being served by a server. The server is not necessary now but some of the features we will be using later will require it. It is also a good habit to get into.

### Dev Tools

Right click or control click on the link and choose `Inspect`.

No matter which browser you are working in, developer tools are your first line of defense when troubleshooting _and should be kept open at all times when you are working_. (The shortcut for opening the developer tools is `command-option-i`.)

Set the inspector to the right side of the screen using the "kebab" (...) menu.

### The Box Model

HTML tags (or Elements) are interpreted as a box in the browser. They have properties such as padding, border, position and margins. Taken together these elements comprise the box model.

### Block vs Inline

Most HTML elements have a default `display` property of `block` which means that they create a rectangular box in the browser.

The "opposite" of block in HTML is `inline`. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<div>` tag is used to create an arbitrary block element and a `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text is inline and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

The `em` tag is an inline tag and is used to create emphasis in text. It is a semantic tag and should be used instead of the `i` tag which is a presentational tag.

Try:

1. In the inspector select the first and then the second paragraph. Note that the two paragraph's margin collapses (is not additive)
2. Add a `div` tag around the second paragraph and note the difference in the inspector
3. Use the inspector to add `padding`, `border` and `margin` to the `p` tag
4. Use the inspector to add `padding`, `border` and `margin` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

### HTML and Semantics

Semantics is the branch of linguistics and logic concerned with meaning.

HTML semantics are the meaning of the HTML tags. HTML tags convey _meaning_ to the document content to make it understandable. 

Since HTML tags can be made to look anyway you want they are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important. The proper use of HTML tags is important for accessibility and search engine optimization.

Try:

- Use the inspector to change the `div` tag to an `article` tag

There are quite a [few html tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - each has a meaning and appropriate use.

HTML tags have _attributes_ that provide additional information about HTML elements such as the `href` in the anchor (`<a href >`) tag. The `href` attribute specifies the URL of the page the link goes to.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the document can be displayed even in the absence of a style sheet. You will typically build on top of these.

1. Add `<link rel="stylesheet" href="styles.css" />` to the head of the html document

## CSS

CSS rules consist of a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected and properties are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

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

Inspect the paragraph again. Note the changes in the inspector.

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

Delete the body tag and its contents. Paste the following in in its place.

```html
<body>
  <h1>Hello world!</h1>
  <div>
    <p>
      Paragraph's and divs are block elements. They're rendered inside a box.
    </p>
    <p>
      This <em>italic text</em> is an inline element. Here is a
      <a href="#test">link</a> - also an inline element.
    </p>
    <img src="http://placekitten.com/320/240" alt="click the kitten" />
    <p>You clicked on the kitten <span>0</span> times</p>
  </div>
  <p id="test"><a href="#top">Down here!</a></p>
  <script src="scripts.js"></script>
</body>
```

Review the changes - `<img />`, `<span>`, `<script>` and their respective attributes `src`, `alt` `href`, and `id`.

Link the CSS in the head of the document:

`<link rel="stylesheet" href="styles.css" />`

Note the JavaScript is the last item in the HTML just above the closing body tag.

Click on the kitten and on the links to test.

Try:

- Click on the cat picture and note how the Elements inspector displays the number, and what happens in the Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the inspector

Examine the applicable JS and CSS.

### Three Pillars of the Web

This simple document illustrates the three pillars of the web - content, appearance and behavior - working together. It is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

1. Content (HTML) - uses HTML to _semantically_ markup the content
1. Appearance (CSS) - uses CSS to determine how the content will appear to the user
1. Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

This also illustrates an example of the separation of concerns. The HTML is the content, the CSS is the appearance and the JavaScript is the behavior.

<!-- ## Separation of Concerns

This sample page illustrates the three pillars of the web and comprise an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

Another example of the separation of concerns might be MVC (model, view, controller) which corresponds to database, interface, and business logic.

Concerns here are the different aspects of software functionality. For instance, in MVC, the business logic or _controller_ is a concern, and the interface or _view_ through which a person uses this logic is another. Changing the interface should not require changing the business logic, and vice versa. This makes it possible to assign different roles and responsibilities to each area for a large organization. -->

### HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

- HTML: `<!-- -->`
- CSS: `/* */`
- JavaScript: `/* */` for multiline comments and `//` for single line comments

Try:

- Comment on and off the meta tag in the HTML file while viewing the result in the browser with the Toggle device button on and off
- Comment out the body CSS rule and a CSS rule
- Comment out the first line of JavaScript - click on the kitten and note the error

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
    width: 80%;
  }
}
```

Note: `max-width` means "less than".

In the first case (`min-width`) the styles are added when the screen is small. In the second the styles are added when the screen is wide. This will be important when we start optimizing our CSS for devices with different screen sizes.
