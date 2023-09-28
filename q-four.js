let list=[
{
    book:"Games",
    author:"Sachin",
    year:2023,
},
{
    book:"DSA",
    author:"Deepak",
    Year:2008,
},
{
    book:"Stock",
    author:"Abahy",
    year:2018,
}
];
let author= list.filter((book)=>{
    return book.year >=2010;
});
let remaining_author=author.map((book)=>{
 return{...book,
author:book.author.toUpperCase()}
})
console.log(remaining_author);