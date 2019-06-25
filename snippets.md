### Code snippets


### iframes, sandboxing and postMessage API example from
[this link](https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/)
```html
<!-- frame.html -->
<!DOCTYPE html>
<html>
 <head>
   <title>Evalbox's Frame</title>
   <script>
     window.addEventListener('message', function (e) {
       var mainWindow = e.source;
       var result = '';
       try {
         result = eval(e.data);
       } catch (e) {
         result = 'eval() threw an exception.';
       }
       mainWindow.postMessage(result, event.origin);
     });
   </script>
 </head>
</html>
```

### Jquery each()
```
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

### Error handling wrapper, fn is an async function
```javascript
 function catchAsyncErrors(fn) {
    return (req, res, next) => {
        const routePromise = fn(req, res, next);
        if (routePromise.catch) {
            routePromise.catch(err => next(err));
        }
    }
}
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