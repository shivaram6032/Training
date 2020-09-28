function objectLength() {
    var student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12 };
    var len = Object.keys(student).length
    console.log(len)
}
objectLength()