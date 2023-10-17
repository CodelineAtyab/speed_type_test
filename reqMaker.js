console.log("Sending a request!");

const book_holder_div = document.getElementById("book_holder_div");

fetch("https://192.168.137.221:7007/api/book").then((res) => {
    return res.json();
}).then((parsedJson) => {
    console.log(parsedJson);
    parsedJson.forEach(bookObj => {
        console.log(bookObj.bookId);

        const book_cover_div = document.createElement("div");
        book_cover_div.className = "card";

        const title_div = document.createElement("div");
        title_div.className = "title";
        title_div.innerHTML = bookObj.bookName;

        const author_div = document.createElement("div");
        author_div.className = "author";
        author_div.innerHTML = bookObj.author;

        const year_div = document.createElement("div");
        year_div.className = "year";
        year_div.innerHTML = bookObj.pub_year;

        book_cover_div.appendChild(title_div);
        book_cover_div.appendChild(author_div);
        book_cover_div.appendChild(year_div);

        book_holder_div.appendChild(book_cover_div);
    });
});

console.log("req making is done.");

const testFunc = () => {
    console.log("IMported FROM REQ MAKER!!!")
};
