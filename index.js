let myLibrary = []; 

const addButton = document.getElementById('addButton');
const closeFormButton = document.getElementById('closeForm');
 


//add button that is gonna handle form using addNewBook 
addButton.addEventListener('click' , function() {
  openForm()
});

//close forum by pressing close
closeFormButton.addEventListener('click', function(){
    closeForm()
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











