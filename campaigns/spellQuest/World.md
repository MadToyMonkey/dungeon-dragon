---
world: spellQuest
campaign: spellQuest
status: active
role: gm
system: 5e
type: world
---
# The World of spellQuest

## Player Characters

- Jamie: [[Faelynn]]
- Kira: [[Bo]]
- Eli: [[Hubert]]
- Dom: [[Jungle]]
- Bre
- Mrs.Dom (plz get actual name T-T)
- Kyle
- Miranda

## Sessions

*Put your cursor where the session link should be. Then, from the Command Palette (CMD/CTRL+P), select either QuickAdd: Macro - Add session-player or QuickAdd: Macro - Add session-gm*.
```button
name Add New Scene
type command
action QuickAdd: Template - Add TTRPG scene
```
^button-btnAddNewScene


```dataview
table summary as "Summary" from "campaigns/spellQuest"
where contains(type,"session")
SORT sessionNum ASC
```


## Truths about the campaign/world

*Write down some facts about this campaign or the world that the characters find themselves in.*

- 


## Factions

```dataview
TABLE description as "Description" from "campaigns/spellQuest"
WHERE contains(lower(type),"faction")
```

## Custom rules

- [[Character options]]
- [[House rules]]

## [[Safety Tools]]