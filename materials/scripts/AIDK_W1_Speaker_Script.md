# AI Don't Know Workshop 1: Python Foundations

## Facilitator Script and Run of Show

Workshop date: 15 July 2026
Workshop time: 3:00 PM-5:00 PM
Primary notebook: `01_AIDK_W1_Starter.ipynb`
Answer key: `01_AIDK_W1_Solutions.ipynb`
Slides: https://spai-aidk-workshop1.vercel.app/

## How to Use This Script

- The quoted paragraphs under **Main Script** are written to be spoken naturally. Adapt the wording to the room instead of reading mechanically.
- **Notebook Action** tells the presenter exactly where attendees should be in the Starter notebook.
- **Facilitator Check** is private guidance. Do not reveal an answer before attendees have attempted the task.
- **Delivery Notes** flag common mistakes, pacing choices, and moments when facilitators should move around the room.
- Suggested times are targets, not promises. Protect participant practice time by shortening introductions before cutting exercises.

## Run of Show

- **3:00-3:08 - Welcome and context:** Slides 1-7
- **3:08-3:15 - Setup and notebook check:** Slides 8-10
- **3:15-3:20 - Workshop flow:** Slides 11-13
- **3:20-3:42 - Python and JavaScript:** Slides 14-20
- **3:42-3:44 - Speaker handover:** Slide 21
- **3:44-4:28 - Python basics and notebook prompts:** Slides 22-37
- **4:28-4:50 - Combined practice:** Slides 38-41
- **4:50-5:00 - Recap, photo, attendance:** Slides 42-45

If the workshop is running late, shorten Slides 2-7, treat Slide 17 as optional, and reduce the debrief after Practice 1. Do not skip the setup check or show practice answers before an attempt.

## Slide 1: AI Don't Know - Workshop 1: Python Foundations

**Timing:** 1 minute
**Speaker:** Enzo

**Main Script:**
"Hi everyone, welcome to the first AI Don't Know workshop. Today is Python Foundations. We are going to start from familiar programming ideas, translate them into Python, and use them in a notebook. This is a beginner session, so you are not expected to know Python already."

**Delivery Notes:**

- Point out the slide URL so attendees can follow on their own screens.
- Ask who has used JavaScript, Python, or a notebook before. Keep the show of hands brief.

**Transition:**
"Before we start coding, here is a quick introduction to SPAI."

## Slide 2: About SPAI

**Timing:** 30 seconds
**Speaker:** Enzo

**Main Script:**
"SPAI is a student community that helps SP students get practical exposure to AI. We run workshops, events, and projects that make the topic easier to approach."

**Transition:**
"Here is what that looks like in practice."

## Slide 3: Who We Are

**Timing:** 1 minute
**Speaker:** Enzo

**Main Script:**
"You do not need to be from a particular course or school to join us. The point is to learn with other students, try useful tools, and build enough confidence to keep going. We focus on practical first exposure, not gatekeeping."

**Delivery Notes:**

- Emphasise that beginners are welcome.
- Mention workshops, events, community, and projects without reading every label.

**Transition:**
"We have already tested that approach in a few different events."

## Slide 4: Previous Events

**Timing:** 1 minute
**Speaker:** Enzo

**Main Script:**
"These are a few examples of what we have run before: Pixels to Perception, Graphing Impact, and our n8n sessions. The topics change, but the format stays hands-on. We explain enough for you to try something yourself."

**Transition:**
"This workshop follows the same idea, but across three sessions."

## Slide 5: Workshop Series

**Timing:** 30 seconds
**Speaker:** Enzo

**Main Script:**
"The series moves from code, to data, to learning from data. Today gives us the Python base that the next two sessions will use."

**Transition:**
"Here is the full path."

## Slide 6: Series Outline

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"Today is Python Foundations. On 22 July, we will use pandas, NumPy, matplotlib, and seaborn to understand and visualise data. On 29 July, we will work through a guided machine learning example. Workshop 3 is structured and supported; nobody is expected to build a model from a blank page."

