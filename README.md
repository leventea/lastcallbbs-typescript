# TypeScript scaffolding for Last Call BBS "servers"

[Last Call BBS on Steam](https://store.steampowered.com/app/1511780/Last_Call_BBS/) 

[Script API Docs](https://www.zachtronics.com/quickserve/)

The game uses an older version of [jint](https://github.com/sebastienros/jint), and there are a ton of features I found lacking. 
For example, it doesn't support default values for function parameters, or arrow functions. It is possible to work around these issues, but it is quite annoying and results in uglier code.
This repository contains scaffolding (along with some added convenience) which makes the use of TypeScript possible for writing Last Call BBS scripts.

## Automatic installation for development

When the `SERVER_DEST` environment variable is set, webpack will attempt to copy the bundle to the specified location. 
On Linux, the servers folder can be found under `~/.local/share/Last Call BBS/<steamid64>/`.


