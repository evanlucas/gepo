# gepo

[![build status](https://circleci.com/gh/evanlucas/gepo.png?circle-token=191d7d2031ed9feaa5b202e5b1725e017bf15d63)](https://circleci.com/gh/evanlucas/gepo)
[![Coverage Status](https://coveralls.io/repos/evanlucas/gepo/badge.png)](https://coveralls.io/r/evanlucas/gepo)

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
