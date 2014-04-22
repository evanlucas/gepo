var should = require('should')
var repo = require('./')

describe('gepo', function() {
  it('should work with ssh://', function() {
    var input = 'ssh://git@github.com/evanlucas/gitrepo.git'
    var out = repo(input)
    out.should.equal('https://github.com/evanlucas/gitrepo')

    input = 'ssh://git@blahblah.com/evan/gitrepo.git'
    out = repo(input)
    out.should.equal('http://blahblah.com/evan/gitrepo')

    input = 'git@github.com:evanlucas/gitrepo.git'
    out = repo(input)
    out.should.equal('https://github.com/evanlucas/gitrepo')
  })

  it('should work with http://', function() {
    var input = 'http://evan:blah@github.com/evanlucas/gitrepo.git'
    var out = repo(input)
    out.should.equal('https://github.com/evanlucas/gitrepo')

    input = 'http://blahblah.com/evan/gitrepo'
    out = repo(input)
    out.should.equal('http://blahblah.com/evan/gitrepo')
  })

  it('should work with https://', function() {
    var input = 'https://evan:blah@github.com/evanlucas/gitrepo.git'
    var out = repo(input)
    out.should.equal('https://github.com/evanlucas/gitrepo')

    input = 'https://blahblah.com/evan/gitrepo'
    out = repo(input)
    out.should.equal('https://blahblah.com/evan/gitrepo')
  })

  it('should work with git://', function() {
    var input = 'git://github.com/evanlucas/gitrepo.git'
    var out = repo(input)
    out.should.equal('https://github.com/evanlucas/gitrepo')

    input = 'git://blahblah.com/evan/gitrepo.git'
    out = repo(input)
    out.should.equal('http://blahblah.com/evan/gitrepo')
  })

  it('should work with ftp://', function() {
    var input = 'ftp://git.curapps.com/evan/gitrepo.git'
    var out = repo(input)
    out.should.equal('http://git.curapps.com/evan/gitrepo')
  })

  it('should work with ftps://', function() {
    var input = 'ftps://git.curapps.com/evan/gitrepo.git'
    var out = repo(input)
    out.should.equal('https://git.curapps.com/evan/gitrepo')
  })

  it('should work with rsync://', function() {
    var input = 'rsync://git.curapps.com/evan/gitrepo.git'
    var out = repo(input)
    out.should.equal('http://git.curapps.com/evan/gitrepo')
  })

  it('should return undefined with null', function() {
    var input = repo(null)
    should.equal(input, undefined)
  })

  it('should return undefined with no args', function() {
    var input = repo()
    should.equal(input, undefined)
  })

  it('should return undefined if an empty string is passed', function() {
    var input = repo('')
    should.equal(input, undefined)
  })
})
