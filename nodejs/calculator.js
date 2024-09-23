import inquirer from 'inquirer'
function add(n1, n2) {
    let result = parseFloat(n1) + parseFloat(n2);
    return result;
}
function subtract(n1, n2) {
    let result = parseFloat(n1) - parseFloat(n2);
    return result;
}
var questions = [
    {
        type: 'input',
        name: 'calculator',
        message: 'add | subtract '
    }
]
const args = process.argv.slice(2);

if (isNaN(args[0]) || isNaN(args[1])){
    console.log(`Please Enter two numbers`);
    process.exit(1);
} 

inquirer.prompt(questions).then((answers) => {
    if (answers.calculator === "add") {
        const num2 = args.map((num) => parseFloat(num)).reduce(add, 0);
        console.log(`${args.join(" + ")} = ${num2}`);
    } else if (answers.calculator === "subtract") {
        const num2 = args.map((num) => parseFloat(num)).reduce(subtract);
        console.log(`${args.join(" - ")} = ${num2}`);
    } else {
        console.log(`Unkwon Operator`);
    }
})
console.log(`Please Enter Operation:`);

