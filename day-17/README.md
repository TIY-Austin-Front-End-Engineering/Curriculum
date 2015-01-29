[Table of Contents](/README.md)

# Group Project

## Review
- Creating git repos, clone, add, commit, push pull

## Goals
- Learn about the core principles of Agile development.
- Learn how to use github issues for managing a project.
- Learn about markdown for writing documentation.

# Assignment
For your assignment this weekend the Rails and Front-end classes will be working together to tackle a full fledged web application. You will be using everything you've learned thus far to set up a web based chat application similar to hipchat.

### Teams:
- Hughie + Jacob M
- Paul + Buck
- Travis + Drew
- Gabe + Kate
- Daniel + Raol
- Erika + Alex + Rob
- Charlie + Jacob B + Justin

### Project workflow:
1. Develop a set of user stories describing how users will want to interact with your chat application.
2. Every day hold a stand up meeting and communicate with your partners what you will be tackling over the next 24 hours as well as what (if anything) is blocking you from making progress. Take notes of each of these daily tasks and blocks. You will need to turn in these notes for Thursday, Friday, Saturday and Sunday. Your stand up meetings should be done in person.
3. Brainstorm with your partner all of the different places where your two applications will need to interact with each other.
4. Collaborate with your partner to put together API documentation for your application.  You can use this as a model for how it should look: http://www.omdbapi.com/. What information will need to be stored, retrieved, updated or deleted? Make sure your documentation takes into account the different types of data. Also be sure to include example GET, POST, PUT, DELETE requests and corresponding example responses.
5. Set up two Github repositories, one for your front-end code and one for your back-end rails application.

### Deliverables:
1. User stories for your application.
2. Stand up meeting notes for Thursday, Friday, Saturday, Sunday.
3. Application code pushed to two github repos. Each one of your team members must have at least 5 commits.
4. Your application must be pushed live to github pages / heroku.

### Project Requirements:
1. Users should be able to set a username and post messages to a single chat room.
2. Any user who is in that chat room should see all messages that are posted along with the username of the person who pasted them and the date and time they were posted.
3. Users should be able to change their name and have the new name show up in future messages. Old messages can keep the old username.
4. Messages should appear on the page without having to refresh the page.

#### Hard Mode Requirements:
1. Support emoticons in your chat application (hint: google "jquery emoticon plugin")
2. Add support for multiple chat rooms. Users in one chat room should not see messages that are posted in a different room.
3. Play a sound anytime a new chat is posted into your chat room (hint: google "play sound with javascript")
4. Backend: Implement a swear word filter. We need to keep things PG. No four letter words should be printed into the chat room. Instead display '****'

#### Nightmare Mode Requirements:
1. If a link to a gif, jpg, or png image url is posted into chat, show that image in addition to the link.
2. Play a sound only if a message is posted in the chat room that includes @<your username>
3. Be able to view the history of a chat room by specifying a start and end date. (hint: http://localhost:3000/room/foo/1-27-14/1-29-14)