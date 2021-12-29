# User
Represents a user on Discord server.
<toc />

## Properties

### .id
User id.

**Type: Snowflake**


### .username
User username

**Type: string**


### .tag
User tag like `username#0000`

**Type: string**

### .isBot
User is bot.

**Type: boolean**

### .premiumSince
Date since which the user is premium.

**Type: [DateTime](https://moment.github.io/luxon/api-docs/index.html#datetime)**

### .isVerified
User is verified.

**Type: boolean**

### .hasMfaEnabled
User has MFA to `enabled`..

**Type: boolean**


### .flags
User flags.

**Type: number**


### .email
User email address.

**Type: ?string**


### .avatar
User avatar.

**Type: ?string**

### .banner
User banner.

**Type: ?string**


## Methods

### .getDefaultAvatarUrl()
Return user default avatar url.

**Returns :** `string`


### .getAvatarUrl(value)
Return user custom avatar url.

**Returns :** `Promise<void>`


### .getBannerUrl(format, size, dynamic)
Return user banner url.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| format     | string  |    ❌     | `webp`, `png`, `jpeg`, `jpg` |
| size     | number  |    ✔     | New guild description |
| dynamic     | boolean  |    ✔     | New guild description |

**Returns :** `Promise<string | null>`

