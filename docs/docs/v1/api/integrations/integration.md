# Integration

Represents a guild integration.
<toc />

## Properties

### .id
The id of the integration.

**Type: Snowflake**

### .name
The name of the integration.

**Type: string**

### .type
The type of the integration.

**Type: `'twitch'` | `'youtube'` | `'discord'`**

### .enabled
Whether this integration is enabled.

**Type: boolean**

### .syncing
Whether this integration is syncing.

**Type: boolean**

### .roleId
The Role ID of the integration using.

**Type: Snowflake**

### .enableEmoticons
Whether emoticons should be synced for this integration.

**Type: boolean**

### .expireBehavior
The behavior of expiring subscribers.

**Type: BehaviorsExpiration**

### .expireGracePeriod
The grace period before expiring subscribers.

**Type: number**

### .user
The user for this integration.

**Type: [User](/docs/v1/api/user)**

### .account
The account for this integration.

**Type: [IntegrationAccount](/docs/v1/api/integrations/integrationaccount)**

### .syncedAt
The last time this integration was last synced.

**Type: DateTime**

### .subscriberCount
How many subscribers this integration has.

**Type: number**

### .revoked
Whether this integration has been revoked.

**Type: boolean**

### .application
The application for this application.

**Type: [IntegrationApplication](/docs/v1/api/integrations/integrationapplication)**

## Methods

### .isEnabled()
Check if integration is enabled.

**Returns :** `Promise<void>`

### .isSyncing()
Check if integration is syncing.

**Returns :** `Promise<void>`

### .isEnableEmoticons()
Check if integration as enabled emoticons.

**Returns :** `Promise<void>`

### .isRevoked()
Check if integration is revoked.

**Returns :** `Promise<void>`