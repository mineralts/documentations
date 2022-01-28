# Button
**extends of [BaseButton](/docs/v1/api/button/basebutton)**

Represents a button.
<toc />

## Properties

### .customId
The button custom id.

**Type: Snowflake**

### .style
The button style.

**Type: Exclude<typeof [ButtonStyle](/docs/v1/api/button/buttonstyle), 'LINK'>**

## Methods

### .setStyle(style)
Set the style of the button.

| Parameter | Type | Optional | Description                                 |
| --------- | ---- | -------- |---------------------------------------------|
| style | [ButtonStyle](/docs/v1/api/button/buttonstyle) | ❌ | `PRIMARY`, `SECONDARY`, `SUCCESS`, `DANGER` |

**Returns :** `this`

### .setCustomId(identifier)
Set the custom id for this button.

| Parameter  | Type   | Optional | Description                                 |
|------------|--------| -------- |---------------------------------------------|
| identifier | string | ❌ | The button custom id. |

**Returns :** `this`