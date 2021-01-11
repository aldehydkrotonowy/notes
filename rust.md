Windows instalation

change host triple to x86_64-pc-windows-gnu
if something wrong try:
*rustup set default-host x86_64-pc-windows-gnu*
[solution](https://github.com/rust-lang/rustup/issues/846)

To get started you need Cargo's bin directory (%USERPROFILE%.cargo\bin) in your PATH

complete rust project [frontend and backend](https://github.com/saschagrunert/webapp.rs/tree/rev1)



#### Other commands
cargo init projectName
cargo run
cargo build
cargo build --release


### Rust sourcecode
- [small rust-webserver](https://github.com/juli1/rust-webserver/tree/master/src) :gem:
- [web app in rust](https://github.com/saschagrunert/webapp.rs/tree/rev1)
- [A web application completely written in Rust](https://github.com/saschagrunert/webapp.rs/tree/rev1)

### Tutorials
- [Implementing TCP in Rust (part 1)](https://www.youtube.com/watch?v=bzja9fQWzdA) <img src="./images/youtube.png" width="auto" height="20">

### Official Rust Community Book
- [The Rust Programming Language](https://doc.rust-lang.org/stable/book/) :recycle: :book:
- [Tech Empower Web Framework Benchmarks](https://www.techempower.com/benchmarks/)

### rust-notes
- [In Rust, ordinary vectors are values](http://smallcultfollowing.com/babysteps/blog/2018/02/01/in-rust-ordinary-vectors-are-values/)

### Notes section
- [Procedural macro](https://blog.rust-lang.org/2018/12/21/Procedural-Macros-in-Rust-2018.html)
In Rust we have three types of macros: 
- [rust and web](http://www.arewewebyet.org/) - Are we web yet? Yes! And it's freaking fast!
- [Web Frameworks - list](http://www.arewewebyet.org/topics/frameworks/#pkg-rocket) - list of frameworks for serwer and browser 

#Rust web Frameworks
- **Tide** - A minimal and pragmatic Rust web application framework built for rapid development
- **Warp** - serve the web at warp speeds
- **Actic web** - is a powerful, pragmatic, and extremely fast web framework for Rust