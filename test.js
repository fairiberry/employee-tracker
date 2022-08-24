db.query("INSERT INTO employee first_name, last_name, title, department, salary) VALUES (?, ?, ?, ?, ?", {
    first_name: response.first_name,
    last_name: response.last_name,
    title: response.title,
    department: response.department,
    salary: response.salary
}, function (err, results) {
        console.log("");
        console.log("");
        console.log("┌─────────── •✧✧• ───────────┐");
        console.log(" - EMPLOYEE ADDED SUCCESSFULLY - ");
        console.log("└─────────── •✧✧• ───────────┘");
        console.log("");
        console.log("");
        console.log(results);
    })


    response.title === "Administrator";
    response.salary === 300000;

    salary === 150000;