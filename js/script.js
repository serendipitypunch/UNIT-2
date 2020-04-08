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
   Create the `showPage` function 
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

   const pageNum = list.length / perPage;

   let div = document.createElement("div");
   div.className = "pagination";
   
   let pageDiv = document.querySelector(".page");
   let ul = document.createElement("ul");
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



appendPageLinks(studentLI);
