let myLibrary = []; 

const addButton = document.getElementById('addButton');
const closeFormButton = document.getElementById('closeForm');
const addBookButton = document.getElementById('addBook');
const form = document.querySelector('form');

 //submit button actions
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    closeForm();
    displayBooks();
    showAddbutton();
   
    
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
    

}

function addBookToLibrary(){
      // takes user input 
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    //create object
    const entry = new Book(title, author, pages, read);
    
   
    //store users input into an array 
    myLibrary.push(entry);
    
   
    //clears form after submission 
   form.reset();
   

}

function displayBooks(){
    
    const cardlist = document.querySelector('#cards');
    cardlist.innerHTML = '';

    if (!cardlist) {
        console.error('Cannot find card list');
        return;
    }

    myLibrary.forEach((book, index) =>{

      
        console.log('title:', book.title);
        console.log('author:', book.author);
        console.log('pages:', book.pages);
        console.log('checkbox', book.checkbox);
        
        
        const card =  document.createElement('div');
        card.classList.add('card');
        
        card.dataset.index = index;
        
        console.log(index);

        const title = document.createElement('h4');
        title.textContent = book.title;

        const author = document.createElement('h5');
        author.textContent = book.author;

        const pages = document.createElement('p');
        pages.textContent = book.pages;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = book.read;
        checkbox.addEventListener('change', () => {
            book.read = checkbox.checked;
          });

        const remove = document.createElement('input');
        remove.type = 'button';
        remove.onclick = myLibrary.pop(book);

        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        card.appendChild(checkbox);
        card.appendChild(remove);
        
          
        

       
        
       cardlist.appendChild(card);
       
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











