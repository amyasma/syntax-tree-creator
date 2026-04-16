# Syntax Tree Creator

## Overview
Syntax Tree Creator is a simple browser-based tool for building syntactic trees interactively. It is designed for linguistics students who want a faster and more visual way to construct tree diagrams without writing bracketed notation manually.

This project was built as a term project for Ling508.

## Features
- Interactive canvas for drawing syntax trees
- Click-to-place node positioning
- Support for:
  - Root node insertion
  - Left and right phrase nodes
  - Binary branches
  - Unary branches
  - Triangle notation
  - Null symbol (∅)
- Simple tab-based interface (About / Instructions)
- Lightweight, runs fully in the browser (no installation required)

## How to Use
1. Open the HTML file in any modern web browser.
2. Enter the root node in the "Start Your Tree" field.
3. Enter left and right phrase information in the input fields.
4. Click on the canvas to set the position of the node.
5. Use the buttons to add structure:
   - Binary Branch → creates a binary split
   - Branch → creates a unary branch
   - Insert Null → inserts ∅ symbol
   - Triangle → draws triangle notation
6. Repeat until the syntax tree is complete.

## Project Structure
```
- index.html : Main app
- styles.css : (optional future) styles separated from HTML
- script.js : (optional future) JavaScript logic
- README.md : Documentation
```

## Technologies Used
- HTML5
- CSS3
- JavaScript (Vanilla)
- Canvas API

## Notes
- Designed for educational use in linguistics courses.
- Works best on desktop browsers.
- Input fields should be cleared between steps for correct placement.

## Author
Asma  
Ling508 Term Project  
Instructor: Prof. Sandiway Fong
