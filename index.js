let myLibrary = []; 

const addButton = document.getElementById('addButton');
const closeFormButton = document.getElementById('closeForm');
const addBookButton = document.getElementById('addBook');
// const defaultForm = document.getElementById('myForm');
const form = document.querySelector('form');

 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
})


//add button that is gonna handle form using addNewBook 
addButton.addEventListener('click' , function() {
  openForm()
  hideAddbutton()
});

//close forum by pressing close
closeFormButton.addEventListener('click', function(){
    closeForm()
    showAddbutton()
});



//Book Constructor
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    
    this.info = function(){
        return (`${title} by ${author}, ${pages} pages, ${read}`)
    }

}

function addBookToLibrary(){
    //code here
      // takes user input 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    //create object
    const entry = Object.create(Book);
    entry.title = title;
    entry.author = author;
    entry.pages = pages;
    entry.read = read;
   
    
    //store users input into an array 
    myLibrary.push(entry);

    console.log(myLibrary);

}

function displayBooks(){
    //code here 
    myLibrary.forEach((book) =>{

    });
}

//open forum
function openForm(){
    form.style.display = 'flex';
}

//close forum
function closeForm(){
    form.style.display = 'none';
}

//hides add button 
function hideAddbutton(){
    addButton.style.display = 'none';
}

//shows button above form 
function showAddbutton(){
    
    addButton.style.display = '';
    
}











