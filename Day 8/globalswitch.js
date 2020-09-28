console.log(process.argv)

switch (process.argv[2]) {
    case 'prod':
        console.log("You are in production.");
        break;
    case 'dev' :
        console.log("You are in development.");
        break;
    default :
        console.log("This is the default case.");
        break;
}