# prbot

Module to get open PRs from GitHub API.
Useful for things like a recurring Slack notification.

--------

## Installation

`npm i prbot`

## Usage

**DOESN'T WORK YET**

```javascript
const prs = require('prbot')
const config = {
  api: '', // github enterprise url, or defaults to api.github.com
  user: '', // user or org slug. example: zacanger
  token: '', // github access token, see below
}

const results = prs(config)()
console.log(JSON.stringify(results, null, 2))
```

#### Token

Go to <https://github.com/settings/tokens> and get a token that allows user read
access. If you're setting this up for an org, allow org read access.

## License

[MIT](./LICENSE.md)
