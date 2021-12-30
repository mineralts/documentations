# Guild
Represents a guild (or a server) on Discord.
<toc />

## Properties

### .id
The guild's id.

**Type: Snowflake**


### .name
The guild's name.

**Type: string**


### .icon
The guild's icon.

**Type: ?string**


### .banner
The guild's banner.

**Type: ?string**


### .splash
The hash of the guild invite splash image.

**Type: ?string**


### .description
The description of the guild, if any.

**Type: ?string**


### .premiumTier
The premium tier of this guild.

**Type: ?number**


### .premiumSubscriptionCount
The total number of boosts for this server.

**Type: number**


### .systemChannelFlags
The value set for the guild's system channel flags.

**Type: number**


### .explicitContentFilter
The explicit content filter level of the guild.

**Type: number**


### .region
Region of the guild.

**Type: Region**


### .isLazy
Lazy-load for unavailable guild, guild became available, or user joined a new guild.

**Type: boolean**


### .applicationId
Id of the bot/OAuth2 application for this discord integration.

**Type: ?string**


### .isNSFW
Id of the bot/OAuth2 application for this discord integration.

**Type: boolean**


### .memberCount
The full amount of members in this guild.

**Type: number**


### .roles
Roles contained in this guild.

**Type: GuildRoleManager**


### .stageInstances
Roles contained in this guild.

**Type: []**


### .guildHashes

**Type: GuildHashes**


### .roles
Roles contained in this guild.

**Type: GuildRoleManager**


### .afkChannelId
The id of the voice channel where AFK members are moved.

**Type: Snowflake**


### .publicUpdateChannelId
The community updates channel's id for the guild.

**Type: Snowflake**


### .channels
A manager of the channels belonging to this guild.

**Type: GuildChannelManager**


### .verificationLevel
The verification level of the guild.

**Type: number**


### .hasPremiumProgressBarEnabled
Whether this guild has its premium (boost) progress bar enabled.

**Type: boolean**


### .features
An array of features available to this guild.

**Type: GuildFeature[]**


### .stickers
A manager of the stickers belonging to this guild.

**Type: GuildStickerManager**


### .members
A manager of the members belonging to this guild.

::: warning
Doesn't contain bot accounts.
:::

**Type: GuildMemberManager**


### .bots
A manager of the bots belonging to this guild.

**Type: GuildMemberManager**


### .ruleChannelId
The rules channel's id for the guild.

**Type: Snowflake**


### .guildScheduledEvents
List of currently planned events for the guild.

**Type: Snowflake**


### .defaultMessageNotifications
The default message notification level of the guild.

**Type: NotificationLevel**


### .MFALevel
The required MFA level for this guild.

**Type: number**


### .threads
Represents a thread channel for this guild.

**Type: GuildThreadManager**


### .maxMemberSize
Max member length for this guild.

**Type: number**


### .emojis
A manager of the emojis belonging to this guild.

**Type: GuildEmojiManager**


### .defaultLang
Default language of the guild.

**Type: string**


### .ownerId
Owner id of the guild.

**Type: string**


### .owner
Owner member of the guild.

**Type: string**


### .maxVideoChannelUsers
The maximum amount of users in a video channel of the guild.

**Type: number**


### .registeredCommandCount
The maximum amount of registered commands of the guild.

**Type: number**


### .applicationCommandCount
The full amount of registered commands (globally).

**Type: number**


### .afkTimeout
The time in seconds before a user is counted as "away from keyboard".

**Type: number**


### .systemChannelId
The system channel's id.

**Type: ?Snowflake**


### .vanityUrlCode
The vanity invite code of the guild, if any.

**Type: ?string**


### .embeddedActivities

**Type: ?string**


### .invites
A manager of the invites of this guild.

**Type: InviteManager**


## Methods


### .setName(value)
Edits the name of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| value     | string  |    ❌     | New guild name |

**Returns :** `Promise<void>`


### .setPreferredLocale(region)
Edits the name of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| region     | Region  |     ❌    | Used region |

**Returns :** `Promise<void>`


### .leave()
Leave the guild.

**Returns :** `Promise<void>`


