# Simple Task App — React Laboratory 01 Part B

This is a complete, working JavaScript React app. Read it before changing it.
It displays two example tasks and lets you add more. There is one component,
in `src/App.jsx`.

## Run the downloaded app

Extract the ZIP first. Open the extracted `simple-task-app` folder in VS Code.
In a terminal beside `package.json`, run:

```sh
npm install
npm run dev
```

Open the local address printed in the terminal. If PowerShell blocks npm.ps1,
use `npm.cmd install` and `npm.cmd run dev`, or use Command Prompt. You do not
need to create a new Vite project for Part B. Use Node.js 22.12 or later.

## Study the code

- `index.html` supplies the existing root div and loads `src/main.jsx`.
- `src/main.jsx` connects React to that div and displays App.
- `src/App.jsx` describes the application and handles clicks and typing.
- `tasks` holds the task list; `setTasks` requests a new list.
- `newTask` holds the input text; `setNewTask` requests a new text value.
- `addTask` ignores blank input, creates a new array with the new task, and
  clears the input. `map` describes one list row for each task.
- `src/App.css` and `src/index.css` control appearance.
- `package.json` lists packages and runnable commands. The lock file records
  exact package versions. `node_modules` contains downloaded packages.

State is React's memory for changing values. A call such as `setTasks(...)`
requests an update. React runs App again using the new state, works out the
required page contents, and updates the browser's page objects. These page
objects are called the DOM. The browser draws the result.

## Your changes

First put your real name and index in the student line, and capture Screenshot 2
before adding the following features. Change the heading to a title of your
choice.

### Feature 1 — display the number of tasks

Add this after the student line inside the returned page:

```jsx
<p>Total tasks: {tasks.length}</p>
```

### Feature 2 — clear the list

Add this function inside App, after addTask and before return:

```jsx
function clearTasks() {
  setTasks([]);
}
```

Add this button after the closing `</ul>`, before `</main>`:

```jsx
<button onClick={clearTasks}>Clear all</button>
```

The button receives the function to run later. Do not write
`onClick={clearTasks()}`, which calls it while the page is being described.

## Check and capture

1. Refresh: the two example tasks return. The total should be 2.
2. Add a task containing your index number. The total should become 3.
   Capture Screenshot 3, showing the task and total.
3. Click Clear all. No rows should remain and the total should be 0.
   Capture Screenshot 4.
4. Add another task to confirm that adding still works after clearing.
5. Refresh and observe what returns. The app keeps changes in page memory,
   so additions and clearing do not survive a refresh.

## Submit

Follow the lecturer's handout. Submit both Part A and Part B source projects
and the completed short Word report in one `React_Lab_01_<index>.zip` file.
Exclude `node_modules` and `dist`; include each project's package.json and
package-lock.json. Do not put the original ZIP inside your submission: submit
the extracted folder containing your edited source files.

Optional final check: `npm run build` creates the built application in `dist`.

Official reading: [React state](https://react.dev/learn/state-a-components-memory)
and [Vite getting started](https://vite.dev/guide/).
