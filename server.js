import "DataAccessLayer";
const express = require('express');
const app = express();
const port = 3000;

let data = DataAccessLayer();

app.get('/apartments/:block?/:building?/:apartment?', (req, res) => {
    const block = data.getBlock(req.params.block);
    const building = data.getBuilding(req.params.building);
    const apartment = data.getApartment(req.params.apartment);
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