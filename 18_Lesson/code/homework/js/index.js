//get books list
const booksList = document.getElementById("fav_books_list");
const bookName = document.getElementById("name_id");
const bookAuthor = document.getElementById("author_id");
const bookYear = document.getElementById("year_id");

fetch("https://t1ya.github.io/my_favorite_book/fav_books_list.json")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    data.forEach(book => {
        const bookListCard = document.createElement("li");
        bookListCard.innerText = "\"" + book.name + "\" by " + book.author;
        booksList.appendChild(bookListCard);
    });
})
.catch(err=>{
    console.error(err.message)
})

//get my favorite book
fetch("https://t1ya.github.io/my_favorite_book/my_favorite_book.json")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    const {name, author, year} = data;
    bookName.innerText = name;
    bookAuthor.innerText = author;
    bookYear.innerText = year
})
.catch(err =>{
    console.error(err.message())
})
