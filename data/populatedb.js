const { Client } = require("pg");

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username  VARCHAR ( 30 ),
    message VARCHAR ( 255 ),
    time TIMESTAMP DEFAULT NOW()
  );
  INSERT INTO messages (username ,message) 
  VALUES 
    ('Amando', 'Hi There !'),
    ('Charles','Hello World!');
`;

async function main(){
    console.log("seeding");
    const client = new Client({
        connectionString: "postgresql://harshkr70:Hello12345@@localhost:5432/top_users",
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("database seeding done");
}

main();