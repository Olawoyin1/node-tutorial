const { readFile } = require("fs")

// const first = fs.readFileSync("./components/book.txt", "utf8")


// console.log(first);

readFile("./components/boook.txt", "utf8", (err, res)=>{
    if (err) {
        console.log(err);
        return
    }
    console.log(res);
})