'use strict';
// Route for testing purposes
page('/', (ctx) => app.Categories.fetchAll(() => app.homeView.initHomeView(ctx)));
page('/about-us',() => app.aboutUsView.initAboutUsView());
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

