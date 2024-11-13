const { writeFileSync } = require('fs');
const { faker } = require('@faker-js/faker');

const { date, internet, person, phone, datatype, lorem } = faker;
const { v4: uuidv4 } = require('uuid');

const affiliates = ['affiliate1', 'affiliate2', 'affiliate3', 'affiliate4', 'affiliate5'];

function generateRandomJson() {
    return {
        "affiliate": affiliates[Math.floor(Math.random() * affiliates.length)],
        "afp": datatype.boolean() ? lorem.word() : "",
        "birth_date": date.past(30).toISOString().split('T')[0],
        "campanha": datatype.boolean() ? lorem.word() : "",
        "click_id": datatype.boolean() ? uuidv4() : "",
        "email": internet.email(),
        "fbclid": uuidv4(),
        "gclic": datatype.boolean() ? lorem.word() : "",
        "ip_adress": internet.ip(),
        "name": person.fullName(),
        "phone": phone.number(),
        "registration_date": date.past(10).toISOString().split('T')[0],
        "tags": lorem.words(3).split(' ').join(', ')
    };
}

function generateMultipleJson(n) {
    const jsonArray = [];
    for (let i = 0; i < n; i++) {
        jsonArray.push(generateRandomJson());
    }
    return jsonArray;
}

// Gerar 10 JSONs
const jsonList = generateMultipleJson(10);

// Salvar em um arquivo
writeFileSync('cadastro.json', JSON.stringify(jsonList, null, 4));

console.log("JSONs gerados e salvos em data.json");
