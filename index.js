const fetch = require('node-fetch')

const handleConfig = (userConfig = {}) =>
  Object.assign({ api: 'https://api.github.com' }, userConfig)

const format = (prs = {}) =>
  prs.items.map((pr) => {
    const { url, labels, user: { login }, title } = pr
    return { url, labels, user: login, title }
  })

const search = async (config) => {
  try {
    const url = config.api.replace(/\/$/, '') +
      '/search/issues?q=type:pr+state:open' +
      '+user:' + config.user
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${config.token}`,
        Accept: 'application/json'
      }
    })
    const body = await res.json()
    return format(body)
  } catch (e) {
    throw e
  }
}

module.exports = (config = {}) => search(handleConfig(config))
