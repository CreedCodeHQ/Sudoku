# Requirements

### Level 1
 - Input Element which takes only numbers [1-9]
    - Should not take other characters
- Should take only one character input
- User should be clear the input with del or backspace

### Day 2
- [x] Make the input a squarish one with some inline css
- [x] Some extra css padding
- [x] Extract the input as separate component, and embed it in App
    - [x] The new component should take a prop , called `value` 
    - [x] value is the default value of input component
- The input component should also take another prop called isEditable, a bool value which basically makes a input component editable or not. 
- For example : if isEditable = false then user should not be allowed to edit the input value, 5 stays 5, empty value stays empty



### Level 3
- Define an array in the App component it basically can take list of numbers from [1-9] or null.
example : [4,7,null,8]
- Display the Array as row of CELLS
- Get Sample sudoku problem and then convert to JS notations - [2-D Arrays]
- Display the sudoku problem 
- Make sure the grid updated when a change is made.
- Ensure Editables cells are only editable and non-editable (question cells) are disabled

### Level 4
1. Validate the end of Game: Detect when the sudoku is completed 
    - Display either of the following
    - if all cells are correctly filled : alert (You win)
    - if cells are filled wrongly : alert (Please check your answer)

When does a sudoku End:
    - Each row contains unique values from 1-9.
    - Each column contains unique values from 1-9.
    - Each of the 9 sub-squares, of size 3x3, ​contains a unique value from 1-9.

Learnings : It is enough to validate the final sudoku using just rows

2. Restart Game Feature.


#### Side Missions
- Key handlers - KeyDown Vs KeyPress vs KeyUp 
