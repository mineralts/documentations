# Activity
Represents an activity that is part of a user's presence.
<toc />

## Properties

### .id
The activity id.

**Type: string**

### .type
Type of the activity.

**Type: [ActivityType](/docs/v1/api/activity/activitytype)**

### .description
The activity description.

**Type: string**

### .name
The activity name.

**Type: string**

### .emoji
The activity emoji.

**Type: Emoji**

### .timestamps
Timestamps of the activity.

**Type: [ActivityTimestamps](/docs/v1/api/activity/activitytimestamps)**

### .state
The activity state.

**Type: ?string**

### .detail
The activity detail.

**Type: ?string**

### .assets
Assets of the activity.

**Type: [ActivityAssets](/docs/v1/api/activity/activityassets)**

### .buttons
Buttons of the activity.

**Type: any[]**

### .syncId
The Spotify song's id.

**Type: ?string**

### .sessionId
The game's or Spotify session's id.

**Type: ?string**

### .createdAt
Creation date of the activity.

**Type: DateTime**

### .applicationId
Id of the application associated with this activity.

**Type: ?Snowflake**


