const content = new Map([
    ['project', 'project'],
    ['database', 'database'],
    ['application', 'application'],
])
const project = new Map([
    ['tds', 'tds'],
    ['development', 'development'],
])

const database = new Map([
    ['mongodb', 'mongodb'],
    ['elasticsearch', 'elasticsearch'],
    ['kafka', 'kafka'],
    ['mysql', 'mysql'],
    ['postgresql', 'postgresql'],
])

const application = new Map([
    ['postman', 'postman'],
    ['mongodbCompas', 'mongodb compas'],
    ['robo3t', 'robo3t'],
])



export default {
    content,
    database,
    application,
    project
}