**Delivery Notes:**

- Point out the dates and 3:00 PM-5:00 PM timing.
- Do not explain the libraries yet.

**Transition:**
"What should you be able to do after those three sessions?"

## Slide 7: Takeaways

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"You are not expected to master AI in three workshops. For today, success means being able to read a short Python example, change a value, fill a small blank, and run it without freezing. Later we will add data thinking and basic machine learning intuition on top."

**Delivery Notes:**

- Remind attendees that experienced programmers still look things up.
- Frame errors as useful feedback rather than failure.

**Transition:**
"Let us get the notebook open before we go any further."

## Slide 8: Python Setup Checklist

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"Open the workshop folder in VS Code, then open `01_AIDK_W1_Starter.ipynb`. You need Python plus the Python and Jupyter extensions. If your screen looks different or the notebook does not open, raise your hand and a facilitator will come over."

**Notebook Action:**
Open the Starter notebook and stop at the title. Do not ask attendees to work ahead.

**Delivery Notes:**

- Let facilitators solve individual setup issues quietly.
- Keep the room moving instead of troubleshooting one computer from the front.

**Transition:**
"Once the notebook is open, we need to check that Python actually runs."

## Slide 9: Notebook Tools

**Timing:** 3 minutes
**Speaker:** Enzo

**Main Script:**
"The long install command is only for anyone whose tools are missing. In the notebook, go to Setup Check and run `print("Python is working!")`. If that message appears below the cell, you are ready. If you see an error, raise your hand."

**Notebook Action:**
Under `## Setup Check`, run the cell containing:

```python
print("Python is working!")
```

**Facilitator Check:**
The output should be `Python is working!`.

**Delivery Notes:**

- On Windows, `py` may work when `python` does not.
- Do not spend time explaining NumPy, pandas, or scikit-learn here.

**Transition:**
"If that worked, the last setup step is making sure you have the correct file."

## Slide 10: Download Notebook

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"If you do not already have the Starter notebook, open the link on this slide and download it now. The file should be called `01_AIDK_W1_Starter.ipynb`. Keep it open beside the slides for the rest of the workshop."

**Delivery Notes:**

- Confirm that attendees have the Starter notebook, not only the Solutions notebook.
- Give the room enough time to finish the download.

**Transition:**
"Setup is done. Here is how the rest of today will work."

## Slide 11: Workshop 1 Flow - Section

**Timing:** 30 seconds
**Speaker:** Enzo

**Main Script:**
"From here onward, we will explain one idea, run the matching notebook example, then give you a small prompt to try."

**Transition:**
"The order is deliberately simple."

## Slide 12: Workshop 1 Flow

**Timing:** 1 minute
**Speaker:** Enzo

**Main Script:**
"We will understand why Python is useful, translate familiar JavaScript ideas, work through the Python basics, and complete every notebook prompt. At the end, three larger exercises combine the ideas. Keep the notebook in the same order as the slides."

**Delivery Notes:**

- Tell attendees not to rush ahead through the blanks.
- Explain that every fill-in cell will be shown on a slide before they attempt it.

**Transition:**
"Let us start with what changes when we move from JavaScript to Python."

## Slide 13: About Python and JS vs Python - Section

**Timing:** 30 seconds
**Speaker:** Enzo

**Main Script:**
"If you have used JavaScript, the ideas will look familiar. Python mostly changes how those ideas are written. If JavaScript is also new to you, that is fine; focus on the Python side."

**Transition:**
"First, why are we using Python at all?"

## Slide 14: Why Python

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"Python is readable and widely used for data, AI, and machine learning. The example in the notebook creates a variable called `topic`, then prints a message using that variable. Run it once and check the output."

**Notebook Action:**
Under `## About Python - Why Python`, run:

