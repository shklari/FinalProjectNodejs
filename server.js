const express = require('express');
const app = express();
const port = 3000;
const apartments = [
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
    let filteredProperties = apartments;
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