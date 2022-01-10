import constants from '../utils/contants';

const questions_content = [
    {
        type: "list",
        name: 'content',
        message: 'Please select a content which you are using:',
        choices: Array.from(constants.content.values())
    }
]

const questions_project = [
    {
        type: "list",
        name: 'project',
        message: 'Please select a project which you are using:',
        choices: Array.from(constants.project.values())
    }
]

const questions_db = [
    {
        type: "list",
        name: 'database',
        message: 'Please select a database which you are using:',
        choices: Array.from(constants.database.values())
    }
]

const questions_app = [
    {
        type: "list",
        name: 'database',
        message: 'Please select a application which you are using:',
        choices: Array.from(constants.application.values())
    }
]



export default {
    questions_content,
    questions_db,
    questions_project,
    questions_app
}