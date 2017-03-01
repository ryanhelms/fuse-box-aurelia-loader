var build = function() {

    let fb = require("fuse-box");
    let fuse = fb.FuseBox;

    let bundle = fuse.init({
        homeDir: "./src",
        outFile: "./bundle/fb-app-bundle.js",
        useCache: false,
        plugins: [
            [/\.css$/, fb.RawPlugin({extensions: ['.css']})],
            fb.HTMLPlugin({
                useDefault: true
            }),
            fb.TypeScriptHelpers(),
            fb.SourceMapPlainJsPlugin()
        ],
        sourceMap: {
            bundleReference: "./fb-app-bundle.js.map",
            outFile: "./bundle/fb-app-bundle.js.map",
        }
        
    });

    // Start dev server
    bundle.devServer(`
        > [main.ts]
        + [**/*.html] 
        + [**/*.ts] 
        + [**/*.css]
        `, {
        root: './'
    })

}

build();