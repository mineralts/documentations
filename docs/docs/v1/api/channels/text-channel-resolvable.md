# TextChannelResolvable
**extends of [Channel](/docs/v1/api/channels/channel)**

Represents a guild text channel on Discord.
<toc />

## Properties

### .description
Description of this channel.

**Type: ?string**

### .lastMessageId
Last message id of this channel.

**Type: Snowflake**

### .lastMessage
Last message of this channel.

**Type: ?[Message](/docs/v1/api/messages/message)**

### .permissionOverwrites
Permissions of this channel.

**Type: Object**

### .cooldown
Cooldown of this channel.

**Type: DateTime**

### .messages
Messages of this channel.

**Type: [MessageManager](/docs/v1/api/messages/message-manager)**

### .isNsfw
Return if is a nsfw channel.

**Type: boolean**

## Methods

### .setCooldown(value)
Set the cooldown of this channel.

| Parameter | Type         | Optional | Description               |
|-----------|--------------| -------- |---------------------------|
| value     | Milliseconds | ❌ | Cooldown of this channel. |

**Returns :** `Promise<void>`

### .setDescription(value)
Set the description of this channel.

| Parameter | Type         | Optional | Description                  |
|-----------|--------------| -------- |------------------------------|
| value     | string, null | ❌ | Description of this channel. |

**Returns :** `Promise<void>`

### .isNSFW()
Check if is a nsfw channel.

**Returns :** `Promise<void>`

### .setNSFW(bool)
Set if this channel is NSFW.

| Parameter | Type    | Optional | Description                  |
|-----------|---------| -------- |------------------------------|
| bool      | boolean | ✔ | Whether the channel should be considered NSFW. |

**Returns :** `Promise<void>`

### .send(messageOption)
Send a message in this channel.

| Parameter     | Type                                                  | Optional | Description             |
|---------------|-------------------------------------------------------| -------- |-------------------------|
| messageOption | [MessageOption](/docs/v1/api/messages/message-option) | ❌ | The options to provide. |

**Returns :** `Promise<void>`