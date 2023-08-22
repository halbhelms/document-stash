export class Document {
    constructor(db){
        this.db = db
        this.init()
    }

    init(){
        const creation_string = `
        CREATE TABLE IF NOT EXISTS documents(
            id INTEGER PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(100),
            contents TEXT NOT NULL,
            restrict_to INTEGER DEFAULT -500,
            created_at TEXT DEFAULT CURRENT_DATE,
            updated_at TEXT DEFAULT CURRENT_DATE
        );`

        this.db.exec(creation_string)
    }

    add(title, author, contents, restrict_to){
        const statement = `INSERT INTO documents(title, author, contents, restrict_to) VALUES (@title, @author, @contents, @restrict_to)`

        this.db.prepare(statement).run({title, author, contents, restrict_to})
    }

    findByID(id){
        const statement = `SELECT * FROM documents WHERE id = @id`
        return this.db.prepare(statement).get({ id })
    }

    findAll(){
        const statement = `SELECT * FROM documents ORDER BY id ASC`
        return this.db.prepare(statement).all()
    }

    remove(id){
        const statement = `DELETE FROM documents WHERE id = @id`
        this.db.prepare(statement).run({ id })
    }
}

