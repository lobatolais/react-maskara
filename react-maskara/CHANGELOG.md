# react-maskara

## 0.2.0

### Minor Changes

- 5a30a2c: Fix mask literal characters lingering after backspace

  Literals (separators like `-`, `/`, `(`) are now buffered and only
  flushed when a valid character follows, preventing orphaned separators
  when deleting input.
