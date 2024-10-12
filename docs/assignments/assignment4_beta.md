---
title: Assignment 4 Beta
layout: doc
---

# Assignment 4 Beta

## Abstract Data Model

# Concept 1: Authenticating
**State**
- `username`: User -> one String
- `password`: User -> one String

# Concept 2: Sessioning [User]
**State**
- `user`: Session -> one User

# Concept 3: Drafting [User]
**State**
- `members`: Draft -> set User
- `contentSet`: Draft -> set Content
- `selectedSet`: Draft -> set Content

# Concept 4: Posting [User]
**State**
- `approvers`: Post -> set User
- `approved`: Post -> set User
- `content`: Post -> set Content
- `status`: Post -> one String
- `theme`: Post -> one Theme

# Concept 5: Saving [User, Item, Theme]
**State**
- `author`: Save -> one User
- `name`: Save -> one String
- `items`: Save -> set Item

# Concept 6: Events [User, Item]
**State**
- `hosts`: Event -> set User
- `attendees`: Event -> set User
- `location`: Event -> one String
- `info`: Event -> one Item

# Concept 7: Following [User]
**State**
- `Follower`: Relationship -> one User
- `Following`: Relationship -> one User

# App: moodBoard
- `include Authenticating`
- `include Sessioning[Authenticating.User]`
- `include Drafting[Authenticating.User]`
- `include Posting[Authenticating.User, Drafting.Draft]`
- `include Events[Authenticating.User, Posting.Post]`
- `include Saving[Authenticating.User, Posting.Post]`
- `include Saving[Authenticating.User, Events.Event]`
- `include Saving[Authenticating.User, Authenticating.User]`
- `include Friending[Authenticating.User]`

# Reflection
When I built the backend, it became clear that my original design missed some key details that I had to fix when implementing. One of the first issues I encountered was how I wanted relationships to work on the app. I originally wanted to have friends like the default code provided, but I worried about how this limited what posts different users could see. I want this relationship to help tailor the feed not limit it. Thus I decided to allow users to follow people. Users would still be able to see everyones post but would be able to refine their feed by choosing who to follow. 

Another challenge was managing drafts. In my initial design, I hadn’t fully considered how drafts and posts would coexist. It became messy when both drafts and final posts lived side by side. To streamline this, I decided to delete drafts once they were converted to posts. This decision made the system cleaner and avoided unnecessary clutter, making it easier to manage only finalized content.

When it came to handling events, I initially thought about combining them with posts, but I soon realized that would limit the potential to add features later. By choosing to keep events separate from posts but still referencing them, I allowed for future flexibility. This setup gives me the room to add event-specific actions or notifications later without complicating the structure. I had considered merging posts and events, but I rejected this approach because it would have made the system harder to scale and manage.

Overall, while my original design needed adjustments, these changes improved the system. They simplified content management and made the service more adaptable for future growth. If I could go back, I’d have planned these features earlier, but the result is much more functional.


# Backend code 

[https://github.com/aschueppert/backend](https://github.com/aschueppert/backend)
NOTE: some commits appear as coming from a different user. I broke my laptop on Tuesday and had to use my friend's computer to finish the assignment. For some reason the commits appear as coming from his account not mine, but they are my work.

# Deployed App

