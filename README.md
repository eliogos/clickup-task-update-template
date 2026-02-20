# ClickUp Task Update Template

Userscript that opens a modal in ClickUp when you type `--update` and press space, then inserts a formatted task update template.

## What's New

### 12.0.0 (2026-02-20)
- Added a more expressive status select interaction:
  - Lively pop-in animation for the status picker panel.
  - Animated trigger bounce and icon motion when opening.
- Modal can now be dismissed by clicking outside the modal card (backdrop click).
- Label suggestion chips are now single-line and horizontally scrollable.
  - Mouse-wheel vertical scrolling now moves chips horizontally.
  - Soft edge gradients appear on clipped sides and alternate as you scroll.
- Chip scroller now uses clipped rounded edges (`clip-path`) so scrollbar visuals stay contained to the shape.
- Redesigned scrollbars for the modal, notes/accomplishment textareas, and chip scroller.
- Added Google Fonts preconnect/stylesheet loading in-app and updated typography:
  - UI text: `Inter` (with `Google Sans` fallback).
  - Text inputs and textareas: `JetBrains Mono` (with monospace fallbacks).
- Bumped script version to major release `12.0.0`.

### 11.0.0 (2026-02-20)
- Added dynamic label suggestion chips from a centralized list in `src/suggestion-chips.js`.
- Added new label chips: `Dev Beta Update` and `Dev Gold Update`.
- Updated Notes behavior to support both add and remove:
  - `Add Notes` shows the notes field.
  - `Remove Notes` hides the notes field and clears its content.
- Notes are now excluded from the inserted output when notes are removed.
- Bumped script version to major release `11.0.0`.
