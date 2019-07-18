### Markov Decision Process
A Markov Decision Process  **(MDP)** is a discrete time stochastic control process. At each time step, the process is in some state *s*, and the decision maker may choose any action *a* that is available in state *s*. Then the process responds at the next time step by  randomly moving into a new state *s’*, and giving the decision maker a corresponding reward *Ra(s, s’)*. The probability that the process moves into state *s’* is influenced by the chosen action *a*. There is function *Pa(s, s’)* which describes such transition. Thus the next state depends on the current state and the decision maker action but nothing more. For given *s* and *a* is conditionally independent of all previous states and actions. This condition is called Markov property. **MDPs** are extension of Markov chains; the difference here is presence of action (allowing choice) and reward (giving motivation). 

### Backus–Naur form
In computer science, *Backus–Naur* form or Backus normal form (**BNF**) is a notation technique for context-free grammars, often used to describe the syntax of languages used in computing, such as:
- computer programming languages,
- document formats,
- instruction sets,
- communication protocols
- etc...

#### Context Free Gramar

*A grammar is context-free if all the syntax rules apply regardless of the symbols before or after (the context).*

a **gramar** consists of:
- a set of variables (also called nonterminals), one of which is designated the start variable; It is customary to use pper-case etters for variables
- a set of terminals (from the alphabet)
- a list of productions (also called rules)

Helpfull therm used in talkin about BNF:

**Nonterminal Symbols**: anything that is defined on the left-side of some production.

# Vim

### select
v0 - Select from cursor to first column of the line:
v^ - Select from cursor to first printable character of the line:
v$ - Select from cursor to end of the line:
ve - Select from cursor to end of the word:
vb - Select from cursor to beginning of the word:
vf( - Select from cursor to the next opening parenthesis on the line (inclusive):
vT" - Select from cursor to the previous double quote on the line (exclusive):
v/foo<CR> - Select from cursor to the next occurence of foo in the buffer (always exclusive):
v?bar<CR> - Select from cursor to previous occurence of bar in the buffer (always exclusive):
viw - Select the whole word under cursor:
vi( (or vib) - Select everything between a pair of parenthesis:
vi{ (or viB) - Select the body of a function:
vis - Select a whole sentence:
vip - Select a whole paragraph:
For even more, see :help motion.txt.






https://www.youtube.com/watch?v=NO2DaxhoWHk


eslint prettier eslint-config-airbnb eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y

{
	"extends": ["airbnb", "prettier", "prettier/react"],
	"plugins": ["prettier"]
	"parser": "babel-eslint",
	"parserOptions":{
		"ecmaVersion": 2016,
		"sourceType": "module"
		ecmaFeatures: {
			"jsx":true
		}
	}
	"env":{
		"es6":true,
		"browser":true,
		"node":true
	},
	"rules": {
		"react/jsx-filename-extension": [1, { "exte...tutaj zaslonięte przez prowadzącego
	}
}



https://github.com/ramazanguclu/Create-React-App-Airbnb-Eslint-Integration