```python
topic = "Python Foundations"
print("Today we are learning:", topic)
```

**Facilitator Check:**
The message should end with `Python Foundations`.

**Transition:**
"Now compare the same decision in JavaScript and Python."

## Slide 15: Code Blocks

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"Both examples check whether the score is at least 60. JavaScript uses curly braces. Python uses a colon and indentation. In Python, that indentation is part of the code, so the `print()` line must stay underneath the `if`."

**Notebook Action:**
Under `## JS vs Python - Code Blocks`, predict the output, then run the cell beginning `score = 72`.

**Facilitator Check:**
The output is `Pass`.

**Delivery Notes:**

- Point out the colon.
- Check indentation first when an attendee sees an error.

**Transition:**
"Next, let us store a few values."

## Slide 16: Variables

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"A variable is a name attached to a value. JavaScript often starts with `let`, `const`, or `var`. Python lets us write the name and value directly. Run the example and notice that one `print()` call can show several variables."

**Notebook Action:**
Under `## JS vs Python - Variables`, run the cell beginning `name = "Ravi"`.

**Facilitator Check:**
The output contains `Ravi`, `82`, and `True`.

**Transition:**
"Now create one variable yourself."

## Slide 17: Variables - Your Turn

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"This prompt is optional, but it is a useful first attempt. Create a variable called `course`, store your course name inside it, then print that variable. Use the example directly above if you need the pattern."

**Notebook Action:**
Complete the cell containing:

```python
# Try it out!

# TODO: Create a variable called course and store your course name inside it
# Hint: variable_name = value

# TODO: Print the course variable
```

**Facilitator Check:**
Any text value is acceptable. One valid answer is:

```python
course = "DAAA"
print(course)
```

**Delivery Notes:**

- Do not insist that everyone finishes this optional prompt.
- If someone writes `print("course")`, ask whether they want the word or the stored value.

**Transition:**
"That brings us to `print()` itself."

## Slide 18: Printing Output

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"`print()` is Python's version of `console.log()`. It can show text, a variable, or several values together. Run both print statements and notice that quotation marks are used for text written directly, but not for the variable name."

**Notebook Action:**
Under `## JS vs Python - Printing Output`, run the cell beginning `print("Hello SPAI!")`.

**Facilitator Check:**
The cell prints `Hello SPAI!` followed by `Student: Aisha`.

**Transition:**
"Use that same idea to complete the next line."

## Slide 19: Printing Output - Your Turn

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"The variable `name` already stores `Moiz`. Replace the blank inside `print()` so the cell prints the stored value."

**Notebook Action:**
Complete:

```python
name = "Moiz"
print(_____)
```

**Facilitator Check:**

```python
name = "Moiz"
print(name)
```

**Delivery Notes:**

- The answer is `name` without quotation marks.
- Let attendees type and run it before confirming.

**Transition:**
"Two special values appear often in Python."

## Slide 20: Booleans and None

**Timing:** 2 minutes
**Speaker:** Enzo

**Main Script:**
"Python uses `True` and `False` for yes-or-no values, with capital letters. `None` means there is no value yet. Here, the student passed, but no remarks have been entered."

**Notebook Action:**
Under `## JS vs Python - Booleans and None`, run the cell beginning `passed = True`.

**Facilitator Check:**
The output is `True` and then `None`.

**Delivery Notes:**

- `None` is not the text `"None"`.
- A common mistake is writing lowercase `true` or `false`.

**Transition:**
"That finishes the quick JavaScript comparison."

## Slide 21: Python Basics - Section and Speaker Handover

**Timing:** 1 minute
**Speaker:** Enzo, then Murugan

**Main Script - Enzo:**
"We have covered the differences you will notice immediately: indentation, variable assignment, printing, and a few special values. Murugan will take over from here and guide us through the hands-on Python basics."

