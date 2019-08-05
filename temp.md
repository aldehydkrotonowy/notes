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

--------------

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



npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

vscode setup
"prettier.eslintIntegration": true,





  "url"			no filter
  "style"		style
  "color"		color
  "order"		entityFrom,entityTo,entityValue
  "orderType",  	orderTypes
  "orderStatus",	orderStatuses
  "fashionLevel",  	fashionLevels
  "collectionName",	collectionName
  "season",		season
  "intake",		intakes
  "subclass",		subclasses
  "supplier",		supplierName
  "line",		lines
  "productType",	productTypes
  "vpn",		vpns
  "transportType", 	transportTypes
  "incoterms",		incoterms
  "packagingType",	packingTypes
  "agentName",		agent
  "buyerName",		buyer
  "modelName",		modelName
  "pickupDate",		pickupDateEndWeek
			pickupDateFormat
			pickupDateFrom
			pickupDateStartWeek
			pickupDateTo
			pickupDateValue
  "plannedDeliveryDate",plannedDeliveryDateEndWeek
			plannedDeliveryDateFormat
			plannedDeliveryDateFrom
			plannedDeliveryDateStartWeek
			plannedDeliveryDateTo
			plannedDeliveryDateValue
  "actualDeliveryDate",	actualDeliveryDateEndWeek
			actualDeliveryDateFormat
			actualDeliveryDateFrom
			actualDeliveryDateStartWeek
			actualDeliveryDateTo
			actualDeliveryDateValue
  "plannedDeliveryWeek",plannedDeliveryWeekFrom
			plannedDeliveryWeekTo
			plannedDeliveryWeekValue
  "costPrice",		costPriceFrom
			costPriceTo
			costPriceValue
  "sc",
  "pricePoint",		pricePoints
  "imuPercentPln",	imuFrom
			imuTo
			imuValue
  "orderQty"		no filter







  kolumny bez filtrów:
	season -> brak na confluence
	quantity qty -> nie ma filtrów
	supplier name - na razie nie działa endpoint

brak słowników do 
	model name --> model name jest zlepkiem style i ....?
	style - brak endpointu, podobno dużo wpisów
	collection - brak endpointu



### tatry
- noclegi interesujące lokacje
- [baza górołaza](https://www.noclegowo.pl/zakopane/1918-baza-gorolaza-tanie-noclegi/)

- noclegi serwisy
- [nocowanie.pl](https://www.nocowanie.pl/?command=search_location&region=22&q=Tatry&geo=1&miejsca=1&miejsca_dorosli=1&cena%5Bdo%5D=70&odleglosc%5Bdo%5D=3&kat%5B%5D=3&opinie=0&sortuj=)
- [pokoje](https://noclegi.pl/pokoje-goscinne-ula-i-jarek-gazda-zakopane?adults=1&rooms=1&checkin=2019-08-12&checkout=2019-08-13)
- [noclegowo](https://www.noclegowo.pl/noclegi/tatry-i-podhale/kwatery-prywatne/?date_from=2019-08-12&date_to=2019-08-17&nb_adults=1&p=4&pmax=80)
