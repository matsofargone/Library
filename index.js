let myLibrary = []; 

const addButton = document.getElementById('addButton');
const closeFormButton = document.getElementById('closeForm');
const addBookButton = document.getElementById('addBook');

 


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

//Add Book to Library
addBookButton.addEventListener('click', function(){
    console.log('Book added')
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
    //prompt when user selects add button 
    //store users input into an array 
    myLibrary.push();

}

function displayBooks(){
    //code here 
  
}

//open forum
function openForm(){
    document.getElementById('myForm').style.display = 'block';
}

//close forum
function closeForm(){
    document.getElementById('myForm').style.display = 'none';
}

//hides add button 
function hideAddbutton(){
    addButton.style.display = 'none';
}

//shows button above form 
function showAddbutton(){
    
    addButton.style.display = '';
    
}











