var url = require('url')
  , util = require('util')

module.exports = function(u) {
  try {
    var idx = u.indexOf('@')
    if (idx !== -1) {
      u = u.slice(idx+1).replace(/:([^\d]+)/, '/$1')
    }
    u = url.parse(u)
    var protocol = u.protocol === 'https:' || u.protocol === 'ftps:'
                 ? 'https:'
                 : 'http:'
    if (u.href && ~u.href.indexOf('github'))
      protocol = 'https:'
    return util.format('%s//%s%s',
                       protocol,
                       u.host || '',
                       u.path.replace(/\.git$/, ''))
  }

  catch (e) {}
}
