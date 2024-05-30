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

function forMonthAtendence(){
    for (let value of employeeList){
        let totalDays=0;
        if (totalDays<21){
            for (let i=1; i<31 ; i++){
                let attend = Math.floor(Math.random()*2)
                if (attend==1){
                    totalDays++;
                    value.atendence="Present"
                    var here="Present"
                }else{
                    value.atendence="Absent"
                    var here="Absent"
                }

                value.atendenceData.push({
                    day:i,
                    atendences:here,
                    wage:0,
                    hours:0
                })
                if (value.atendenceData[i-1].atendences=="Present"){
                    let attend = Math.floor(Math.random()*2)
                    if (attend==0){
                        value.atendenceData[i-1].wage=4*20;
                        value.atendenceData[i-1].hours=4
                        value.wage+=value.atendenceData[i-1].wage
                    }else{
                        value.atendenceData[i-1].wage=8*20;
                        value.atendenceData[i-1].hours=8;
                        value.wage+=value.atendenceData[i-1].wage
                    }
                }
            }
        }
    }
}


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
//  genrateAtendence();
//  addWage();
forMonthAtendence();
console.log(employeeList)


