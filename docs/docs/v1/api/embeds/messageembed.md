# MessageEmbed

Represents an embed in a message (image/video preview, rich embed, etc.)
<toc />

## Properties

### .title
The title of this embed.

**Type: ?string**

### .description
The description of this embed.

**Type: ?string**

### .color
The color of this embed.

**Type: [Color](/docs/v1/api/colors)**

### .fields
The fields of this embed.

**Type: [EmbedField](/docs/v1/api/embeds/embedfield)**

### .author
The author of this embed.

**Type: ?[EmbedAuthor](/docs/v1/api/embeds/embedauthor)**

### .image
The image of this embed.

**Type: ?[EmbedImage](/docs/v1/api/embeds/embedimage)**

### .thumbnail
The thumbnail of this embed.

**Type: ?[EmbedThumbnail](/docs/v1/api/embeds/embedthumbnail)**

### .timestamp
The timestamp of this embed.

**Type: ?DateTime**

### .video
The video of this embed.

**Type: ?[EmbedVideo](/docs/v1/api/embeds/embedvideo)**

### .url
The URL of this embed.

**Type: ?string**

### .footer
The footer of this embed.

**Type: ?[EmbedFooter](/docs/v1/api/embeds/embedFooter)**

## Methods

### .setTitle(value)
Set the title for this embed.

| Parameter | Type   | Optional | Description              |
|-----------|--------|----------|--------------------------|
| value     | string | ❌        | The title of this embed. |

**Returns : `this`**

### .setDescription(value)
Set the description for this embed.

| Parameter | Type   | Optional | Description                    |
|-----------|--------|----------|--------------------------------|
| value     | string | ❌        | The description of this embed. |

**Returns : `this`**

### .setColor(color)
Set the description for this embed.

| Parameter | Type                                 | Optional | Description              |
|-----------|--------------------------------------|----------|--------------------------|
| color     | [Color](/docs/v1/api/colors), string | ❌        | The color of this embed. |

**Returns : `this`**

### .addField(name, value, inline)
Add field for this embed.

| Parameter | Type    | Optional | Description                             |
|-----------|---------|----------|-----------------------------------------|
| name      | string  | ❌        | The name of this field.                 |
| value     | string  | ❌        | The value of this field.                |
| inline    | boolean | ✔        | If this field will be displayed inline. |

**Returns : `this`**

### .setAuthor(options)
Set the author for this embed.

| Parameter | Type    | Optional | Description                            |
|-----------|---------|---------|----------------------------------------|
| options   | [EmbedAuthor](/docs/v1/api/embeds/embedauthor)  | ❌        | The options to provide for the author. |

**Returns : `this`**

**Example**

```ts
const embed = new MessageEmbed()

embed.setAuthor({
    name: "My Author Name",
    url: "https://mineralts.fr/",
    icon_url: "https://mineralts.fr/img/author.png"
})
```

### .setThumbnail(options)
Set the thumbnail for this embed.

| Parameter | Type                                                 | Optional | Description                               |
|-----------|------------------------------------------------------|---------|-------------------------------------------|
| options   | [EmbedThumbnail](/docs/v1/api/embeds/embedthumbnail) | ❌        | The options to provide for the thumbnail. |

**Returns : `this`**

### .setTimestamp()
Set the timestamp for this embed.

**Returns : `this`**

### .setUrl(url)
Set the URL for this embed.

| Parameter | Type   | Optional | Description             |
|-----------|--------|---------|-------------------------|
| url       | string | ❌        | The URL for this embed. |

**Returns : `this`**

### .setFooter(options)
Set the footer for this embed.

| Parameter | Type                                           | Optional | Description                            |
|-----------|------------------------------------------------|---------|----------------------------------------|
| options   | [EmbedFooter](/docs/v1/api/embeds/embedfooter) | ❌        | The options to provide for the footer. |

**Returns : `this`**