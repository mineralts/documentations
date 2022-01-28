# VoiceChannel
**extends of [Channel](/docs/v1/api/channels/channel)**

Represents a guild voice channel on Discord.
<toc />

## Properties

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

### .videoQuality
The video quality allowed to this channel.

**Type: [VideoQuality](/docs/v1/api/videoquality)**

## Methods

### .setBitrate(value)
Sets the bitrate of the channel.

| Parameter | Type   | Optional | Description               |
|-----------|--------| -------- |---------------------------|
| value     | number | ❌ | The bitrate of this voice-based channel. |

**Returns :** `Promise<void>`

### .setRtcRegion(region)
Sets the RTC region of the channel.

| Parameter | Type                                  | Optional | Description               |
|-----------|---------------------------------------| -------- |---------------------------|
| region    | [RTC_Region](/docs/v1/api/rtc-region) | ❌ | The RTC region for this voice-based channel. |

**Returns :** `Promise<void>`

**Example**
```ts
await channel.setRtcRegion('us-central')
```

### .setMaxMember(value)
Sets the max member allowed to this channel.

| Parameter | Type                | Optional | Description               |
|-----------|---------------------| -------- |---------------------------|
| value     | number, `'UNLIMITED'` | ❌ | Max user allowed to this channel. |

**Returns :** `Promise<void>`

### .setVideoQuality(quality)
Sets the video quality allowed in this channel.

| Parameter | Type                | Optional | Description                                |
|-----------|---------------------| -------- |--------------------------------------------|
| quality   | [VideoQuality](/docs/v1/api/videoquality) | ❌ | The video quality allowed to this channel. |

**Returns :** `Promise<void>`