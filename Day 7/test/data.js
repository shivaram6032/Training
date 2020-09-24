async function getData(){
let company = [
    {"name": "Shiv",
    "userId": 1,
    "salary": 25000
    },
    {"name": "Paul",
    "userId": 1,
    "salary": 15000
    },
    {"name": "Manu",
    "userId": 1,
    "salary": 15000
    },
    {"name": "Rakesh",
    "userId": 2,
    "salary": 85000
    },
    {"name": "Bruno",
    "userId": 3,
    "salary": 75000
    },
    {"name": "Donny",
    "userId": 3,
    "salary": 60000
    },

]
var ans = company.filter(r=> r.salary > 20000)
console.log(ans)
document.getElementById("demo").innerHTML = "The required list is " + ans;
}
getData()