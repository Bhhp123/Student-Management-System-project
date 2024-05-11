#! /usr/bin/env node
import inquirer from 'inquirer';
console.log('\n\t\x1b[42m------------------------------------------------------\x1b[0m');
console.log('\t\x1b[36m\x1b[3m Bilawal Hussain\'s STUDENT MANAGMEMENT SYSTEM PROJECT \x1b[0m');
console.log('\t\x1b[42m------------------------------------------------------\x1b[0m');
let students = [];
async function main() {
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: '\x1b[36mChoose an action:\x1b[0m',
            choices: [
                { name: 'Add Student', value: 'add' },
                { name: 'View Students', value: 'view' },
                { name: 'Delete Student', value: 'delete' },
                { name: 'Exit', value: 'exit' },
            ],
        });
        switch (action) {
            case 'add':
                const { name, rollNumber, fatherName, className, mobileNumber } = await inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: '\x1b[33mEnter student name:\x1b[0m',
                    },
                    {
                        type: 'number',
                        name: 'rollNumber',
                        message: '\x1b[33mEnter student roll number:\x1b[0m',
                    },
                    {
                        type: 'input',
                        name: 'fatherName',
                        message: '\x1b[33mEnter father\'s name:\x1b[0m',
                    },
                    {
                        type: 'input',
                        name: 'className',
                        message: '\x1b[33mEnter class name:\x1b[0m',
                    },
                    {
                        type: 'input',
                        name: 'mobileNumber',
                        message: '\x1b[33mEnter mobile number:\x1b[0m',
                    },
                ]);
                students.push({ name, rollNumber, fatherName, className, mobileNumber });
                console.log('\x1b[32mStudent added successfully!\x1b[0m');
                break;
            case 'view':
                if (students.length === 0) {
                    console.log('\x1b[31mNo students added yet!\x1b[0m');
                }
                else {
                    console.log('\x1b[36mStudents:\x1b[0m');
                    students.forEach((student, index) => {
                        console.log(`${index + 1}. \x1b[34m${student.name}\x1b[0m (\x1b[35m${student.rollNumber}\x1b[0m) - Father: \x1b[34m${student.fatherName}\x1b[0m - Class: \x1b[34m${student.className}\x1b[0m - Mobile: \x1b[34m${student.mobileNumber}\x1b[0m`);
                    });
                }
                break;
            case 'delete':
                if (students.length === 0) {
                    console.log('\x1b[31mNo students added yet!\x1b[0m');
                }
                else {
                    const { index } = await inquirer.prompt([
                        {
                            type: 'number',
                            name: 'index',
                            message: '\x1b[33mEnter the index of the student to delete:\x1b[0m',
                        },
                    ]);
                    if (index > 0 && index <= students.length) {
                        students.splice(index - 1, 1);
                        console.log('\x1b[32mStudent deleted successfully!\x1b[0m');
                    }
                    else {
                        console.log('\x1b[31mInvalid index!\x1b[0m');
                    }
                }
                break;
            case 'exit':
                return;
        }
    }
}
main();
