# Client
Represents your bot on Discord server.
<toc />

## Properties

### .guilds
Represents all the discord servers on which the bot is present.
**Type: GuildManager**

### .token
Your token's bot. 

**Type: string**


### .options
Bot option's.

**Type: ClientOptions**


### .user
Your token's bot.

**Type: [User](/docs/v1/api/user)**


### .sessionId
The game's or Spotify session's id.

**Type: ?string**

### .presences
Represents the client's presence.

**Type: Presence[]**


### .application
Represents the client's application.

**Type: { id: string, flags: number }**


### .commands
Slash commands registered into your bot.

**Type: Collection<Snowflake, Command>**