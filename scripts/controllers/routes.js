'use strict';
// Route for testing purposes
page('/', () => app.showOnly('#home-view'));
page('/about-us', () => app.showOnly('#about-us-view'));
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

