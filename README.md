# Synchronous-vs-Asynchronous

# Introduction
In programming, synchronous operations block instructions until the task is completed, while asynchronous operations can execute without blocking other operations. Asynchronous operations are generally completed by firing an event or by calling a provided callback function.

# Breaking Down JavaScript
Javascript has a:

## Callstack
##  WebAPI
## Event Loop
## Callback Queue
## The Callstack is the immediate work your program will do.

# Synchronous Operations
Synchronous Operations that run block the next operation until it completes. Blocking operations may not always seem like an issue because computers are fast. 
Making requests to your own services like a database can have the same effect. A common webpage will have many requests to make under unique circumstances, and as a developer, you'll want those requests to start as soon as possible but still allow the rest of the page to load what it can to enable the requests.
This is when asynchronous operations become powerful.

# Asynchronous Operations
Asynchronous Operations happen independently from the main program flow. A common use for asynchronous code is querying a database and using the result. Passing in a callback is a way to interact with the response or error.