**Main Script - Murugan:**
"Thanks, Enzo. Keep the notebook open. We will continue the same pattern: example first, then a matching prompt for you to complete."

**Delivery Notes:**

- Pause briefly for the handover.
- Murugan leads Slides 22-45.

**Transition:**
"We will start by checking what type of value Python is storing."

## Slide 22: Data Types

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Python can store text, whole numbers, decimals, booleans, and empty values. The `type()` function tells us what Python thinks each value is. Run the example and compare the five results."

**Notebook Action:**
Under `## Python Basics - Data Types`, run the cell beginning `name = "Aisha"`.

**Facilitator Check:**
The outputs include `str`, `int`, `float`, `bool`, and `NoneType`.

**Delivery Notes:**

- Explain that Python calls a string `str` and an integer `int`.
- Do not require attendees to memorise every type name.

**Transition:**
"Now inspect one variable yourself."

## Slide 23: Data Types - Your Turn

**Timing:** 2 minutes
**Speaker:** Murugan

**Main Script:**
"The variable is called `student_score`. Put that variable inside `type()` so Python tells you what kind of value 95 is."

**Notebook Action:**
Complete:

```python
student_score = 95
print(type(_____))
```

**Facilitator Check:**

```python
student_score = 95
print(type(student_score))
```

The output contains `int`.

**Transition:**
"Next are two functions Python already provides."

## Slide 24: Built-in Functions

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Built-in functions are tools that Python already gives us. `sum()` adds the values in the list, and `len()` counts how many values there are. Dividing the total by the count gives the average."

**Notebook Action:**
Under `## Python Basics - Built-in Functions`, run the cell beginning `scores = [72, 85, 60, 91]`.

**Facilitator Check:**
There are 4 scores and the average is 77.0.

**Transition:**
"Use those two function names in the next cell."

## Slide 25: Built-in Functions - Your Turn

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Fill the first blank with the function that adds the scores. Fill the second with the function that counts them. Then run the cell and check the average."

**Notebook Action:**
Complete:

```python
scores = [70, 80, 90]
total = _____(scores)
count = _____(scores)
print(total / count)
```

**Facilitator Check:**

```python
scores = [70, 80, 90]
total = sum(scores)
count = len(scores)
print(total / count)
```

The output is `80.0`.

**Support Prompts:**

- "Which function added the scores on the previous slide?"
- "Which function counted the number of scores?"

**Transition:**
"Now let us convert text into a number."

## Slide 26: Input and Conversion

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"`input()` always gives us text. Before doing maths, we can convert that text with `int()`. This example uses the text `"75"`, converts it to the number 75, and then adds 5."

**Notebook Action:**
Under `## Python Basics - Input and Conversion`, run the cell beginning `score_text = "75"`.

**Facilitator Check:**
The output is `80`.

**Transition:**
"Now write the real input version."

## Slide 27: Input and Conversion - Your Turn

**Timing:** 4 minutes
**Speaker:** Murugan

**Main Script:**
"Write three lines: ask for a score with `input()`, convert the answer with `int()`, and print the converted score plus 10. When you run the cell, it will wait for you to type a value."

**Notebook Action:**
Complete the cell containing:

```python
# TODO: Ask the user for their score using input()
# TODO: Convert the answer into an integer
# TODO: Print the score plus 10
# Hint: int(...) converts text to a whole number
```

**Facilitator Check:**
One valid answer is:

```python
score_text = input("Enter your score: ")
score = int(score_text)
print(score + 10)
```

**Delivery Notes:**

- If attendees type letters, Python will raise a conversion error. That is acceptable for today.
- Remind them to enter a value after running the cell.

**Transition:**
"Once we have a number, the program can make a decision with it."

## Slide 28: Conditionals

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"A conditional checks choices from top to bottom. Python tests `if` first, then `elif`, and uses `else` when neither earlier condition matches. With a score of 72, predict the message before running the cell."