### .setAfkChannel(voiceChannel)
Define the afk channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| voiceChannel     | VoiceChannel, Snowflake  |    ❌     | Target channel |

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setAfkChannel('925390276091056200')
// or
const voiceChannel = guild.channels.cache.get('925390276091056200')
await guild.setAfkChannel(voiceChannel)
```


### .setVerificationLevel(level)
Define verification level of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| level     | VerificationLevel  |    ❌     | `NONE`, `LOW`, `MEDIUM`, `HIGH`, `VERY_HIGH` |

**Returns :** `Promise<void>`


### .setNotificationLevel(level)
Define notification level of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| level     | NotificationLevel  |    ❌     | `ALL_MESSAGES`, `ONLY_MENTIONS` |

**Returns :** `Promise<void>`

### .explicitContentFilter(level)
Define nsfw level of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| level     | ExplicitContentLevel  |    ❌     | `DISABLED`, `MEMBERS_WITHOUT_ROLES`, `ALL_MEMBERS` |

**Returns :** `Promise<void>`


### .setAfkTimeout(level)
Define afk timeout level of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| level     | number  |     ❌    | Duration of the timeout |

**Returns :** `Promise<void>`


### .setIcon(path)
Define guild's icon.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| path     | string  |     ❌    | Path to your asset |

::: warning
If you want to use `.gif` file, your discord server must have the `ANIMATED_ICON` feature.
:::

**Returns :** `Promise<void>`


### .removeIcon()
Remove guild icon's.

**Returns :** `Promise<void>`


### .setOwner(member)
Change guild owner's.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| member     | GuildMember, Snowflake  |     ❌    | Target member |

::: warning
The owner of the discord server can only be changed if the current owner is a bot.
:::

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setOwner('240561194958716928')
// or
const guildMember = guild.members.cache.get('240561194958716928')
await guild.setOwner(guildMember)
```

### .setSplash(path)
Define guild splash overlay's.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| path     | string  |     ❌    | Path to your asset |

::: warning
The discord server must have the `INVITE_SPLASH` feature.
:::

**Returns :** `Promise<void>`


### .setDiscoverySplash(path)
Define guild's discovery splash overlay.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| path     | string  |     ❌    | Path to your asset |

::: warning
The discord server must have the `DISCOVERABLE` feature.
:::

**Returns :** `Promise<void>`


### .setBanner(path)
Define guild splash overlay's.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| path     | string  |     ❌    | Path to your asset |

::: warning
The discord server must have the `DISCOVERABLE` feature.
:::

**Returns :** `Promise<void>`

### .setSystemChannel(channel)
Define the system channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| channel     | TextChannel, Snowflake  |    ❌     | Target channel |

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setSystemChannel('925390276091056200')
// or
const textChannel = guild.channels.cache.get('925390276091056200')
await guild.setSystemChannel(voiceChannel)
```

### .setSystemChannelFlag(flag)
Define the flag system channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| flag     | TextChannel, Snowflake  |    ❌     | `SUPPRESS_JOIN_NOTIFICATIONS`, `SUPPRESS_PREMIUM_SUBSCRIPTIONS`, `SUPPRESS_GUILD_REMINDER_NOTIFICATIONS` |

**Returns :** `Promise<void>`


### .setRuleChannel(channel)
Define the rules channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| channel     | TextChannel, Snowflake  |    ❌     | Target channel |

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setRuleChannel('925390276091056200')
// or
const textChannel = guild.channels.cache.get('925390276091056200')
await guild.setRuleChannel(voiceChannel)
```


### .setPublicUpdateChannel(channel)
Define the public update channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| channel     | TextChannel, Snowflake  |    ❌     | Target channel |

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setPublicUpdateChannel('925390276091056200')
// or
const textChannel = guild.channels.cache.get('925390276091056200')
await guild.setPublicUpdateChannel(voiceChannel)
```


### .setDescription(value)
Edits the description of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| value     | string  |    ❌     | New guild description |

**Returns :** `Promise<void>`


### .registerCommands(...commands)
Register guild's commands.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| commands     | Command[]  |    ❌     | Slash command |

**Returns :** `Promise<void[]>`
