const { writeFileSync } = require('fs');
const { faker } = require('@faker-js/faker');
const { Parser } = require('json2csv');

const { date, internet, person, phone, datatype, lorem } = faker;
const { v4: uuidv4 } = require('uuid');

const affiliates = ['affiliate1', 'affiliate2', 'affiliate3', 'affiliate4', 'affiliate5'];

function generateRandomCadastroJson() {
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

function generateRandomDepositoJson(cadastro) {
    return {
        "affiliate": cadastro.affiliate, // repete o mesmo de cadastro
        "afp": datatype.boolean() ? lorem.word() : "", //  Não repete o mesmo de cadastro
        "campanha": datatype.boolean() ? lorem.word() : "", // pode ter ou pode não ter
        "click_id": datatype.boolean() ? uuidv4() : "", // Não repete o mesmo de cadastro
        "cpf":  uuidv4(), // NOVO
        "email": cadastro.email, // repete o mesmo de cadastro
        "fbclid": uuidv4(), // Não repete o mesmo de cadastro
        "gclic": datatype.boolean() ? lorem.word() : "", // Não repete o mesmo de cadastro
        "name": cadastro.name, // repete o mesmo de cadastro
        "phone": cadastro.phone, // repete o mesmo de cadastro
        "payment_date": date.past(10).toISOString().split('T')[0], // NOVO
        "tags": lorem.words(3).split(' ').join(', ') // Não repete o mesmo de cadastro
    };
}

function generateMultipleJson(n) {
    const jsonArray = [];
    for (let i = 0; i < n; i++) {
        const cadastro = generateRandomCadastroJson();
        jsonArray.push(cadastro);
        jsonArray.push(generateRandomDepositoJson(cadastro));
    }
    return jsonArray;
}

// Gerar 10 JSONs
const jsonList = generateMultipleJson(5);

// Salvar em um arquivo JSON
writeFileSync('cadastro.json', JSON.stringify(jsonList, null, 4));
writeFileSync('deposito.json', JSON.stringify(jsonList, null, 4));

// Converter para CSV e salvar em um arquivo
const json2csvParser = new Parser();
const csv = json2csvParser.parse(jsonList);

writeFileSync('cadastro.csv', csv);
writeFileSync('deposito.csv', csv);

console.log("JSONs e CSVs gerados e salvos com sucesso!");