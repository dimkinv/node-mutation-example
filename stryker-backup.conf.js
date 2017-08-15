module.exports = function (config) {
    config.set({
        files: [
            'app-backup/**/*.spec.js',
            {pattern: 'app-backup/**/*.js', mutated: true, included: false}
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        reporter: ['html', 'progress']
    });
};