---
'react-maskara': minor
---

Fix mask literal characters lingering after backspace

Literals (separators like `-`, `/`, `(`) are now buffered and only  
flushed when a valid character follows, preventing orphaned separators
when deleting input.
