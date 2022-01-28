# DMChannel
**extends of [Channel](/docs/v1/api/channels/channel)**

Represents a direct message channel between two users.
<toc />

## Properties

### .id
The channel id.

**Type: Snowflake**

### .lastMessageId
The channel's last message id, if one was sent.

**Type: Snowflake**

### .recipients
The recipient on the other end of the DM

**Type: [DMUser[]](/docs/v1/api/dmuser)**