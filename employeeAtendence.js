employeeList=[
    {
        emp_id:1000,
        name:"virat",
        department:"ECE",
        atendence : "Present",
        wage:0
    },
    {
        emp_id:1001,
        name:"abd",
        department:"CSE",
        atendence : "Present",
        wage:0
    },
    {
        emp_id:1002,
        name:"gayle",
        department:"ISE",
        atendence : "Present",
        wage:0
    },
    {
        emp_id:1003,
        name:"sami",
        department:"ECE",
        atendence : "Present",
        wage:0
    },
    {
        emp_id:1004,
        name:"bhuvi",
        department:"CSE",
        atendence : "Present",
        wage:0
    }
]
const a= []
 function genrateAtendence(){
        for (let value of employeeList){
            let attend = Math.floor(Math.random()*2)
            if (attend==1){
                value.atendence="Present"
            }else{
                value.atendence="Absent"
            }
        }
 }
 genrateAtendence();
 console.log(employeeList)