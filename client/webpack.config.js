const HTMLWEBPACKPLUGIN=require('html-webpack-plugin')
module.exports={
    entry:"./src/index.js",

    output:{
        filename:'bundle.js',
        path:__dirname+'/public'
    },

    module:{
     
        rules:[
                {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"]                    
                },
                {
                    test:/\.css$/,
                    use:["style-loader","css-loader"]
                },

                {
                    test:/\.(html)$/,
                    use:{
                        loader:"html-loader"
                    }

                }
        ]
    },
    plugins:[
        new HTMLWEBPACKPLUGIN({
            template:"./src/index.html",
            filename:"./index.html"
        })
    ]
}