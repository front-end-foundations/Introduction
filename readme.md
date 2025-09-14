- [Class Info](#class-info)
  - [Resources](#resources)
    - [Github](#github)
    - [Reading and Text](#reading-and-text)
    - [Homework and Assignments](#homework-and-assignments)
  - [Zoom Tips](#zoom-tips)
  - [Summary of Tools and Technology](#summary-of-tools-and-technology)
  - [What is Front End Development?](#what-is-front-end-development)
  - [Introductory Exercise](#introductory-exercise)
    - [Suggested Reading](#suggested-reading)
    - [Homework](#homework)
    - [Dev Tools](#dev-tools)
    - [The Box Model](#the-box-model)
    - [Block vs Inline](#block-vs-inline)
    - [User Agent Styles](#user-agent-styles)
    - [HTML and Semantics](#html-and-semantics)
    - [HTML Attributes](#html-attributes)
  - [CSS](#css)
    - [Three Pillars of the Web](#three-pillars-of-the-web)
    - [Aside: HTML, CSS and JavaScript Comments](#aside-html-css-and-javascript-comments)
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

[Syllabus](https://syllabus.sps.nyu.edu/en-US/doc/1nb8nckd8/Spring-2025-INFO1-CE-9764-001-Web-Front-End:-Foundations-%28Full-Stack-Web-Development%29?mode=view)

[LinkedIn](https://www.linkedin.com/in/danieldeverell/) - https://www.linkedin.com/in/danieldeverell/

### Github

Go to [Github](https://github.com/front-end-foundations). `https://github.com/front-end-foundations`, is the source for _all files_ and notes used in this class. Class activities are documented in a readme file.

_The notes are updated frequently so do not download them until the day of the class._

Please keep the notes open in a browser tab during class for reference and in order to copy and paste code.

At the end of class I typically upload or "push" my files back up to Github for your reference.

### Reading and Text

Over the next few weeks you will complete the first (HTML) section of an online course offered by Frontend Masters, IMHO one of the premier learning sites for web development.

Access to the material requires a free account. You may register at https://frontendmasters.com/free/

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
- Static site generation [eleventy](https://www.11ty.io/)
- Site deployment using [Netlify](https://www.netlify.com)
- Fetching, processing and displaying data from third party APIs such as [New York Times Developer](https://developer.nytimes.com)

## What is Front End Development?

**Front end development** is responsible for everything the user sees, taps, clicks and interacts with on a website. It is the part of the web that is visible to the user and is responsible for the look and feel of the site, the user experience and the user interface. Typically the front end runs in a browser while the **back end** uses back-end or server side programming languages and databases to store and provide data to the front end. Now that JavaScript is both a front and back end programming language, many front end developers are leveraging their skills and working both sides as **full stack developers**.

## Introductory Exercise

### Suggested Reading

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

### Homework

- Review the content in the _HTML section_ of the [Complete Intro to Web Development, v3](https://frontendmasters.com/courses/web-development-v3/)
- Complete the [HTML exercise](https://frontendmasters.com/courses/web-development-v3/html-project/)
- [Post it to Netlify](https://docs.netlify.com/site-deploys/create-deploys/#drag-and-drop)
- Send me the link to your site

---

This exercise introduces some web development basics but is primarily intended to get set up and to give you a feel for the techniques we will be using.

1. Create a directory "NYU-introduction" on your computer in your preferred location. Use this directory for _all class files_.
2. Download the zip file from this page using the green "Code" download button on Github
3. Unarchive the zip file into your new directory
4. Open the folder in VS Code via File > Open (select the Introduction-master folder _not_ the NYU-introduction folder)
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
<h1>Hello kitty!</h1>
<div>
  <p>Paragraph's and divs are block elements. They're rendered inside a box.</p>
  <p>
    This <em>italic text</em> is an inline element. Here is a
    <a href="#test">link</a> - also an inline element.
  </p>
</div>
```

Demo - the difference between opening via file and via server - manual refresh vs auto reload.

1. Open file file in Google Chrome and note the path in the address bar
1. Install the Live Server extension in VSCode and use it to open `src/index.html` in Google Chrome

Even though the file is the same, the address bar will be different. This is because the file is being served. The server is not absolutely necessary right now but it will reload the page when you change the HTML and offers other features we will be using later. It is a good habit to get into.

### Dev Tools

Right click or control click on the link and choose `Inspect`.

No matter which browser you are working in, developer tools are necessary for development and are your first line of defense when troubleshooting. _They should be kept open at all times when you are working_. (The shortcut for opening the developer tools is `command-option-i`.)

Set the inspector to the right side of the screen using the "kebab" (...) menu.

### The Box Model

Most HTML tags (or Elements) are interpreted as a box in the browser. They have properties such as padding, border, position and margins. Taken together these elements comprise the box model.

### Block vs Inline

Most HTML elements have a default `display` property of `block` which creates a rectangular box in the browser.

The "opposite" of block in HTML is `inline`. Examples include our italicized text `<em>` and link `<a>`. A `<div>` tag is used to create an arbitrary block element and a `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text is inline and simply flows along with the rest of the text.

A `<div>` tag is a block tag which you can use to create a division in your code. It creates an arbitrary box (block) in a browser but has no other display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

The `em` tag is an inline tag and is used to create emphasis. It is a semantic tag and should be used instead of the `i` tag which is presentational tag and no longer used. The i tag is not semantic but presentational.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the document can be displayed even in the absence of a style sheet. You will typically build on top of these.

Try:

1. In the inspector select the first and then the second paragraph. Note that the two paragraph's margin collapses (is not additive)
2. Use the inspector to add `padding`, `border` and `margin` to the `p` tag
3. Use the inspector to add `padding`, `border` and `margin` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

### HTML and Semantics

Semantics is the branch of linguistics and logic concerned with meaning. HTML tags convey _meaning_ to the document content to make it understandable.

Since HTML tags can be made to look anyway you want they are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important. The proper use of HTML tags is important for accessibility and search engine optimization.

Try:

- Use the inspector to change the `div` tag to an `article` tag

There are quite a [few html tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - each has a meaning and appropriate use.

### HTML Attributes

HTML tags have _attributes_ that provide additional information about HTML elements such as the `href` in the anchor (`<a href="#test">`) tag. The `href` attribute specifies the URL of the page the link goes to.

1. Add a link tag in the head region of the html document

```html
<link rel="stylesheet" href="styles.css" />
```

## CSS

Examine `styles.css`. CSS rules consist of a [selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon:

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected and properties are set according to the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 10px;
  border: 3px solid #333;
  height: 100px;
  width: 500px;
}
```

Inspect the paragraph again. Note the changes in the inspector.

Note the dropdown triangle next to padding, margin and border properties in the inspector. This indicates a CSS shortcut. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333333;
border-width: 3px;
```

Try:

```css
border-top-style: dotted;
```

Add the following to `index.html`:

```html
<body>
  <h1>Hello kitty!</h1>
  <div>
    <p>
      Paragraph's and divs are block elements. They're rendered inside a box.
    </p>
    <p>
      This <em>italic text</em> is an inline element. Here is a
      <a href="#test">link</a> - also an inline element.
    </p>
    <!-- start here -->
    <img src="kitten.jpg" alt="a kitten" />
    <p>You clicked on the kitten <span>0</span> times</p>
  </div>
  <p id="test">
    <a href="#">Top</a>
  </p>
  <script src="scripts.js"></script>
</body>
```

Review the additions - `<img />`, `<span>`, `<script>` and their attributes: `src`, `alt` `href`, and `id`.

Note the JavaScript is the last item in the HTML just above the closing body tag.

Click on the kitten and on the link to test.

Try:

- Click on the cat picture and note how the Elements inspector displays the number, and what happens in the dev tool's Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the dev tool's CSS inspector
- Change the hash in the link to `#para` and add the id to the second paragraph:

```html
<!-- add this id -->
<p id="para">
  This <em>italic text</em> is an inline element. Here is a
  <a href="#test">link</a> - also an inline element.
</p>
```

Change the link at the bottom of the page:

```html
<a href="#para">Go Back</a>
```

Examine the applicable JS and CSS.

### Three Pillars of the Web

This simple document illustrates the three pillars of the web - content, appearance and behavior - working together. It is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

1. Content (HTML) - uses HTML to _semantically_ markup the content
1. Appearance (CSS) - uses CSS to determine how the content will appear to the user
1. Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

This also illustrates an example of the separation of concerns. The HTML is the content, the CSS is the appearance and the JavaScript is the behavior.

### Aside: HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

- HTML: `<!-- -->`
- CSS: `/* */`
- JavaScript: `/* */` for multiline comments and `//` for single line comments

Try:

- Comment on and off the image tag in the HTML file
- Comment out the body CSS rule
- Comment out the first line of JavaScript - click on the kitten and note the error

Undo the comments.

### Box Sizing

Examine the paragraphs in the inspector. Box dimensions are additive by default - the amount of space they take up in the browser will be a combination of width, padding and border (margins are outside the box model).

There is another sizing method called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```css
p {
  box-sizing: border-box;
  ...;
}
```

Note the the height and width is now exactly as specified in the CSS. It is no longer additive.

Examine this [sample](https://codepen.io/DannyBoyNYC/pen/gqeKqd) on Codepen.

### Media Queries Demo

Add a media query to `styles.css`:

```css
@media (width > 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Resize the browser and note:

- overrides in the inspector
- the css for `>` (greater than) 700px is _added_ to the styles when the condition is true. Here this means the wide screen.

Change it to use less than: `width < 700px`:

```css
@media (width < 700px) {
  p {
    border: 3px solid red;
    width: 80%;
  }
  img {
    width: 80%;
  }
}
```

In the first test case the styles are added when the screen is wide. In the second the styles are added when the screen is narrow. Much of the time it is preferable to add styles mainly to the wide screen. This is called "mobile first design." This will be important when we start optimizing our CSS for devices with different screen sizes.

Our example above is contrived but it illustrates the concept. In practice you should use as few media queries as possible.

Finish the exercise by altering the CSS as shown:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  min-height: 100px;
  box-sizing: border-box;
}
@media (width < 700px) {
  img {
    width: 90%;
  }
}
```

Create an account on Netlify, upload the files and send me the link.
