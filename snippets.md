### Code snippets


### Jquery each()
```javascript
$.each( $('table', this.$el), function( index, table ){
  var rowspan = 0;
  $.each( $('tr', table), function( index, tr ){
    if( rowspan > 0 ){
      $('td:first-child', tr).addClass("not-first-child");
      rowspan = (rowspan>0) ? rowspan-1 : 0;
    } else if( $('td:first-child', tr).attr("rowspan") > 0){
      rowspan = parseInt( $('td:first-child', tr).attr("rowspan")) - 1;
    }
  });
});
```

### Express, error handling traditional style
Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function (which is the string "done" in our case).
```javascript
router.get('/user/:id', async (req, res, next) => {
  try {
    const user = await getUserFromDb({ id: req.params.id })
    res.json(user);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
})
```

### dynamic import
source: [dynamic import](https://developers.google.com/web/updates/2017/11/dynamic-import)
```javascript
<!DOCTYPE html>
<meta charset="utf-8">
<title>My library</title>
<nav>
  <a href="books.html" data-entry-module="books">Books</a>
  <a href="movies.html" data-entry-module="movies">Movies</a>
  <a href="video-games.html" data-entry-module="video-games">Video Games</a>
</nav>
<main>This is a placeholder for the content that will be loaded on-demand.</main>
<script>
  const main = document.querySelector('main');
  const links = document.querySelectorAll('nav > a');
  for (const link of links) {
    link.addEventListener('click', async (event) => {
      event.preventDefault();
      try {
        const module = await import(`/${link.dataset.entryModule}.mjs`);
        // The module exports a function named `loadPageInto`.
        module.loadPageInto(main);
      } catch (error) {
        main.textContent = error.message;
      }
    });
  }
</script>
```

### MinMax Recursion Problem
source: [from redit](https://www.reddit.com/r/javascript/comments/8gna7f/minmax_recursion_problem/)
```javascript

const newBoard = [["na", "na", "na"], ["na", "na", "na"], ["na", "na", "na"]];

myApp = Object.create(null);

myApp.player1 = "O"

myApp.ai = "X"

game(newBoard, "X")


function defaultDict(inputDict, i, values) {
  const dict = inputDict;
  if (dict[i] === undefined) {
    dict[i] = [values];
  } else {
    dict[i].push(values);
  }
  return dict;
}

function diagonalWin(diagonals) {
  const middleExists = diagonals.indexOf("11") !== -1;
  if (middleExists) {
    if (diagonals.indexOf("00") !== -1 && diagonals.indexOf("22") !== -1) {
      return true;
    } else if (diagonals.indexOf("20") !== -1 && diagonals.indexOf("02") !== -1) {
      return true;
    }
  }
  return false;
}

function checkWin(dict) {
  for (let i = 0; i < 3; i += 1) {
    if (dict[i] !== undefined) {
      if (dict[i].length === 3) {
        return true;
      }
    }
  }
  return false;
}

function checkWinType(states) {
  const rowWin = checkWin(states[0]);
  const colWin = checkWin(states[1]);
  const dwin = diagonalWin(states[2]);

  if (rowWin === true) {
    return [true, "rowWin"];
  } else if (colWin === true) {
    return [true, "colWin"];
  } else if (dwin === true) {
    return [true, "diaWin"];
  }
  return [false];
}

function isWin(state) {
  let rows = Object.create(null);
  let cols = Object.create(null);
  const diagonals = [];

  state.forEach(elem => {
    rows = defaultDict(rows, elem[0], [elem[0], elem[1]]);
    cols = defaultDict(cols, elem[1], [elem[0], elem[1]]);
    diagonals.push(`${elem[0]}${elem[1]}`);
  });
  return checkWinType([rows, cols, diagonals]);
}

function getBoardState(board) {
  const xPos = [];
  const oPos = [];
  const nullPos = [];

  for (let id = 0; id < board.length; id += 1) {
    const row = board[id];
    for (let space = 0; space < row.length; space += 1) {
      if (row[space] === "X") {
        xPos.push([id, space]);
      } else if (row[space] === "O") {
        oPos.push([id, space]);
      } else {
        nullPos.push([id, space]);
      }
    }
  }
  return [xPos, oPos, nullPos];
}

function gameCondition(theBoard) {
  const board = theBoard;
  const state = getBoardState(board);
  const condition = [isWin(state[0]), isWin(state[1]), state[2]];
  return condition;
}

function game(board, player) {
  const state = gameCondition(board);

  const positions = state[2];

  if (state[0][0]) {
    return { score: -10 };
  } else if (state[1][0]) {
    return { score: 10 };
  } else if (state[2].length === 0) {
    return { score: 0 };
  }

  const moves = [];

  for (let i = 0; i < positions.length; i += 1) {
    let result;
    let move;
    move = {};

    move.index = positions[i];
    const reset = board[positions[0][0]][positions[0][1]];
    board[positions[0][0]][positions[0][1]] = player;
    if (player === myApp.ai) {
      result = game(board, myApp.player1);
      console.log("MUST1", result);
      move.score = result.score;
    } else if (player === myApp.player1) {
      console.log("PLayer");
      result = game(board, myApp.ai);
      console.log("MUST2", result);
      move.score = result.score;
    }
    board[positions[0][0]][positions[0][1]] = reset;
    console.log(move);
    moves.push(move);
  }

  let bestMove;
  if (player === myApp.ai) {
    let bestScore = -10000;

    for (let i = 0; i < moves.length; i += 1) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = moves[i].index;
      }
    }
  } else {
    let bestScore = 10000;

    for (let i = 0; i < moves.length; i += 1) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = moves[i].index;
      }
    }
  }
  console.log("BestMove", bestMove);

  return bestMove;
}

function getBestMove(moves, player) {
  let bestScore = -10000;
  let bestMove = null;
  if (player === myApp.player1) {
    moves.forEach(move => {
      if (move[0].score > bestScore) {
        bestScore = move[0].score;
        bestMove = move[0].index;
      }
    });
  } else {
    bestScore = 10000;
    moves.forEach(move => {
      if (move[0].score < bestScore) {
        bestScore = move[0].score;
        bestMove = move[0].index;
      }
    });
  }
  return bestMove;
}
```

React menu
```javascript
import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Popper from '@material-ui/core/Popper';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  }
}))


export default function Navbar() {
  const classes = useStyles();

  const myref = useRef(null);
  const [open, setOpen] = React.useState(null);


  function handleMenu(event) {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            aria-label="Account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
            ref={myref}
          >
            lkasjfklwerwerwerwerwer
          </IconButton>
          <Popper id='simple-pop' open={open} anchorEl={myref.current} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper id="menu-list-grow">
                  <ClickAwayListener onClickAway={handleMenu}>
                    <MenuList>
                      <MenuItem onClick={handleMenu}>Profile</MenuItem>
                      <MenuItem onClick={handleMenu}>My account</MenuItem>
                      <MenuItem onClick={handleMenu}>Logout</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Toolbar>
      </AppBar>
    </div>
  )
}
```


### React custom routes with props
-[source](https://stackoverflow.com/questions/42253277/react-router-v4-how-to-get-current-route)
```javascript
import React from 'react';
import { Route } from 'react-router';

export const PropsRoute = ({ component: Component, ...props }) => (
  <Route
    { ...props }
    render={ renderProps => (<Component { ...renderProps } { ...props } />) }
  />
);

export default PropsRoute;
```
usage: (notice to get the route params (match.params) you can just use this component and those will be passed for you)
```javascript
import React from 'react';
import PropsRoute from 'src/components/routes/props-route';

export const someComponent = props => (<PropsRoute component={ Profile } />);
```
also notice that you could pass whatever extra props you want this way too
```javascript
<PropsRoute isFetching={ isFetchingProfile } title="User Profile" component={ Profile } />
```

### wyrażenia regularne
```javascript
const strings = ['11', '33.9-','33.3-','-33.8', '11-33', '11.', '44.-', '334.0-',
 '-3', '-3.', '-34.0', '3.-5.', '3.-4', '3-8.', '33.0-99.0']

strings.forEach(value => {
    let parts = value.split('-');
    let r = parts.reduce((acc, e) => {
      let i = e.match(/\d+\.(?![0-9])/g);
      if(i){
        acc.push(i.map(v => v.replace('.', '.0')))
      } else {
        acc.push(e)
      }
      // console.log({value,parts, i,e})
      return acc;
    }, []).join('-')
    console.log({value,r})
})
```

### how applay works
```javascript
Function.prototype.construct = function (aArgs) {
	const oNew = Object.create(this.prototype);
	console.log('create proto', this.prototype);
	this.apply(oNew, aArgs);// this: MyConstructor
	console.log('this is:', this);
	return oNew;
}

function MyConstructor() {
	const l = arguments.length;
	for (let i = 0; i < l; i++) {
		this['property' + i] = arguments[i];// this: myInstance
	}
	console.log('MyConstructor this is:', this)
}
const arr = [4, 'Hello', false];
const myInstance = MyConstructor.construct(arr);
console.log(myInstance);

// results
// create proto MyConstructor { }
// MyConstructor this is: MyConstructor { property0: 4, property1: 'Hello', property2: false }
// this is: function MyConstructor() {
// 	const l = arguments.length;
// 	for (let i = 0; i < l; i++) {
// 		this['property' + i] = arguments[i];
// 	}
// 	console.log('MyConstructor this is:', this)
// }
// MyConstructor { property0: 4, property1: 'Hello', property2: false }
```

### render props pattern

```javascript
import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <Amount>
      {amount => (
        <div>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </div>
      )}
    </Amount>
  );
}

const Amount = props => {
  const [amount, setAmount] = useState(0);

  const increase = () => setAmount(amount + 1);
  const decrease = () => setAmount(amount - 1);

  return (
    <>
      <button type="button" onClick={increase}>
        +
      </button>
      <button type="button" onClick={decrease}>
        -
      </button>
      {props.children(amount)}
    </>
  );
};

const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

### react slot pattern
```javascript
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const user = {
      name: 'Robin Wieruch',
      biography: 'Software Engineer ...',
      avatarUrl: logo,
    };

    return <User user={user} />;
  }
}

const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => (
  <p className="fat">{user.biography}</p>
);

export default App;
```

numbers with two decimals
```javascript
Number(Math.round(sanitizedCostPrice + 'e' + decimals) + 'e-' + decimals);
```


Immutably Rename Object Keys in Javascript
``` javascript
const renameProp = (  oldProp,    newProp,{ [oldProp]: old, ...others }) => ({
    [newProp]: old,
    ...others
})
```


```javascript
if (Object.values(payload).some(isNull)) return

map

//rawData
```json
[
  '{{repeat(2)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    sizeCurve: 's-6-l',
    sizeCurveDescription: [
      '{{repeat(1, 5)}}',
        {
          id: '{{objectId()}}',
          size: '{{random("M", "S", "XL", "L", "XXX")}}',
          percent: '{{integer(0, 100)}}'
        }
    ]
  }
]
```

```javascript
import data from './rawData';

console.log(data instanceof Array);
const after = data.reduce((rows, row) => {
	const newRows = row.sizeCurveDescription.map(curve => {
		const { size, percent } = curve;
		return {
			...row,
			size,
			percent
		}
	})
	return rows.concat(newRows);
}, [])

console.log(after);
```

React datapicker filter dates
```javascript
() => {
  const [startDate, setStartDate] = useState(null);
  //const a = ['2019-10-5','2019-10-8','2019-10-11''2019-10-15'];
  const isinRange = date => {
    return date.toLocaleDateString() === new Date('2019-10-15').toLocaleDateString();
  };
  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      filterDate={isinRange}
      placeholderText="Select a weekday"
    />
  );
};
````