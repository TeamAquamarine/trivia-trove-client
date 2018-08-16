'use strict';
page('/', (ctx) => app.Categories.fetchAll(() => app.homeView.initHomeView(ctx)));
page('/play/:amount/:cat_id/:diff', (ctx) => app.Question.fetchQuestions(ctx));
page('/play', () => app.quizView.initQuizView());
page('/continue', () => app.quizView.initContinue());
page('/about-us', () => app.aboutUsView.initAboutUsView());
page('/create', () => app.showOnly('#create-view'));
page('/highscore', () => app.showOnly('#highscore-view'));
page();

