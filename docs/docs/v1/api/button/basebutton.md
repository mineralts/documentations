# BaseButton
Represents a button component.
<toc />

## Properties

### .label
The text to be displayed on this button.

**Type: string**

### .emoji
Emoji for this button.

**Type: string | [Emoji](/docs/v1/api/emoji)**

### .disabled
Whether this button is currently disabled.

**Type: boolean**

## Methods

### .setLabel(value)
Set the label of this button

| Parameter | Type   | Optional | Description                                 |
|-----------|--------| -------- |---------------------------------------------|
| value     | string | ❌ | The text to be displayed on this button. |

**Returns :** `this`

### .setEmoji(emoji)
Set the emoji of this button

| Parameter | Type                                | Optional                    | Description                                 |
|-----------|-------------------------------------|-----------------------------|---------------------------------------------|
| emoji     | string, [Emoji](/docs/v1/api/emoji) | ❌ | Emoji for this button. |

**Returns :** `this`

### .isDisabled()
Check if this button is disable

**Returns :** `Promise<void>`

### .setDisabled(value)
Sets the interactive status of the button

| Parameter | Type    | Optional | Description                             |
|-----------|---------| -------- |-----------------------------------------|
| value     | boolean | ❌ | Whether this button should be disabled  |

**Returns :** `this`

