console.log(process.argv)

if (process.argv[2] == "prod"){
    console.log("You are in production.")
}else if(process.argv[2] == "dev"){
    console.log("You are in development.")
}else {
    console.log("This is the default mode.")
}