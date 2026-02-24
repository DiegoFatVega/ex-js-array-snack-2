const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

//Snack 1 📌

function sum(a, b) {
    return a + b
}

const sumResult = sum(3, 2);
console.log(sumResult)

const longBooks = books.filter(b => b.pages > 300)
console.log(longBooks)

const longBooksTitles = books.forEach(b => console.log(b.title))

//Snack 2 📌

const availableBooks = books.filter(b => b.available)
console.log(availableBooks)

const discountedBooks = availableBooks.map(b => {
    const discountedPrice = (parseFloat(b.price) - (parseFloat(b.price) * 0.2)).toFixed(2);
    return {
        ...b, //spread operator
        price: `${discountedPrice}€`
    }
})
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(books => {
    const parsedPrice = parseInt(books.price)
    return parsedPrice % 2 === 0
})
console.log(fullPricedBook)

//Snack 3 📌

const authors = books.map(book => book.author)
console.log(authors)

const areAuthorsAdults = authors.every(author => author.age > 18)
console.log(areAuthorsAdults)

authors.sort((a, b) => {
    if (areAuthorsAdults) {
        return a.age - b.age
    } else {
        return b.age - a.age
    }

})

console.log(authors)