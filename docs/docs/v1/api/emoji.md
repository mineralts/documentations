# Emoji

Represents an Emoji
<toc />

## Properties

### .id
The emoji id.

**Type: Snowflake**

### .label
The emoji label.

**Type: string**

### .managed
Whether this emoji is managed.

**Type: boolean**

### .available
Whether this emoji can be used, may be false due to loss of Server Boosts.

**Type: boolean**

### .animated
Whether this emoji is animated.

**Type: boolean = false**

### .roles
Roles allowed to use this emoji.

**Type: [Role[]](/docs/v1/api/roles)**