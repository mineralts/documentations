# StageChannel
**extends of [Channel](/docs/v1/api/channels/channel)**

Represents a guild stage channel on Discord.
<toc />

## Properties

### .topic
Topic of the Stage Channel.

**Type: ?string**

### .maxUser
Max user allowed to this channel.

**Type: number**

### .region
The RTC region for this voice-based channel. This region is automatically selected if null.

**Type: [RTC_Region](/docs/v1/api/rtc-region)**

### .rateLimitPerUser
The rate limit per user in this channel.

**Type: number**

### .permission
Permissions of this channel.

**Type: any[]**

### .bitrate
The bitrate of this voice-based channel.

**Type: number**