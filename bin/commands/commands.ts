import inquirer from "inquirer";
import shell from "shelljs";

import questions from "../questions/questions";
import contants from '../utils/contants'

export class App {
    init() {
        inquirer.prompt(questions.questions_content).then((answer) => {
            switch (answer.content) {
                case contants.content.get("project"):
                    this.call_project()
                    break;
                case contants.content.get("database"):
                    this.call_database()
                    break;
                case contants.content.get("application"):
                    this.call_application()
                    break;
                default:
                    break;
            }
        })
    }

    call_project() {
        inquirer.prompt(questions.questions_project).then((answer) => {
            switch (answer.project) {
                case contants.project.get("tds"):
                    shell.cd("/")
                    shell.cd('cd ./tds')
                    break;
                case contants.project.get("development"):
                    shell.cd("/")
                    shell.exec('cd ./development')
                    break;
                default:
                    break;
            }
        })
    }

    call_database() {
        inquirer.prompt(questions.questions_db).then((answer) => {
            switch (answer.database) {
                case contants.database.get('mongodb'):
                    shell.exec('mongo')
                    break;
                case contants.database.get('elasticsearch'):
                    shell.exec('elasticsearch')
                    break;
                case contants.database.get('kafka'):
                    shell.exec('')
                    break;
                case contants.database.get('mysql'):
                    shell.exec('')
                    break;
                case contants.database.get('postgresql'):
                    shell.exec('')
                    break;
                default:
                    break;
            }
        })
    }

    call_application() {
        inquirer.prompt(questions.questions_app).then((answer) => {
            switch (answer.application) {
                case contants.application.get('postman'):
                    // shell.exec('postman')
                    break;
                case contants.database.get('mongodbCompas'):
                    // shell.exec('mongodbCompas')
                    break;
                case contants.database.get('robo3t'):
                    // shell.exec('robo3t')
                    break;
                default:
                    break;
            }
        })
    }

}

