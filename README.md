# trivia-trove-client
Client side application for final 301 project

Created by: _Sharon Miller, Connor Crossley and Alex Hanson_

## Getting Started
  - Clone both the server and client repositories
  - Install NPM and use `npm init` to initialize npm for project
  - Run `npm install` to install dependencies.
  - Create connections strings in server.js
  - Create database in postgres

## User Stories

### User
As a user, I want to be able to:
- Create my own trivia games
- Expand my knowledge with a wide variety of questions and difficulties
- Learn about certain categories of things like Star Wars
- Compare my score with myself and others
- (Stretch) See high scores by category
- (Stretch) Have scores multiply differently based on difficulty
- (Stretch) Have a timer for each question

### Developer
As a developer, I want to:
- Utilize SMACSS design principles to organize and simplify my styling procedures.
- Use MVC architecture to build my project and make development clean and clear. 
- Design my website to be a mobile-first single page application (SPA).
- Have an about us page for the team.
- Use declarative, functional programming wherever possible.
- Design a good 2:n database structure using Postgresql.
- Fully utilize my current stack, PEN- Postgresql, Express.js, Node.js.
- Make good use of libraries to add power to my code and make it cleaner.
- I want to use third-party API's to pull in trivia questions.

### Employer
As an employer, I want to see:
- A bright, clean, and easy to use interface.
- A game with good replay value (No, or few, repeats).
- Progression in our apprentices' learning.
- A fun game.

## File Structure

```
root\
  style\
    modules\
    reset.css
    base.css
    layout.css
    theme.css
    state.css
  scripts\
    models\
      quiz.js
      highscore.js
    views\
      quiz-view.js
      highscore-view.js
    controller\
      routes.js
    index.js
  index.html
  license
  README.md
  GROUP-AGREEMENT.md
  .gitignore
  wireframes.jpg

```

##Change Log
- **8/13/18 8:30 am** - Init Commit
- **8/13/18 9:00 am** - Add user stories to README
- **8/13/18 10:00 am** - Add wireframes
- **8/13/18 11:40 am** - Add GROUP-AGREEMENT and problem domain model
- **8/13/18 12:20 pm** - Update README with file structure outline, change log and getting started sections. 
- **8/13/18 12:40 pm** - File structure scaffolding



