# EmbedRow

Represent a row of a MessageEmbed.
<toc />

## Properties

### .type
Type of the row.

**Type: [ComponentType](/docs/v1/api/component-type)**

### .components
The components of the row.

**Type: MessageComponentResolvable[]**

## Methods

### .addComponent(component)
Add component to this row.

| Parameter | Type                       | Optional | Description               |
|-----------|----------------------------|---|---------------------------|
| component | MessageComponentResolvable | ❌ | The component of the row. |

**Returns :** `this`

### .addComponents(components)
Add components to this row.

| Parameter  | Type                         | Optional | Description                |
|------------|------------------------------|---|----------------------------|
| components | MessageComponentResolvable[] | ❌ | The components of the row. |

**Returns :** `this`