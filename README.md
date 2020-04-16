# UNIT-2
 My Treehouse Techdegree Unit 2 project

For this project I created two functions; one that displays a certain number of students on each page (showPage) and the other to create pagination links (appendPageLinks).

The pagination function (appendPageLinks)
    - Divides the students into groups of 10.
    - Creates page number links below the student list equal to the number of student groups. 
    - Adds an event listener to each link
        - This event handler calls the showPage function
            - passing the value of the link as it's argument

Then the show Page function displays only the students associated with that number group.
    