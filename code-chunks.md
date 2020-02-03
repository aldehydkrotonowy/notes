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



```js
///https://github.com/victorqribeiro/plot/blob/master/js/main.js
const canvas = document.getElementById('canvas');
canvas.width = w = innerWidth;
canvas.height = h = innerHeight;
const ctx = canvas.getContext('2d');
const w2 = w>>1, h2 = h>>1;

const plot = y => {
	ctx.clearRect(0,0,w,h)
	ctx.save()
	ctx.translate(w2,h2)
	ctx.beginPath()
	ctx.moveTo(-w2,0)
	ctx.lineTo(w2,0)
	ctx.strokeStyle = "gray"
	ctx.stroke()
	ctx.fillText("x",w2-10,10)
	ctx.beginPath()
	ctx.moveTo(0,-h2)
	ctx.lineTo(0,h2)
	ctx.stroke()
	ctx.fillText("y",10,-h2+10)
	ctx.beginPath()
	for(let i = -w2; i < w2; i++)
		if( i == -w2 )
			ctx.moveTo(i,-y(i));
		else
			ctx.lineTo(i,-y(i));
	ctx.strokeStyle = 'black'
	ctx.stroke()
	ctx.restore()
}

const y = x => eval(document.getElementById('x').value) // x is an input element

document.getElementById('x').addEventListener("keydown", e => {
	if(e.keyCode == 13)
		plot(y)
})

document.getElementById('x').addEventListener("change", e => plot(y) )

plot(y)
```



accent
```js
import React from "react";
import uuid from 'uuid';
import "./styles.css";
const tstData = [
  {
    "index": 0,
    "guid": "38a4c88b-9f37-4765-a86d-3153edd9dd50",
    "isActive": false,
    "balance": "$1,472.51",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "blue",
    "name": "Ball Black",
    "sizeCurve": "s-6-l",
    "entities": [
      {
        "size": "XL",
        "percent": 72
      },
      {
        "size": "XL",
        "percent": 11
      },
      {
        "size": "S",
        "percent": 95
      },
      {
        "size": "S",
        "percent": 86
      },
      {
        "size": "L",
        "percent": 98
      },
      {
        "size": "XL",
        "percent": 44
      }
    ]
  },
  {
    "index": 1,
    "guid": "d0ce68ce-b78c-46d2-8005-162c63cde8e5",
    "isActive": true,
    "balance": "$1,880.03",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Mclean Everett",
    "sizeCurve": "s-6-l",
    "entities": [
      {
        "size": "XXX",
        "percent": 23
      },
      {
        "size": "S",
        "percent": 13
      },
      {
        "size": "XXX",
        "percent": 23
      },
      {
        "size": "S",
        "percent": 61
      },
      {
        "size": "XXX",
        "percent": 5
      },
      {
        "size": "L",
        "percent": 48
      },
      {
        "size": "L",
        "percent": 31
      },
      {
        "size": "S",
        "percent": 73
      }
    ]
  }
]

const prepareRow = ({fromObj, orderUUID,rowUUID}) => {
  return Object.entries(fromObj)
    .map(([key,value]) => {
      return {
        field:key,
        value,
        orderUUID,
        rowUUID,
        cellUUID: `f:${orderUUID}-row:${rowUUID}-col=${key}`
      }
    })
  }

export default function App() {

  const tableData = tstData.reduce((acc,group,parentIndex) => {
    const orderUUID= parentIndex;
    const rowUUID = 0;

    const parentRow = prepareRow({fromObj:group,orderUUID,rowUUID});

    const colorRows = group.entities.map((entity, entityIndex)=>{
      const colorRow = prepareRow({fromObj:entity,rowUUID:rowUUID+entityIndex+1,orderUUID});
      return colorRow;
    })

    const rowGroup = [];
    rowGroup.push(parentRow);
    // console.log(parentRow,colorRows)
    colorRows.map(cr => rowGroup.push(cr));

    acc.push(rowGroup)
    return acc;
  },[]).flat();

  
  console.log(tableData)
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const a = [[[{oko:'tdte'}]], []];
console.log(a[0][0][0].oko)
const o = {
  parent: {
    rowId: {
      cellID: {}
    }
  }
}

const k = [
  [{},{},{}],
  [{},{},{}],
  [{},{},{}],
]
```