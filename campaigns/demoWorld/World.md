---
world: demoWorld
campaign: demoWorld
status: active
role: player
system:
type: world
---
# The World of demoWorld

## Player Characters

-

## Sessions

*Put your cursor where the session link should be. Then, from the Command Palette (CMD/CTRL+P), select either QuickAdd: Macro - Add session-player or QuickAdd: Macro - Add session-gm*.




```dataview
table summary as "Summary" from "campaigns/demoWorld"
where contains(type,"session")
SORT sessionNum ASC
```


## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

- 


## Factions

```dataview
TABLE description as "Description" from "campaigns/demoWorld"
WHERE contains(lower(type),"faction")
```

## Custom rules

- [[Character options]]
- [[House rules]]

## [[Safety Tools]]