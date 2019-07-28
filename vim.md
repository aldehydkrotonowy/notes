# Vim

### select

V       - selects entire lines 
v       - selects range of text
ctrl-v  - selects columns

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

# VScode

### fold
-fold
	Ctrl + Shift + [
-unfold
	Ctrl + Shift + ]

--fold all
	Ctrl + K, Ctrl + 0
unfold all
	Ctrl + K, Ctrl + J