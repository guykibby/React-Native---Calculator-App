# SD206 Project: Mobile Calculator

**Contents:**

- [06-project-mobile-calculator](#06-project-mobile-calculator)
  - [Assessment details](#assessment-details)
  - [Brief](#brief)
  - [Getting Started](#getting-started)
  - [Instructions Part A - UI Design (Group)](#instructions-part-a---ui-design-group)
  - [Instructions Part B - Planning and Workflow (Individual)](#instructions-part-b---planning-and-workflow-individual)
  - [Instructions Part C - Calculator Operations (Individual)](#instructions-part-c---calculator-operations-individual)
  - [Instructions Part C-a - Calculator Operations Testing (Individual)](#instructions-part-c-a---calculator-operations-testing-individual)
  - [Instructions Part D - Local Storage (Individual)](#instructions-part-d---local-storage-individual)
  - [Instructions Part E - Code Reviews (Individual)](#instructions-part-e---code-reviews-individual)
  - [Instructions Part F - UI Implementation (Individual)](#instructions-part-f---ui-implementation-individual)
  - [Instructions Part G - Publish App (Individual)](#instructions-part-g---publish-app-individual)

---

## Assessment details

- [Level 6 Learning Outcomes](./docs/learning-outcomes-l6.md)
- Read the Marking Criteria for this Project on iQualify.

## Brief

One of your junior colleagues was tasked with creating a calculator app using React. While you have been asked to create a mobile calculator app using React Native.
The junior colleague has worked on the calculator web app under the `web-app-calculator` folder. They have asked you to review their code.

So you will need to review your colleagues calculator web app as well as writing your own mobile calculator app.

## Getting Started

This project has a group and an individual aspect. You will be designing and researching as a team. Then you will be building and doing code review as individuals.

You are encouraged to share ideas during the designing and researching stage. But for individual work you are not to discuss code or solutions with your group.

You will be graded on your individual work and individual contribution to the group discussions.

It is recommended you start with the following steps:

- Read through the acceptance criteria for this project.
- Have a look at the existing code. Build and run it on your local machine.
- Come together as a group to discuss the acceptance criteria and begin the design phase Part A.

Remember to:

- Evidence of your individual contributions will need to be added to the artifacts folder.
- Record all team meetings. Make sure meeting recordings are shared with your group and accessible by teaching staff.
- Check off all the ACs before the deadline of the project.

#### Tips

- You do NOT have the follow the instruction parts A, B, C etc in chronological order. It is recommended you come up with your own plan. But please be aware Part A is a group effort so you will need to adjust your schedule based on your group.

## Instructions Part A - UI Design (Group)

Meet with your team to plan how you are going to work together to meet the acceptance criteria. See Part F for the detailed requirements on the UI.

The web app calculator already has an existing UI. However it is not up to standards for a good mobile user experience (UX). You will need to redesign the UI from the web app calculator to make it more user friendly on a mobile device.

Because both the web and mobile app calculators are the products of our company we must keep the color scheme identical. This means your mobile app must have the same color scheme as the web app calculator. Things that you can change include the layout, positioning and font sizes.

You will notice in the web app there is a dropdown accordion showing the past calculations. This is also required in the mobile app.

In the web app whenever you click a button you will see a feedback animation. This is required in the mobile app as well.

You will need to produce wireframes via a [Design Studio process](https://github.com/Developers-Institute/WDD01-Intro-Client-Side-Web-Development/blob/main/Topics/Design-Studio/Lean-UX-Design-Studio.md) first as an individual then come together as a group and discuss their strengths and weaknesses and finally come up with a final design.

- Individual Design - On a shared board, each team member needs to contribute a first draft wireframe and write the strengths and weaknesses for their design.

- Team Discussion - The team then meets to discuss the benefits and draw backs of each individual design. Please record these as bullet points next to each design.

- Collaborative Design - The team then collaborates to create an agreed final design that meets the required specs and criteria for the calculator. List the reasons why it best fits the required specifications and acceptance criteria.

### Acceptance Criteria

- A screenshot of your first draft wireframe with listed strengths and weaknesses is included in the artifacts folder
- A meeting recording of your Team Discussion is linked in the `artifacts\artifacts.md` file, with a short summary of the meeting and is accessible to your tech lead and TA. Timestamps are included that are a good representative of your contribution to the group discussion.
- The wireframe color scheme must resemble the web app calculator.
- A screenshot of your teams final wireframe with **listed justifications why it best fits the criteria**, is included in the artifacts folder.
- The design needs to follow mobile best UI UX practices:
  - No ambiguous icons
  - Don't clutter the screen
  - Keep things simple
  - Easy to read via font and colour contrast
  - Minimise user input
  - "Thumb zone" is taken into consideration
- UI needs a display area to indicate the current operation the user is actioning. This display needs to show the first number (operand), the operator, and the second number (operand).
  - The display area should start off being empty.
  - Once the calculation is complete (ie. equals sign is pressed) then the result is displayed as a full equation (eg. 1 + 2 = 3).
  - After the calculation is complete if the user inputs additional numbers the previous calculation is saved to history and the new calculation is shown in the display area.
- UI needs input for all digits (0-9)
  - UI needs input of all 4 arithmetic operations (addition, subtraction, multiplication and division)
  - UI needs input of decimal point
- UI needs to contain an accordion dropdown which displays a list of calculation history. The calculation history need to show the exact equation inputed and its result (eg. if you did two past calculations they show up as a row displaying "1+2=3" and another row "2-2=0")

## Instructions Part B - Planning and Workflow (Individual)

To succeed in any project it is important to plan. You will need to use Github Projects to create issue tickets that to keep track of what needs to be done for this project.

You will need to make code commits frequently. When working on an issue from Github Projects make sure you create a branch. The commit your code to this branch and push the branch to Github. After you've finished working on this issue you must create a pull request in Github and assign it to your tech lead and TA then merge the pull request. 

Normally in real projects you tech lead would review your PRs before you can merge it but for this project you can merge without it being review due to time constraints.

### Acceptance Criteria

- Clear and meaningful commit messages
- Commits are made frequently (ie. daily or every 2 days). Show that work is not all left until the end.
- Make use of Github Issues for planning
  - Tickets in Github Issues contain a name and a description of what needs to be done.
  - The tickets needs to contain enough information so another developer is able to pick up the work by just reading the ticket.
- Issues are done on separate branches and pull requests are assigned to the tech lead and TA and merged straight away.
- Project is initialized with Expo and uses yarn to manage packages and does not contain `package-lock.json` files.
- Project is submitted on iQualify before the deadline.

## Instructions Part C - Calculator Operations (Individual)

From this point in the project you will be working as an individual. You will need to code the functionality for the calculator. This does not include the UI.

It is **highly recommended** that you use the web app calculator's logic for the calculation workflow. No 3rd party calculator library is allowed, you must write the logic yourself. Searching for calculator logic online will probably not be helpful. However, be aware the web app calculator code may contain bugs.

Please note you do not need to worry about coding the logic for operations on negative numbers. However, your calculator should be able to output negative results (ie. Don't need to worry about -2 \* 3 = -6. But it should work for 2 - 3 = -1 )

You must also implement the functionality of the `DELETE` and `CLEAR HISTORY` button.

- The calculator will have the following 4 operations implemented being accurate to 2 decimal places:
  - Subtraction
  - Addition
  - Multiplication
  - Division
- The output of the calculation should only show up to 2 decimal places.
- Calculations can be performed on decimal numbers and 0.
- Can only input one decimal point per number. (ie. Numbers such as 1.23.456 shouldn't be allowed)
- The calculator can output negative numbers.
- Calculations can only be performed on 2 numeric values (aka. operands) with one operator (addition, subtraction, multiplication or division).
- Need to handle user input edge cases such as
  - Pressing equals before the first and second operands are entered
  - Pressing the operator before the first operand is entered
  - User changing their mind on which operator they wanted
- GIVEN that I am a user and I have entered character(s) WHEN I press the `DELETE` button THEN the last character that I've entered should be deleted.
  - If the `DELETE` button is pressed after a calculation is completed then it should clear the entire display area. But the cleared calculation should still be saved to history.
- GIVEN that I am a user and there is past calculations in the dropdown WHEN I press the `CLEAR HISTORY` button THEN all the past calculations are cleared from the dropdown as well as the local storage.

#### Tip

When calculating decimal numbers in Javascript you will lose precision. What that means is that when you do 0.1 + 0.2 you might get 0.300000001. The reason for this is because the computer cannot represent decimal numbers acurately with 1s and 0s. [See here](https://stackoverflow.com/questions/1458633/how-to-deal-with-floating-point-number-precision-in-javascript).

To handle this, Round your calculator to just 2 decimal places.

## Instructions Part C-a - Calculator Operations Testing (Individual)

All of the above functionality listed in the Part C acceptance criteria must be tested via unit tests.

This must be done using React Native Testing Library and Jest to test when given a specific user input, the output in the UI is correct.

### Acceptance Criteria

- Unit tests to check that all ACs in Part C is working.
  - Unit test NOT needed for the `DELETE` button AC in Part C.
  - Unit tests that require local storage should use mocks.

#### Tips

- You will need to install `jest` and `jest-expo` and `react-test-renderer` to run automated tests.
- You will need to add `"jest": { "preset": "jest-expo" }` in your package.json.
- To run the test you need to add `"test": "jest --watch"` to `scripts` in your package.json.

## Instructions Part D - Local Storage (Individual)

For this project you will need to save the past calculations into the local storage as an array of strings. IE `["1+2=3", "2+3=5"]`. Local storage can only store string values. You will need to use JSON.stringify on the array when you save it to the storage. Then use JSON.parse when you retrieve it from the storage.

### Acceptance Criteria

- Create 2 functions one for updating data (similar to HTTP PUT) and one for retrieving data (similar to HTTP GET) from the storage.
  - Make sure the "PUT" is converting the data from an array to a string using JSON.stringify
  - Make sure the "GET" is converting the data from a string to an array using JSON.parse
- The calculator operation should make use of these functions and be able to save and retrieve and display the calculation history.

## Instructions Part E - Code Reviews (Individual)

You have been asked by your junior colleague to review their web app calculator code.

Identify bugs or bad coding practices in their codebase. Add a comment above the the line where you've found the issuen using the `//` or `/* */` syntax.

In this comment please state what is the issue that you found, why it is a problem and a brief instruction on how the junior developer can fix this issue.

### Acceptance Criteria

- The code review must be complete before the dead line specified by the tech lead.
- Identify up to 12 bugs or bad coding practices in the React web app code provided.
- Code review comments should clearly identify what the issue is, and have helpful tips on how to fix the issue.

NOTE - You **DO NOT** need to fix the bugs or change any of the code in the web app. You just have to leave code review comments.

## Instructions Part F - UI Implementation (Individual)

Create a User Interface for your Calculator using React Native. This should be based on the final wireframe your team designed in Part A. You must style this App with only React Native components. No other UI libraries are permitted except for a React Native accordion dropdown component library of your choice.

Remember the buttons must have a feedback animation similar to that in the web app. The past calculation history must be hidden initially and only shown inside an accordion dropdown like that in the web app.

Unit tests are NOT required to check if specific UI elements exist. However, in part C-a you do need to fire events via the UI to test the calculator functionality.

### Acceptance Criteria

- The calculator equation is displayed correctly during all stages of input (eg. at first display is empty, then "1", then "1+", then "1+2", then "1+2=3").
- The calculation history needs to be persisted even after app is closed (using local storage)
- The design layout matches the wireframes.
  - Color scheme matches the existing web app calculator.
  - Past calculation is only shown after the accordion dropdown is expanded.
- Buttons have feedback animation.
- If the user inputs additional values after the calculation is completed then the display field is cleared, the previous calcuation is added to the history, and the user is allowed to input their new calculation.
- Screenshot of your apps on mobile devices Pixel XL, and Galaxy Nexus saved to `artifacts` folder.

## Instructions Part G - Publish App (Individual)

Publish the app to Expo. Update the `artifacts/app-link.txt` file with the link to your app. It should look something like this `https://exp.host/@ccheever/an-example`

NOTE - Do **NOT** post the .aab link. Publish the app using Expo do not build it into an .aab file.

### Acceptance Criteria

- App is published to Expo, the link to your app is added to `artifacts/app-link.txt`
- The tech lead or TA is able to download and run the app using an emulator.
  - The app should work the same on the emulator as it does on the web.

## Once Deployed, Submit Your Project

- [ ] [Feedback Form](https://forms.gle/gnJ2vKaLNi8ABqBv9) has been completed
- [ ] Diagrams, wireframes, recordings, and timestamps have been added to the repo
- [ ] Project has been turned in in iQualify