**Notebook Action:**
Under `## Python Basics - Conditionals`, run the cell beginning `score = 72`. Change the score once and run it again.

**Facilitator Check:**
At 72 the output is `Pass`. At 80 or above it is `Excellent`.

**Transition:**
"Complete a shorter conditional next."

## Slide 29: Conditionals - Your Turn

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Fill the comparison operator after `score`, then fill the missing branch keyword before the second message. The score is 58, so check which result should appear."

**Notebook Action:**
Complete:

```python
score = 58

if score _____ 60:
    print("Pass")
_____:
    print("Try again")
```

**Facilitator Check:**

```python
score = 58

if score >= 60:
    print("Pass")
else:
    print("Try again")
```

The output is `Try again`.

**Delivery Notes:**

- Check the `>=` operator, the colon after `else`, and indentation.
- Ask attendees to test exactly 60 after the first successful run.

**Transition:**
"Next, we will repeat an action without copying the line many times."

## Slide 30: For Loops

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"A loop repeats code. `range(5)` gives the numbers 0 through 4. The second loop visits each name in a list and prints a greeting. Notice that the repeated line stays indented."

**Notebook Action:**
Under `## Python Basics - For Loops`, run the cell beginning `for i in range(5):`, including the names example.

**Facilitator Check:**
The first loop prints 0-4. The second greets Aisha, Ben, and Chloe.

**Transition:**
"Write the same pattern for a list of students."

## Slide 31: For Loops - Your Turn

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Use a `for` loop to print each name in the `students` list. The hint gives you the first line. Add the indented `print()` line underneath it."

**Notebook Action:**
Complete:

```python
students = ["Aisha", "Ben", "Chloe"]

# TODO: Use a for loop to print each student name
# Hint: for one_student in students:
```

**Facilitator Check:**

```python
students = ["Aisha", "Ben", "Chloe"]

for one_student in students:
    print(one_student)
```

**Delivery Notes:**

- Check the colon and indentation before anything else.
- The loop variable may have another sensible name.

**Transition:**
"Those groups of names and scores are lists."

## Slide 32: Lists

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"A list stores several values in order. Python counts positions from zero, so `scores[0]` is the first value. `append()` adds another value, and a loop can visit every item."

**Notebook Action:**
Under `## Python Basics - Lists`, run the cell beginning `scores = [72, 85, 60, 91]`.

**Facilitator Check:**
The first item is 72, the original length is 4, 78 is appended, and the final loop prints every score.

**Transition:**
"Use those three operations on a list of names."

## Slide 33: Lists - Your Turn

**Timing:** 4 minutes
**Speaker:** Murugan

**Main Script:**
"Complete all three instructions: append one more name, print the first name, and print the entire list. Use the example directly above for the method names and position."

**Notebook Action:**
Complete:

```python
student_names = ["Aisha", "Ben"]

# TODO: Add one more student name to the list
# TODO: Print the first student name
# TODO: Print the full list
```

**Facilitator Check:**
One valid answer is:

```python
student_names = ["Aisha", "Ben"]

student_names.append("Chloe")
print(student_names[0])
print(student_names)
```

**Delivery Notes:**

- Any additional name is acceptable.
- Remind attendees that the first position is 0.

**Transition:**
"A dictionary stores values by label instead of position."

## Slide 34: Dictionaries

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"A dictionary stores key-value pairs. The keys `name`, `course`, and `score` label the values. Instead of asking for position zero, we ask for a specific key such as `student["name"]`."

**Notebook Action:**
Under `## Python Basics - Dictionaries`, run the cell containing Aisha's details.

**Facilitator Check:**
The output is `Aisha` followed by `88`.

**Transition:**
"Choose the correct key in the next dictionary."

## Slide 35: Dictionaries - Your Turn

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"Fill the blank with the key that prints Ben's course. The key must be written as text inside the square brackets."

**Notebook Action:**
Complete:

