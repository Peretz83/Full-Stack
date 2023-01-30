const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

function connectAsync() {
    return new Promise((resolve, reject) => {

        // Connect options - prevent console warnings:
        const options = { useNewUrlParser: true, useUnifiedTopology: true };

        // Connect to MongoDB:
        mongoose.connect("mongodb://localhost:27017/hackerU_bookDB", options, (err, db) => {
            if(err) {
                reject(err);
                return;
            }
            resolve(db);
        });
    });
}

connectAsync()
    .then(db => console.log("Connected to MongoDB."))
    .catch(err => console.log(err));

// {
//     "books": [
//       {
//         "title": "The Alchemist",
//         "isbn": "9788532520056",
//         "description": "The Alchemist is a novel by Brazilian author Paulo Coelho that tells the story of Santiago, a shepherd boy who dreams of discovering a treasure. Along the way, he learns about the importance of following his heart and living in the present moment.",
//         "price": 55,
//         "quantity": 55
//       },
//       {
//         "title": "To Kill a Mockingbird",
//         "isbn": "9780061120084",
//         "description": "To Kill a Mockingbird is a Pulitzer Prize-winning novel by Harper Lee set in the Deep South. The story is told from the perspective of a young girl named Scout Finch, and it deals with themes of racial injustice and the loss of innocence.",
//         "price": 55,
//         "quantity": 55
//       },
//       {
//         "title": "Pride and Prejudice",
//         "isbn": "9780199535933",
//         "description": "Pride and Prejudice is a novel by Jane Austen that tells the story of the Bennett family and their interactions with the wealthy elite of their small town. The novel explores themes of love, marriage, and societal expectations.",
//         "price": 55,
//         "quantity": 55
//       },
//       {
//         "title": "The Great Gatsby",
//         "isbn": "9781586638184",
//         "description": "The Great Gatsby is a novel by F. Scott Fitzgerald set in the Roaring Twenties. The story follows the life of wealthy young man named Jay Gatsby and his relationships with those around him, including his neighbor, Nick Carraway.",
//         "price": 55,
//         "quantity": 55
//       },
//       {
//         "title": "One Hundred Years of Solitude",
//         "isbn": "9780060531041",
//         "description": "One Hundred Years of Solitude is a novel by Gabriel García Márquez that tells the story of the Buendía family and the town of Macondo, which is based on the author's hometown. The novel is known for its magical realism and its exploration of themes such as isolation and repression.",
//         "price": 55,
//         "quantity": 55
//       }
//     ]
//   }