---
title: Assignment 5 Beta
layout: doc
---

# Assignment 5 Beta

## Deployed App and Repository

https://moodboard-theta.vercel.app/

https://github.com/aschueppert/frontend

## Heuristic Evaluation

### **Physical Heuristics:**

#### **Fitt’s Law:**

- **Observation:** The large buttons for core actions like "Choose Theme" and "Approve" follow Fitt’s Law well, making them easy to click, reducing effort for the user. They are placed at the center of attention, where users can reach them quickly.
- **Improvement:** Some smaller icons, such as the ones in the bottom navigation bar (save, bookmark, add), might be harder to tap on mobile devices, especially for users with larger fingers. Increasing the size of these icons (by moving some to the top right) could further improve efficiency.
- **Tradeoff:** Increasing the size of every interactive element could clutter the screen, sacrificing the clean and minimalistic layout for ease of interaction.

#### **Gestalt Principles:**

- **Observation:** The use of proximity and similarity is well-executed in grouping related buttons (like the post settings and edit tools at the bottom of screens). This helps convey structure and relationships, aiding user comprehension.
- **Improvement:** The grid layout for choosing save boards is well organized but users may not immediately understand the conceptual relationship between different boards. Showing some info from the board and including labels could make the thematic structure clearer.
- **Tradeoff:** Adding too much labeling or visual clutter to explain groupings might overwhelm the user, especially if they are familiar with this type of board/grid interface from other apps.

---

### **Linguistic Heuristics:**

#### **Speak a User’s Language:**

- **Observation:** The wireframes use straightforward, non-technical language, such as "Choose Theme" and "Post Name," which is appropriate for the target audience. This approach supports easy comprehension and avoids confusion.
- **Improvement:** THe term "Approve" for posts could be confusing, as it’s unclear if this refers to approving a draft post or something else. More clear language or symbols might clarify the action.
- **Tradeoff:** The tradeoff here is simplicity vs. clarity—while using simple language enhances learnability, making the language too simple may lead to ambiguity. Clarifying actions could make the interface slightly more verbose but more user-friendly.

#### **Consistency:**

- **Observation:** In my wireframes, the same icons are used for themes (flower), saving (bookmark), and adding content (+) in different locations. This consistency helps users to understand the interface more easily (e.g., the bookmark icon is used to save posts and allow users to navigate to saved posts), creating a more cohesive design.
- **Improvement:** While this consistency helps with familiarity, using the "+" symbol for both adding posts and adding members could cause confusion. Differentiating these actions with unique icons would improve clarity without sacrificing overall consistency.
- **Tradeoff:** While enhancing clarity through different icons may slightly decrease consistency, it will help users avoid confusion and misinterpretation of actions.

---

### **Situational Context:**

#### **Mapping:**

- **Observation:** The layout matches users’ mental models well—boards are clearly represented visually, and settings/edit buttons are logically placed at the bottom where users expect them to be. This helps users understand how elements function within the app.
- **Improvement:** Choosing saved boards could improve mapping by making it more evident which board your saving to. A stronger visual indicator for the selected board like changing the color would make the mapping clearer.
- **Tradeoff:** Adding stronger visual cues could take up additional screen space and detract from the minimalist design, reducing aesthetic simplicity in favor of functionality.

#### **Information Scent:**

- **Observation:** The wireframes gives good hints about what actions can be taken. For example, icons like the bookmark and add button signal to the user that they can save or create something new. The presence of location tags also helps users infer relevant content context.
- **Improvement:** The drafting to posting to approving process can be confusing. Adding brief instructions or icons for additional context might improve the information scent.
- **Tradeoff:** Providing more guidance (e.g., hints or tooltips) might clutter the interface and slow down more experienced users. It would need to be implemented carefully, perhaps appearing only for first-time users or as optional tooltips.

* Note: Chat-GPT assisted with brainstorming ideas for heuristic analysis, it also assisted with the css fro the design of the app.

## Visual Design Study

https://docs.google.com/presentation/d/19bkZMDyTM16iLorSdpSq7OgJ6cVIYkqvHUBhJEM34vI/edit?usp=sharing
