# Playground

A collection of code snippets, short tutorials, and small programs for various programming languages:

* c
* fortran
* shell/bash/unix/linux
* python
* javascript

### Notes on c

Requirements
```
$ sudo apt-get install gcc
$ sudo apt-get install g++
```

hello.c
```
#include <stdio.h>
main()
{
  printf("Hello world!");
}
```

Compiling using gcc and running
```
$ gcc hello.c -o hello
$ ./hello
Hello world!
```

### Notes on fortran

Requirements
```
$ sudo apt-get install gfortran
```

hello.f90
```
program hello

print *, "Hello world!"
```

Compiling using gfortran and running
```
$ gfortran hello.f90 -o hello
$ ./hello
Hello world!
```

### Notes on shell/bash/unix/linux

### Notes on python

hello.py
```
print("Hello world!")
```

Start a local server
```
$ python -m http.server
```

Running Flask in debug mode so code changes can be viewed immediately
```
if __name__ == "__main__":
    app.run(debug=True)
```

Decorators - take a function as a parameter, do something with that function, and then returns a function

Decorators @syntax - sugar to sweeten a function
```
def func(x, y):
    return {"result": x + y}
func = as_json(func)  # sending a function in as an argument and replacing the original function with the function being returned by the as_json function

OR

@as_json
def func(x, y):
    return {"result": x + y}

```

### Notes on javascript

hello.js
```
console.log("Hello World!")
```

---
### Resources

#### Python
* pytest - http://pytest.org/latest/
* Click - http://click.pocoo.org/4/
* Jinja2 - http://jinja.pocoo.org/
* Flask - http://flask.pocoo.org/
    * Quickstart - http://flask.pocoo.org/docs/0.10/quickstart/#quickstart

#### Javascript
* Leaftlet map tile providers - http://leaflet-extras.github.io/leaflet-providers/preview/index.html
