# Quadratic Equation Solver

This is the first lab for SDM which allow us to solve quadratic equations faster

## Install


1. Clone repository
```bash
  git clone https://github.com/danilbezus/FirstLab_SDM
```
2. Open directory
```bash
  cd FirstLab_SDM
```
4. Install NPM packages:
```bash
  npm install
```
5. Start the application:
For interactive mode
```bash
  node main.js
```

And

For non-interactive
```bash
  node index.js  text.txt
```

## How to use

Here is two variation of program:
1. Interactive
2. Non-interactive

Main script will give you menu with options

In interactive variation program will ask you to input values

```
a = 0
Error. a cannot be 0
a = 5
b = 9
c = -19
Equation is: (5) x^2 + (9) x + (-19) = 0
There are 2 roots
x1 = -3.047091055358389, x2 = 1.2470910553583887
```

In noninteractive you need to have file with numbers which will satisfy this regex: "\d\s\d\s\d\n". Example: 10 5 4

```
Equation is: (10) x^2 + (5) x + (4) = 0
There are 0 roots
```

[revert commit](https://github.com/danilbezus/FirstLab_SDM/commit/f940d0dd9762fe7d9658e8467a9a5cb410722a5a)
