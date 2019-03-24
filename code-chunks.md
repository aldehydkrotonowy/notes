### example webpack.config.js
From [this tutorial](https://medium.com/@estherfalayi/setting-up-webpack-for-bootstrap-4-and-font-awesome-eb276e04aaeb) 
```javascript
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');

const TransferWebpackPlugin = require('transfer-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/only-dev-server',
    'tether',
    'font-awesome/scss/font-awesome.scss',
    './client/app.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'build/', // Relative directory for base of server
    publicPath: '/',
    inline: true,
    port: process.env.PORT || 3000, // Port Number
    host: '127.0.0.1', // Change to '0.0.0.0' for external facing server
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      tether: 'tether',
      Tether: 'tether',
      'window.Tether': 'tether',
      Popper: ['popper.js', 'default'],
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    }),
    new ExtractTextPlugin('main.css'),
    new TransferWebpackPlugin([
      { from: 'client' },
    ])
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run post css actions
              options: {
                plugins() {
                  // post css plugins, can be exported to postcss.config.js
                  return [
                    precss,
                    autoprefixer
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles SASS to CSS
            }
          ]
        })
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000',
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=images/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      // font-awesome
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' }
        ]
      },

      // Bootstrap 4
      {
        test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
      }
    ]
  }
};
```

### Express and websocket example
client side HTML
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>WebScockets 101</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js"></script>
        <link href="/styles.css" rel="stylesheet" />
    </head>
    <body>

        <div id="mario-chat">
            <h2>Mario Chat</h2>
            <div id="chat-window">
                <div id="output"></div>
                <div id="feedback"></div>
            </div>
            <input id="handle" type="text" placeholder="Handle" />
            <input id="message" type="text" placeholder="Message" />
            <button id="send">Send</button>
        </div>


    </body>
    <script src="/chat.js"></script>
</html>
```

client side js
```javascript
// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output'),
      feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});
```

serwer side js
```javascript
var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
```