```python
student = {
    "name": "Ben",
    "course": "DISM",
    "score": 76
}

print(student[_____])
```

**Facilitator Check:**

```python
print(student["course"])
```

The output is `DISM`.

**Delivery Notes:**

- The quotation marks around `"course"` matter.
- Ask attendees to identify the three available keys before answering.

**Transition:**
"The last new idea is writing a reusable function."

## Slide 36: Functions

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"A function groups reusable steps under one name. `def` starts the function, `numbers` is the input, and `return` sends the answer back. Once the function exists, we can call `calculate_average(scores)`."

**Notebook Action:**
Under `## Python Basics - Functions`, run the cell beginning `def calculate_average(numbers):`.

**Facilitator Check:**
The output is `77.0`.

**Transition:**
"Complete one comparison inside a second function."

## Slide 37: Functions - Your Turn

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"The function should return `Pass` when the score is at least the passing mark. Fill the blank with that mark, then test the function using 72."

**Notebook Action:**
Complete:

```python
def check_pass(score):
    if score >= _____:
        return "Pass"
    else:
        return "Try again"

print(check_pass(72))
```

**Facilitator Check:**

```python
def check_pass(score):
    if score >= 60:
        return "Pass"
    else:
        return "Try again"

print(check_pass(72))
```

The output is `Pass`.

**Delivery Notes:**

- Ask attendees to test 59, 60, and 80 after the function works.
- Keep the explanation focused on reusing named steps.

**Transition:**
"You now have every individual piece needed for the final practice."

## Slide 38: Practice - Section

**Timing:** 1 minute
**Speaker:** Murugan

**Main Script:**
"The next three questions combine the ideas. Practice 1 is heavily guided, Practice 2 asks you to write a loop, and Practice 3 combines a dictionary, list, function, and conditional. Work in the Starter notebook and use earlier examples when you get stuck."

**Delivery Notes:**

- Ask facilitators to spread around the room.
- Attendees may discuss, but everyone should type their own attempt.
- Do not open the Solutions notebook on the projector.

**Transition:**
"Start with the class score summary."

## Slide 39: Practice 1 - Complete a Class Score Summary

**Timing:** 6 minutes
**Speaker:** Murugan

**Main Script:**
"Fill every blank. First find the total and number of scores, then calculate the average. After that, complete the `if`, `elif`, and `else` branches so the status is Excellent, Pass, or Needs support. The expected output is on the slide."

**Notebook Action:**
Under `## Practice 1 - Complete a Class Score Summary`, complete the full starter cell. Do not reveal the code below until attendees have attempted it.

**Facilitator Check:**

```python
scores = [72, 85, 60, 91, 45]

total_score = sum(scores)
number_of_scores = len(scores)
average_score = total_score / number_of_scores

if average_score >= 80:
    status = "Excellent"
elif average_score >= 60:
    status = "Pass"
else:
    status = "Needs support"

print("Average:", average_score)
print("Status:", status)
```

Expected output:

```text
Average: 70.6
Status: Pass
```

**Support Prompts:**

- "Which function adds every score?"
- "Which function counts the values?"
- "What does at least 80 look like as an operator?"
- "Which branch comes between `if` and `else`?"

**Delivery Notes:**

- Give a halfway reminder and a one-minute warning.
- Check that the final two print lines remain in the cell.

**Transition:**
"The next question repeats that classification for every score."

## Slide 40: Practice 2 - Write a Result Loop

**Timing:** 6 minutes
**Speaker:** Murugan

**Main Script:**
"Loop through every score. Inside the loop, classify the current score using the same three rules, then print the score and its status. The conditionals and final print line must stay inside the loop."

**Notebook Action:**
Under `## Practice 2 - Write a Result Loop`, write the solution beneath the scores list.

**Facilitator Check:**

```python
scores = [72, 85, 60, 91, 45]

for score in scores:
    if score >= 80:
        status = "Excellent"
    elif score >= 60:
        status = "Pass"
    else:
        status = "Needs support"

    print(score, status)
```

