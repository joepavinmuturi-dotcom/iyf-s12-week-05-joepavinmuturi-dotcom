# iyf-s12-week-05-joepavinmuturi-dotcom

# Week 5: DOM Manipulation – Interactive To-Do List

## Author
- **Name:** <Your Full Name>
- **GitHub:** [@joepavinmuturi-dotcom](https://github.com/joepavinmuturi-dotcom)
- **Date:** November 11, 2026

## Project Description
An interactive to-do list built with vanilla JavaScript to practise selecting elements, changing the page, and responding to user events. The repo also contains my Lesson 9–10 practice page and the five daily challenges.

## Technologies Used
- HTML5
- CSS3
- JavaScript (vanilla, no libraries)

## Features
- Add tasks with Enter or the Add button; empty tasks are blocked with an inline error message
- Click a task to toggle completed (strikethrough)
- Delete button appears on hover and on keyboard focus
- Filters: All / Active / Completed
- Live "items left" counter and Clear Completed
- Bonus: double-click a task to edit it (Enter saves, Escape cancels)
- Accessible: labelled input, aria-pressed filters, visible focus outlines

## How to Run
1. Clone this repository
2. Open `index.html` in your browser

Other files:
- `dom-practice.html` + `dom.js` – Lesson 9 and 10 practice
- `daily-challenges/` – Day 1 to Day 5 challenges

## Lessons Learned
- Event delegation: one listener on the `ul` handles every task, including ones added later, and `closest()` finds the right `li` even when the click lands on a child element.
- Keeping an array of todo objects as the single source of truth and re-rendering from it is simpler than editing individual DOM nodes.
- `textContent` is safe for user input; `innerHTML` can run injected code (shown in the injection demo).

## Challenges Faced
- Editing a task: the edit box lost focus when the list re-rendered, so I tracked an `editingId`, focused the input after each render, and guarded the `focusout` handler so Enter and Escape don't also trigger a save.
- <Add one real problem of your own and how you fixed it>

## Live Demo
<GitHub Pages link, if you enable it>