```dataview
table description as "Description" from "campaigns/<% tp.file.folder(false) %>"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"<% tp.file.title %>")
SORT file.name ASC
```