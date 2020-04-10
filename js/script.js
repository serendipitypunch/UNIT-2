/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
/*** 
   Create Variables
***/
const studentLI = document.querySelectorAll('.student-item');
const perPage = 10;


/*** 
FUNCTION showPage 
Create the "showPage" function with the arguments of "list" and "page"
   multiply page by perPage and subtract perPage -> store in var startIndex
   multiply page by perPage -> Store in var endIndex
   loop over list length
      if statement: i is greater than or equal to startIndex and less than endIndex
         change studentLI display property to ""
         else: change studentLI display property to "none"
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
FUNCTION appendPageLinks
Create the "appendPageLinks" function with the argument of "list"
   divide list.length by perPage -> store in var "pageNum"
   create div element -> store in "div" var
   select the div with the ".page" class -> store in "pageDiv" var
   create ul element -> store in the "ul" var

   change div class name to "pagination"
   append ul to div
   append div to pageDiv

   loop for value of pageNumber
      create li element -> store in "li" var
      create a element -> store in "a" var
      change a element href value to "#"
      change a element text content to loop integer variable value + 1
      append a to li
      append li to ul

   select the first a element and store in "a" var
   select all a elements and store in "allATags" var
   change a class name to "active";
   call the showPage function and pass preliminary values

   add an click event handler to ul
      loop for the length of allATags
         change allTags class Name to "";
      End loop
      change event target class name to "active";
      call showPage function -> passing StudentLI and the event target textContent value
***/
const appendPageLinks = (list) => {
   let pageDiv = document.querySelector(".page");
   const pageNum = list.length / perPage;
   let div = document.createElement("div");
   let ul = document.createElement("ul");
   
   div.className = "pagination";
   div.appendChild(ul);
   pageDiv.appendChild(div);

   for (i = 0; i < pageNum; i += 1) {
      let li = document.createElement("li");
      let a = document.createElement("a");
      a.href = "#";
      a.textContent = i + 1;
      li.appendChild(a);
      ul.appendChild(li);
   }
    let a = ul.firstElementChild.firstElementChild;
    let allATags = div.querySelectorAll("a");
    a.className = "active";
    showPage(studentLI, 1);

      ul.addEventListener("click", () => {
         for (i = 0; i < allATags.length; i += 1) {
            allATags[i].className = "";
         }
         event.target.className = "active";
         showPage(studentLI, event.target.textContent);
      });
};

/*** 
CALL appendPageLinks passing in studentLI
***/
appendPageLinks(studentLI);