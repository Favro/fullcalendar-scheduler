Package.describe({
  git: 'https://github.com/hansoft/fullcalendar-scheduler',
  name: 'hansoft:fullcalendar-scheduler',
  summary: 'A premium add-on to FullCalendar for displaying events and resources.',
  version: '1.1.0-beta2_1',
});

Package.onUse(function(api) {
  api.versionsFrom(['1.0', '1.2']);

  api.use([
		'jquery',
		'momentjs:moment@2.4.8',
		'rzymek:fullcalendar@2.4.0_1',
  ], 'client');

	api.imply([
		'rzymek:fullcalendar',
	], 'client');

	api.addFiles([
		'dist/scheduler.js',
		'dist/scheduler.css',
	], 'client');

});
