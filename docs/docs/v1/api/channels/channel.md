# Channel
Represents your bot on Discord server.
<toc />

## Properties

### .id
Channel id.

**Type: Snowflake**


### .type
Type of channel.

**Type: ChannelTypeResolvable**


### .name
Name of channel.

**Type: string**


### .guildId
Id of guild channel.

**Type: Snowflake**


### .guild
Guild channel.

**Type: Guild | undefined**


### .parentId
Id of parent category.

**Type: Snowflake**


### .parent
Parent guild channel.

**Type: CategoryChannel**


### .position
Position of the channel.

**Type: number**


## Methods

### .isText()
Check if channel instance of TextChannel

**Returns :** `Promise<void>`


### .isVoice()
Check if channel instance of VoiceChannel

**Returns :** `Promise<void>`


### .isNews()
Check if channel instance of NewsChannel

**Returns :** `Promise<void>`


### .isCategory()
Check if channel instance of CategoryChannel

**Returns :** `Promise<void>`


### .isStage()
Check if channel instance of StageChannel

**Returns :** `Promise<void>`


### .setParent(channel)
Define the parent channel of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| channel     | CategoryChannel, Snowflake  |    ❌     | Target channel |

**Returns :** `Promise<void>`

**Exemple**
```ts
await guild.setParent('925390276091056200')
// or
const voiceChannel = guild.channels.cache.get('925390276091056200')
await guild.setParent(voiceChannel)
```


### .setName(value)
Define the channel name of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| value     | string  |    ❌     | Channel name |

**Returns :** `Promise<void>`


### .setPosition(value)
Define the channel position of the guild.

| Parameter | Type    | Optional | Description |
| --------- | ------- | -------- | ----------- |
| value     | number  |    ❌     | Channel position |

**Returns :** `Promise<void>`


### .delete(value)
Delete the channel from the guild.

**Returns :** `Promise<void>`