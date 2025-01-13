# Player Leveling System

This project demonstrates a simple **Player Leveling System** implemented in JavaScript. The system allows you to create a player object, gain experience points (XP), and level up as XP milestones are achieved.

---

## 🛠️ Features

- **Player Creation**:
  - A `Player` class to create a player with a name, starting level (1), and initial XP (0).
- **Leveling Mechanism**:
  - Gain XP using the `gainXp()` method.
  - Automatically level up when XP reaches or exceeds 10, with any extra XP rolled over.
- **Player Stats Display**:
  - The `_describe()` method displays the player's name, level, and XP whenever a change occurs.

---

## 🚀 How It Works

### **Class**: `Player`

#### **Constructor**

Initializes a player object with:

- `name`: Player's name (string).
- `_lvl`: Player's level (integer, defaults to 1).
- `_points`: Player's experience points (integer, defaults to 0).

#### **Methods**

1. **`gainXp(xp)`**

   - A public method that adds XP (1–10) to the player.
   - Automatically levels up the player if XP reaches or exceeds 10, and adjusts remaining points.
   - Triggers the `_describe()` method.

2. **`_describe()`**
   - A private method that logs the player's current stats: name, level, and XP.
