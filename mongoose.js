const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://mehulkanzariya26112002_db_user:yDw6k78vhKXcJHGQ@cluster0.ajdbg80.mongodb.net/student", {
    useNEWUrlparser: true,
    useUnifiedtopology: true,
});

const studentschema = new mongoose.Schema({
    name: String,
    department: String,
    startYear: Number,
    endYear: Number,
    enrollment: Number,
    address: String,
});

const Student = mongoose.model("Student",studentschema);

console.log("mongoDB connected successfully");

const student = new Student({
    name: "mehul kanzariya",
    department: "computer science",
    startyear: 2025,
    endyear: 2026,
    enrollment: 240823048,
    address: "rajkot",
});

student
    .save()
    .then(() => {
        console.log("student saved successfully");
    })
    .catch((error) => {
        console.error("error saving student:",error);
    });

