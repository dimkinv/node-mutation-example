module.exports = function (config) {
    config.set({
        files: [
            'app/**/*.spec.js',
            {pattern: 'app/**/*.js', mutated: true, included: false}
        ],
        testRunner: 'mocha',
        testFramework: 'mocha',
        coverageAnalysis: 'perTest',
        reporter: ['html', 'progress']
    });
};