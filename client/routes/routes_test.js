module.exports = (t, app) => {

  const $state = app.get('$state');

  t.equal($state.current.name, 'home', 'tha main state name should be "home"');

};
