### Project Objective

- Build a To Do Application using React's Context API to manage various aspects such as
  - lists of todos
  - current visibility filters
  - a simple theme
- implementing providers
- consuming context values in components
- handling complex state updates
- basic persistence
- optimization techniques with Context

### Learning

- Design multiple contexts which independently handle different pieces of global states
- Create and use Context Providers to make state and dispatch functions available throughout the component tree
- Consume context values and functions in components using `useContext` hook
- Manage complex states [array of objects, filter states] - using useState or `useReducer` with context providers
- Implement features with interactions between multiple contexts
- Add persistence layer to Context-based app with localstorage
- Understand basic performance considerations when working with Context API.

### Type Definitions & Interface Planning

- TaskStatus (type)
- Task (interface)
- TaskListProps (interface)
- TaskItemProps (interface)
- TaskFilterProps (interface)
- FormDataProps (interface)
- ThemeSwitchingProps (interface)

### Components Planning

- TodoInput
- TodoList
- TodoItem
- FilterButtons
- ThemeToggleButton

### Context Planning

- Each manager maintains its own local storage
- TodoContext (Todo Manager)
- FilterContext (Filter Manager)
- ThemeContext (Theme Manager)

#### What is Done

- Add, Edit, Delete Todo
- Display Todos

#### What is Pending

- Filter Buttons implementation
- Strike through for completed items
- Switch Theme Light/Dark
- Local Storage

#### Reflections
