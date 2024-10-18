# Table Factory

Table Factory is a simple web application that generates a multiplication table based on user input. The table can be generated step-by-step or all at once, with an optional delay between each step to simulate a progressive display.

## Features

- Input the multiplicand and multiplier limit to generate a multiplication table.
- Option to step through the table generation or display the entire table at once.
- Optional delay (in milliseconds) between steps to simulate real-time table generation.

## How It Works

The app uses an **async generator** to generate multiplication table values asynchronously, allowing for a customizable delay between each step. You can either display the table one step at a time or display the entire table at once.

### Key Elements:

- **Multiplicand**: The number you want to multiply.
- **Multiplier Limit**: The upper limit up to which the multiplicand will be multiplied.
- **Playback Delay**: Optional delay (in milliseconds) between steps in case of step-by-step generation.

## Application Workflow

1. The user enters values for the **Multiplicand**, **Multiplier Limit**, and **Playback Delay**.
2. The user clicks the "Create Iterable" button, setting up the application.
3. The user can either:
   - Click the "Step >>" button to step through each multiplication one by one.
   - Click the "Entire Table" button to display the full table at once.
