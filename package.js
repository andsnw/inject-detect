Package.describe({
    name: 'east5th:inject-detect',
    version: '0.0.4',
    // Brief, one-line summary of the package.
    summary: 'Meteor package for Inject Detect. Inject Detect detects NoSQL Injection attacks in real time.',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.4.2.7');
    api.use(['ecmascript', 'http']);
    api.mainModule('inject-detect.js', 'server');
});

Package.onTest(function(api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('east5th:inject-detect');
    api.mainModule('inject-detect-tests.js');
});
