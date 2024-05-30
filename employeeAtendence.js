employeeList=[
    {
        emp_id:1000,
        name:"virat",
        department:"ECE",
        atendence : "Present",
        wage:0,
        atendenceData:[]
    },
    {
        emp_id:1001,
        name:"abd",
        department:"CSE",
        atendence : "Present",
        wage:0,
        atendenceData:[]
    },
    {
        emp_id:1002,
        name:"gayle",
        department:"ISE",
        atendence : "Present",
        wage:0,
        atendenceData:[]
    },
    {
        emp_id:1003,
        name:"sami",
        department:"ECE",
        atendence : "Present",
        wage:0,
        atendenceData:[]
    },
    {
        emp_id:1004,
        name:"bhuvi",
        department:"CSE",
        atendence : "Present",
        wage:0,
        atendenceData:[]
    }
]


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
function addWage(){
    for (let value of employeeList){
        if (value.atendence=="Present"){
            let attend = Math.floor(Math.random()*2)
            if (attend==0){
                value.wage=4*20
            }else{
                value.wage=8*20
            }
        }
    }
}
 genrateAtendence();
 addWage();
 console.log(employeeList)