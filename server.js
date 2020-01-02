const express = require('express');
const app = express();
const port = 8080;
Lawyers = [
    {"name": "aa", "password": "11", "email": "aa@gmail.com"},
    {"name": "bb", "password": "11", "email": "bb@gmail.com"},
    {"name": "cc", "password": "22", "email": "cc@gmail.com"}
];

Costumers = [
    {"name": "aa1", "password": "11", "email": "aa1@gmail.com"},
    {"name": "bb1", "password": "11", "email": "bb1@gmail.com"},
    {"name": "cc1", "password": "22", "email": "cc1@gmail.com"}
];

const properties = [
    {block: 1, building: 2, apartment: 1},
    {block: 1, building: 1, apartment: 1},
    {block: 1, building: 1, apartment: 2},
    {block: 4, building: 1, apartment: 1},
    {block: 5, building: 1, apartment: 1},
    {block: 6, building: 1, apartment: 1},
    {block: 7, building: 1, apartment: 1},
    {block: 9, building: 1, apartment: 1},
    {block: 10, building: 1, apartment: 1},
];

app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = req.params.block;
    const building = req.params.building;
    const apartment = req.params.apartment;
    let filteredProperties = properties;
    console.log(`Block: ${block}, building: ${building}, apartment: ${apartment}`);

    if (block) {
        filteredProperties = filteredProperties.filter(apartment => {
            return apartment.block.toString() === block
        });
        console.log(filteredProperties);
        if (building) {
            filteredProperties = filteredProperties.filter(apartment => apartment.building.toString() === building);
            if (apartment) {
                filteredProperties = filteredProperties.filter(property => property.apartment.toString() === apartment);
            }
        }
    }

    res.send(filteredProperties);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));