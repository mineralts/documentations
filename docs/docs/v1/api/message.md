# Message
Represents a message on Discord server.
<toc />

## Properties

### .id
Message id.

**Type: Snowflake**


### .type
Message type

**Types: number**


### .isPinned
Message pinned

**Type: boolean**


## Methods

### .crossPost(option)
Publie post other server


### .pin(option)
Message pin


### .unpin(option)
Message unpin


### .delete(option)
Message delete


### .edit(message)
Message edit

| Parameter | Type | Optional | Description |
| --------- | ---- | -------- | ----------- |
| message | MessageOption | ❌ | Edit message  |

### .reload()
Message reload


### .react(emoji)
Message react emoji

| Parameter | Type | Optional | Description |
| --------- | ---- | -------- | ----------- |
| emoji | Snowflake, Emoji | ❌ | Emoji  |


### .fetch()
Message fetch

