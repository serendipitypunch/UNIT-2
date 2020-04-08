/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
//const studentLI = document.getElementsByClassName ("student-item");
const studentLI = document.querySelectorAll('.student-item');
const perPage = 10;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage;
   const endIndex = page * perPage;
   for (i = 0; i < list.length; i += 1) {
      if (i >= startIndex && i < endIndex) {
         studentLI[i].style.display = "";
      } else {
         studentLI[i].style.display = "none";
      }
   };

}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   //creates pageNum var and stores list length divided by the perPage var
   const pageNum = list.length / perPage;
   //gets the div .page by className and stores it in pageDiv var
   const pageDiv = document.getElementsByClassName("page");

   //creates a div element and stores in var pageDiv
   //changes the div var className to pagination
   const div = document.createElement("div");
   div.className = ("pagination");



   //creates a ul element and stores it in var UL
   const UL = document.createElement("ul");

 
   
   for (i = 0; i < pageNum; i += 1) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = "#";
      a.textContent = i;
      li.appendChild(a);
      UL.appendChild(li);
      div.appendChild(UL);
      pageDiv.appendChild = div;
   }

   li[0].className = "active";
   

   for (i = 0; i < ; i += 1) {

   }
};




console.log(appendPageLinks(studentLI));
showPage(studentLI, 1);


// Remember to delete the comments that came with this file, and replace them with your own code comments.