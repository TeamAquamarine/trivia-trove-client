'use strict';
page('/', (ctx) => app.Categories.fetchAll(() => app.homeView.initHomeView(ctx)));
page('/play/:amount/:cat_id/:diff', (ctx) => app.quizView.initQuizView(ctx));
page('/about-us', () => app.showOnly('#about-us-view'));
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

