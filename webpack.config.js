const path = ('path');
const srcPath = path.join(__dirname, 'client');

const config = {
    context: 'client',
    entry: {
        app: "app.js"
    },
    module: {
        loader: [
            {test: \$\.js\, loaders: ['babel']}
        ]
    }
};
