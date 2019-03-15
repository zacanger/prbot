# get-open-pull-requests

Module to get open PRs from GitHub API.
Useful for things like a recurring Slack notification.

--------

## Installation

`npm i get-open-pull-requests`

## Usage

```javascript
const prs = require('get-open-pull-requests')
const config = {
  api: '', // github enterprise url, or defaults to api.github.com
  user: '', // user or org slug. example: zacanger
  token: '', // github access token, see below
}

prs(config).then((a) => JSON.stringify(a, null, 2)).then(console.log)
```

#### Token

Go to <https://github.com/settings/tokens> and get a token that allows user read
access. If you're setting this up for an org, allow org read access.

## License

[MIT](./LICENSE.md)
