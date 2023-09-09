// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// var names = ['rafay','ali','hassan'] 

// // for (var i = 0; i < arr.length; i++){
// //     console.log('v', arr[i])
// // }

// // for (var i = 0; i < names.length; i++){
// //     console.log('v', names[i])
// // }

// // names.forEach(function(value,index){
// //     console.log('value',value)
// //     console.log('index',index)
// // })


// // var printName = function (value, index){
// //     console.log(value,index)
// // }

// // names.forEach(printName)

// var newArr = []
// names.forEach(function(v,i){
//     newArr.push('Mr.' + v)
// })
// console.log('newArr' ,newArr)

// var newNames = names.map(function(v){
//     return 'Mr. ' + v
// })

// console.log('newNames' , newNames)


// var newFilteredNames = []

// for (var i = 0; i < names.length; i++) {
//     if (names[i] === 'ali') {
//         continue
//     }
//     newFilteredNames.push(names[i])
// }

// console.log('new', newFilteredNames)

// var newFilteredNames2 = names.filter(function(v){
//     return v === 'rafay'
// })

// console.log('new', newFilteredNames2)


// var newFilteredNames3 = names.find(function(v){
//     return v !== 'ali'
// })
// console.log('newFilteredNames3', newFilteredNames3)


// var sumOfNum = arr.reduce(function(acc,v){
//     return acc + v
// }, 0)

// console.log('sumOfNum', sumOfNum)


// var objNames = names.reduce(function(acc,v){
//     acc[v] = v
//     return acc
// }, {})
// console.log('objNames',objNames)


// var arrNames = names.reduce(function(acc,v){
//     acc.push('Mr. ' + v)
//     return acc
// }, [])
// console.log('arrNames',arrNames)

// function printSalary(sl){
//     console.log('printsalary',sl)
//     console.log(3,'completed');
// }

// function foo(cb){
//     console.log(1)
//     setTimeout(() => {
//         console.log("Get Salary",1200);
//         cb(1200);
//     }, 1500);
// }

// foo(printSalary)

// // getSalary cb
// // subtractTax
// // subtractHouseRent
// // getDisposalSalary cb

// function getSalary(cb){
//     setTimeout(() => {
//         cb(20000)
//     }, 2000);
// }

// function subtractTax(sal){
//     return sal - (sal*0.25);
// }

// function subtractHouseRent(sal){
//     return sal -1500;
// }

// function getDisposalSalary(cb){
//     getSalary(function(salary){
//         salary = subtractTax(salary);
//         salary = subtractHouseRent(salary);
//         cb(salary);
//     });
// }

// getDisposalSalary(function(data){
//     console.log('Your salary is' , data);
// });


// //arrow function

// function getSalary(cb){
//     setTimeout(() => {
//        cb(20000); 
//     }, 4000);
// }

// function subtractTax(sal,cb){
//     setTimeout(() => {
//        cb(sal - (sal * 0.25)); 
//     }, 1000);
// }

// function subtractHouseRent(sal,cb){
//     setTimeout(() => {
//        cb(sal - 1500); 
//     }, 1000);
// }

// function getDisposalSalary(cb){
//     getSalary(salary_1 =>{
//         console.log('got salary');
//         subtractTax(salary_1,salary_2 =>{
//             console.log('got tax');
//             subtractHouseRent(salary_2,salary_3 => {
//                 console.log('got rent');
//                 cb(salary_3);
//             });
//         });
//     });
// }

// getDisposalSalary(calculatedAmount =>{
//     console.log('final salary amount is ', calculatedAmount);
// })


// salary using  ==> promise function

function getSalary(){
    return new Promise(resolve =>{
        setTimeout(() => {
           resolve(20000) 
        }, 500);
    })
}

function subtractTax(sal){
    return new Promise(resolve =>{
        setTimeout(() => {
           resolve(sal -(sal * 0.25)) 
        }, 500);
    })
}

function subtractHouseRent(sal){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(sal -1500);
        }, 500);
    })
}

function getDisposalSalary(){
    var salarPromise = getSalary();
    var taxPromise = salarPromise
    .then(salary =>{
        return subtractTax(salary);
    })
    var rentPromise = taxPromise
    .then(salary =>{
        return subtractHouseRent(salary);
    });
    return rentPromise
}

// getSalary()
// .then(salary => subtractTax(salary))
// .then(deductedTaxSalary => subtractHouseRent(deductedTaxSalary))

// .then(calculatedAmount => calculatedAmount)
// .catch(err => console.log(err))

getDisposalSalary().then(calculatedAmount =>{
    console.log(calculatedAmount)
})

// login
// errorHandling
// gotoDashboard
// letsLogin

// function login(user,pwd,success,error){
//     console.log('Loading......Loading......Loading......')
//     setTimeout(() => {
//         if(user =='admin' && pwd =='admin'){
//             success();
//         }else{
//             error();
//         }
//     }, 3000);
// };

// function errorHandling(err){
//     console.log('pls try again.....')
// }
// function gotoDashboard(){
//     console.log('WELCOME TO DASHBOARD');
// }

// function letsLogin(u,p){
//     login(u,p,gotoDashboard,errorHandling);

// }

// letsLogin('admin','admin')

// function login(user,pwd, success, error){
//     console.log('LOADING.........');
//     setTimeout(() => {
//        if (user == 'admin' && pwd =='admin'){
//         success();
//        } else{
//         error();
//        }
//     }, 2500);
// }

// function errorHandling(err){
//     console.log('pls try again...')
// }

// function gotoDashboard(){
//     console.log('GOTO DASHBOARD');
// }

// function letsLogin(u,p){
//     login(u,p,gotoDashboard,errorHandling);
// }

// letsLogin('admin','admin')