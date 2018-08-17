'use strict';
var app = app || {};

if (app.isProduction) {
  page.base('/trivia-trove-client');
}
page('/', (ctx) => app.Categories.fetchAll(() => app.homeView.initHomeView(ctx)));
page('/play/:amount/:cat_id/:diff', (ctx) => app.Question.fetchQuestions(ctx));
page('/play', () => app.quizView.initQuizView());
page('/continue', () => app.quizView.initContinue());
page('/about-us', () => app.aboutUsView.initAboutUsView());
page('/highscore', () => app.highScoreView.initHighScore());
page('/highscore/win', () => app.highScoreView.quizComplete());
page('/highscore/submit/:initials/:category/:score', (ctx) => app.Highscore.postHighscore(ctx));
page('/create', () => app.showOnly('#create-view'));

page();

