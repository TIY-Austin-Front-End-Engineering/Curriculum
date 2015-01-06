[Table of Contents](/README.md)

# Day 2: CSS Review and Introduction to the Command Line

# Review
- Have everyone talk about a HTML element or CSS property that they learned about.
- Different types of paths
- Project folder structure

## Goals
1. Understand the CSS Box Model
2. Intro to CSS Media Queries / Mobile first development
3. Intro to command line


# Goal 1: Understandinf the CSS Box Model
I'm not going to put in notes about this because MD already does a perfect job. Everything you want to know about the box model [can be found here](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model) in a clear concise description.

# Goal 2: Intro to CSS Media Queries / Mobile first development
Now that web users consume content on all kinds of different devices and screen sizes we can no longer realistically build fixed width websites. We need our frontend code to respond to the ever changing dimensions of the screens that people are using.

The basic strategy for accomplishing this in a way that doesn't make us pull our hair out is to make use of a concept called "breakpoints." Essentially, we use a few different versions of our CSS, depending on the screen size that the viewer is using. For example, we might create the following breakpoints:

| Description    | Size               |
| -------------- |--------------------|
| Small devices  | <768px (phones)    |
| Medium devices | ≥768px (tablets)   |
| Large devices  | ≥992px (desktops)  |
| Large devices  | ≥1200px (desktops) |

# Goal 3: Understand how to layout a fixed width page with CSS.

# Assignment Format
All assignments that involve code should be submitted in the following format:
```
├──2015-01-05
├── classwork
|   ├── index.html
|   ├── (any other html files)
|	├── images
|   |	├── image1.jpg
|   |	└── image2.png
|	├── css
|   |	├── reset.css
|   |	└── style.css
|	├── js
|   |	├── main.js
|   |	└── another_file.js
├── homework
|	├── assignment1
|	|	├── index.html
|	|	├── (any other html files)
|	|	├── images
|	|	|   ├── image1.jpg
|	|	|   └── image2.png
|	|	├── css
|	|	|   ├── reset.css
|	|	|   └── style.css
|	|	├── js
|	|	|   ├── main.js
|	|	|   └── another_file.js
|	├── assignment2
|	|	├── index.html
|	|	├── (any other html files)
|	|	├── images
|	|	|   ├── image1.jpg
|	|	|   └── image2.png
|	|	├── css
|	|	|   ├── reset.css
|	|	|   └── style.css
|	|	├── js
|	|	|   ├── main.js
|	|	|   └── another_file.js

```

# Assignment
1. Watch: https://www.youtube.com/watch?v=0fKg7e37bQE
- Write up a description in your own words for each of the basic git commands. Put the descriptions in a HTML file.
-- git clone
-- git status
-- git add
-- git commit
-- git push
-- git pull
2. Duplicate this layout including colors and style: http://purecss.io/layouts/pricing/
3. Install xcode command line tools. No deliverables required other than having it properly installed. We will use these tomorrow and will not be going over how to install them in class so if you need help ask before tomorrow.

# Resources
* [Box Model Summary](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model)
* [Video: Github Tutorial For Beginners](https://www.youtube.com/watch?v=0fKg7e37bQE)