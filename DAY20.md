[Table of Contents](/README.md)

# Day 20: Group Project

## Goals
- Learn about the core principles of Agile development.
- Learn how to use github issues for managing a project.
- Learn about markdown for writing documentation.

# Assignment
For your assignment this weekend the Rails and Front-end classes will be working together to tackle a full fledged web application. You will be using everything you've learned thus far to set up a web based chat application similar to slack.

### Teams:
- Ramona / Logan / Cecy
- Maria / Rob / Mike
- Keith / Kristen / Matthew
- Joshua / Gracie
- Sydney / John
- Maryna / Ben
- Zachary / Alex
- Alexa / Will
- Allen / Reid
- David / Tiffany

### Project workflow:
1. Develop a set of user stories describing how users will want to interact with your chat application. Put these stories into [Trello](https://trello.com/).
2. Every day hold a stand up meeting and communicate with your partner(s) what you will be tackling over the next 24 hours as well as what (if anything) is blocking you from making progress. Take notes on each of these daily tasks and blocks in a [Hackpad](https://hackpad.com/). **You will need to turn in these notes for Friday, Saturday and Sunday.** Your stand up meetings should be done in person.
3. Brainstorm with your partner(s) all of the different places where your two applications will need to interact with each other.
4. Collaborate with your partner(s) to put together API documentation for your application. You will need to document and turn in written documentation that includes the following information for each API endpoint (URL):

	* Description in plain english of what the API call does.
	* URL of the API call
	* What type of method should be used (GET / PUT / POST / DELETE)
	* Information on any parameters that need to be passed along with the API call.
	* Example of how to use the API call in JavaScript and what result will be returned from the server.

5. Set up two Github repositories, one for your front-end code and one for your back-end rails application. Get to coding!

### A note for teams of three
If you are in a team of three the two font-end students will need to pair program. Before you can begin, one student will need to create the GitHub repository and then [add the second student as a collaborator](https://help.github.com/articles/adding-collaborators-to-a-personal-repository/).

After adding the second student as a collaborator, the second student will need to clone the newly created GitHub repository. They should now be able to push changes to it.

In pair programming each of the two programmers assumes either the driver or navigator role. The **driver** is responsible for typing in the actual code and adding / commiting / pushing changes to GitHub. The **navigator** is responsible for instructing the driver what to type. All of the code that the driver writes should be dictated by the navigator. It is very important that you switch roles. Each student should spend half of the time being the driver and half of the time being the navigator. Spend 30 minutes with one set of roles and then switch. Then spend another 30 minutes and switch back. Continue this way.

Right before you switch roles the driver must add / commit and push all code to GitHub so that the new driver can pick up where you left off. The new driver needs to pull that code from GitHub before making changes. To do this, in your GutHub directory run the command `git pull origin master`. This will update your local reposity with all of the new code that the previous driver had written.

### Deliverables:
1. User stories for your application in [Trello](https://trello.com/).
2. Stand up meeting notes for Friday, Saturday, Sunday in [Hackpad](https://hackpad.com/).
3. Application code pushed to two github repos. Each one of your team members must have at least 5 commits.
4. Your application must be pushed live to github pages / heroku.

### Project Requirements:
1. Users should be able to set a username and post messages to a single chat room.
2. Any user who is in that chat room should see all messages that are posted along with the username of the person who posted them and the date and time they were posted.
3. Users should be able to change their name and have the new name show up in future messages. Old messages can keep the old username.
4. Messages should appear on the page without having to refresh the page.
5. When a user enters a chat room, it should only show the last five minutes of messages (not the whole chat history). Bonus points if you can make the five minute window configurable so that it can be easily changed in the future.
6. In addition to the chat room page, there should be a leaderboard page that displays the following information:

	* Top ten usernames ranked by the number of total messages that they posted.
	* Most active chat rooms ranked by the number of messages posted in that room.
	* A list of users who have posted a message in the last four hours. Bonus points if you can make the four hour window configurable so that it can be easily changed in the future.

#### Hard Mode Requirements:
1. Support emoticons in your chat application (hint: google "jquery emoticon plugin")
2. Add support for multiple chat rooms. Users in one chat room should not see messages that are posted in a different room.
3. Play a sound anytime a new chat is posted into your chat room (hint: google "play sound with javascript")
4. Implement a swear word filter. We need to keep things PG. No four letter words should be printed into the chat room. Instead display '****'
5. Create a chat bot that automatically responds to certain messages with responses. For example, if a user types in "amiright" the chat bot would automatically respond with "you are so right!"

#### Nightmare Mode Requirements:
1. If a link to a gif, jpg, or png image url is posted into chat, show that image in addition to the link.
2. Play a sound only if a message is posted in the chat room that includes @<your username>
3. Be able to view the history of a chat room by specifying a start and end date. (hint: http://localhost:3000/room/foo/1-27-14/1-29-14)
4. Add a profile page to show all messages for a particular user.
