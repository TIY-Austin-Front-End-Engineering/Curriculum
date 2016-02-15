# Iron-Quizzes

## Code Standards

* Proper indentation with tabs.
* Singles quotes in JavaScript.
* Double quotes in HTML/JSX.
* CamelCase in JavaScript.
* Dash-case in CSS.
* 'Get Skeleton' for CSS framework.
*  http://getskeleton.com/
* All components should have comments describing them at the top of the file:
    * What they are.
    * What properties are required.
    * What type is each property.
* Suffix all component files names with 'Component'.
* Component variable names should be equal to that file name.
* Classes should be capitalized and suffixed with their type:
    * Models
    * Components
    * Collections
* Descriptive CSS class names.
* Descriptive git commits and branch names.

<hr>

##Models

**User Model**

>`firstname: string` <br>
>`lastname: string` <br>
>`username: string` <br>
>`password: string` <br>
>`teacher: boolean` <br>
>`email: string` <br>
>`cohortId: pointer` <br>

**Question Model**

>`questionTitle: string` <br>
>`questionContent: string` <br>
>`questionChoices: array` <br>
>`correctChoice: string` <br>
>`quizId: pointer` <br>
>`tags: array` <br>

**Student Answer Model**

>`studentCorrect: boolean` <br>
>`studentChoice: string` <br>
>`userId: pointer` <br>
>`questionId: pointer` <br>

**Quiz Model**

>`quizTitle: string`  <br>
>`totalQuestions: number` <br>
>`startTime: Date` <br>
>`expireTime: Date` <br>
>`cohortId: pointer` <br>

**Cohort Model**

>`name: string` <br>
>`location: string` <br>
>`date: string` //example: Fall 2015 <br>


<hr> 

##Style Guide

_Open to Change!_

**Fonts**

* Oswald Bold - Font for **Titles**
* Oswald Text - Font for **Everything Else**

**Color Palette by Emily Devoll**

* Navbar: #412D62;
* Paragraph Color: #412D62;
* Button Text Color: #412D62;
* Button Background:  #90C5A9;
* Button Border Color: #FF434A;
* Body Background:  #F4EAE0;
* Nav Link: #F4EAE0;
* Link Color:  #F4EAE0;
* Hover: #F8E1B5;
* Header Text Color: #FF434A;
* Subheader Text Color: #FFA54B;
* Content Background: #fff;
* Header Background: #412D62;

