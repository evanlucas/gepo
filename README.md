# gepo

[![Build Status](https://travis-ci.org/evanlucas/gepo.svg)](https://travis-ci.org/evanlucas/gepo)

Get a browser-compatible url from a git remote url

### Install

```bash
$ npm install gepo
```

### Usage

```js
var repo = require('gepo')
var input = 'git@github.com:evanlucas/gepo.git'
var out = repo(input)
// => 'https://github.com/evanlucas/gepo'
```

### Global Install

```bash
$ npm install gepo
$ gepo git@github.com:evanlucas/gepo.git
# => 'https://github.com/evanlucas/gepo'
```

### Test

```bash
$ npm test
```

### Coverage

```bash
$ npm run cover
```

### License

MIT (See `LICENSE` for more info)

### Author

Evan Lucas
