# Vim

## tutorials
- [Your first VimRC](https://www.youtube.com/watch?v=n9k9scbTuvQ)
- [Your first VimRC - update](https://www.youtube.com/watch?v=-X6rEdZolTA)
### select

V       - selects entire lines 
v       - selects range of text
ctrl-v  - selects columns

- v0 - Select from cursor to first column of the line:
- v^ - Select from cursor to first printable character of the line:
- v$ - Select from cursor to end of the line:
- ve - Select from cursor to end of the word:
- vb - Select from cursor to beginning of the word:
- vf( - Select from cursor to the next opening parenthesis on the line (inclusive):
- vT" - Select from cursor to the previous double quote on the line (exclusive):
- v/foo<CR> - Select from cursor to the next occurence of foo in the buffer (always exclusive):
- v?bar<CR> - Select from cursor to previous occurence of bar in the buffer (always exclusive):
- viw - Select the whole word under cursor:
- vi( (or vib) - Select everything between a pair of parenthesis:
- vi{ (or viB) - Select the body of a function:
- vis - Select a whole sentence:
- vip - Select a whole paragraph:
- For even more, see :help motion.txt.

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







### Vim config
---------------------------------------------------------------------------------------------
syntax on

set noerrorbells
set tabstop=4 "tabs are 4 characters long 
set softtabstop=4 
set shiftwidth=4
"set expandtab "expand tab to space
set smartindent
set nu
set nowrap
set smartcase "case sensitive searching?
set noswapfile
set nobackup
set encoding=utf-8
set undodir=~/.vim/undodir
set undofile
set incsearch "incremental search
set cursorline
set colorcolumn=80
highlight ColorColumn ctermbg=0 guibg=lightgrey
colorscheme gruvbox
set background=dark

"Full path fuzzy file, buffer, mru, tag, ... finder for Vim.
set runtimepath^=~/.vim/bundle/ctrlp.vim



call plug#begin('~/.vim/plugged')

Plug 'rust-lang/rust.vim'
Plug 'morhetz/gruvbox'
Plug 'jremmen/vim-ripgrep'
Plug 'tpope/vim-fugitive'
Plug 'vim-utils/vim-man'
"Plug 'lyuts/vim-rtags' "for c++
Plug 'mbbill/undotree'

call plug#end()


if executable('rg')
	let g:rg_derive_root='true'
endif

let mapleader=" "
"for file tree
let g:netrw_browse_split=2
let g:netrw_banner=0
let g:ctrlp_use_caching=0
let g:netrw_winsize=25
---------------------------------------------------------------------------------------------