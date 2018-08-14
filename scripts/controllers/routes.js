'use strict';
// Route for testing purposes
page('/', (ctx, then) => app.Categories.fetchAll(() => app.Categories.initHomeView(ctx)));
page('/about-us', () => app.showOnly('#about-us-view'));
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