Expected output:

```text
72 Pass
85 Excellent
60 Pass
91 Excellent
45 Needs support
```

**Support Prompts:**

- "What is the loop variable for one score?"
- "Which lines need to repeat for every score?"
- "Is the final `print()` still inside the loop?"

**Transition:**
"The final question packages the same logic into a function."

## Slide 41: Practice 3 - Build a Student Summary

**Timing:** 8 minutes
**Speaker:** Murugan

**Main Script:**
"Write `summarise_student(student)`. Inside the function, calculate the average of `student["scores"]`, classify it with the same thresholds, then print the student's name, average, and status. Finally, call the function."

**Notebook Action:**
Under `## Practice 3 - Build a Student Summary`, write the function beneath the provided dictionary and call it.

**Facilitator Check:**

```python
student = {
    "name": "Aisha",
    "scores": [88, 73, 91]
}

def summarise_student(student):
    average = sum(student["scores"]) / len(student["scores"])

    if average >= 80:
        status = "Excellent"
    elif average >= 60:
        status = "Pass"
    else:
        status = "Needs support"

    print("Name:", student["name"])
    print("Average:", average)
    print("Status:", status)

summarise_student(student)
```

Expected output:

```text
Name: Aisha
Average: 84.0
Status: Excellent
```

**Support Prompts:**

- "Where is the list of scores inside the dictionary?"
- "Which earlier function calculated an average?"
- "Which lines belong inside the function?"
- "Have you called the function after defining it?"

**Delivery Notes:**

- If time is short, build the first line together and let attendees finish the classification and printing.
- Do not paste the complete answer into the Starter notebook.

**Transition:**
"Save your notebook. The coding section is complete."

## Slide 42: Summary of Today - Section

**Timing:** 1 minute
**Speaker:** Murugan

**Main Script:**
"Today you read Python, ran examples, completed blanks, and wrote several pieces yourself. It is normal if some syntax still feels new. The important part is that you now recognise the basic pieces and know where to find working examples."

**Notebook Action:**
Scroll to `## Summary - Before Workshop 2`. There is no new code to run.

**Transition:**
"Here is the full recap in one view."

## Slide 43: Summary

**Timing:** 2 minutes
**Speaker:** Murugan

**Main Script:**
"We used Python syntax and indentation, variables and data types, built-in functions and input conversion, conditionals and loops, lists and dictionaries, and our own functions. In Workshop 2, those pieces become tools for understanding data with pandas, NumPy, matplotlib, and seaborn."

**Delivery Notes:**

- Take one or two quick questions if time allows.
- Remind attendees that they can rerun and modify the notebook examples later.

**Transition:**
"Before everyone leaves, we need one group photo."

## Slide 44: Photo Taking

**Timing:** 2 minutes
**Speaker:** Murugan

**Main Script:**
"Please stay where you are for a quick group photo. Look toward the camera, and we will take a couple of shots."

**Delivery Notes:**

- Ask facilitators to help organise the room quickly.
- Take more than one photo.

**Transition:**
"Thank you. One final attendance step before you go."

## Slide 45: Thank You and Attendance

**Timing:** 3 minutes
**Speaker:** Murugan

**Main Script:**
"That is Workshop 1. Thank you for coming and for actually trying the exercises. Keep both your notebook and the slide link. Next time, we will use Python to understand data and make charts. Before you leave, scan the attendance QR code and submit the form. If anything from today still feels unclear, come and ask us."

**Delivery Notes:**

- Keep the slide visible while attendees scan the QR code.
- Remind everyone of Workshop 2 on 22 July, 3:00 PM-5:00 PM.
- Thank the facilitators and organising team.
- Confirm that the room has submitted attendance before closing.

**Closing Line:**
"Thanks everyone. We will see you at Workshop 2."
