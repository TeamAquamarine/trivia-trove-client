'use strict';
// Route for testing purposes
page('/', (ctx, next) => app.Categories.fetchAll(() => app.Categories.initHomeView(ctx)));
page('/about-us',() => app.aboutUsView.initAboutUsView());
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

