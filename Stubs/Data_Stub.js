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


const purchases = [
    {"apartement_idx": {block: 1, building: 2, apartment: 1}, "buyer1": buyer1, "buyer2": null,
        "parking1": 1, "parking2": 2, "garage_idx": 1, "purchase_date": "1/1/2020", "price": 12000,
        "assesment_number": 1, "reference": 1, "bank": "leumi", "comments": false, "scanning_form": null,
        "last_reporting_date": "29/1/2020", "was_reported": false},
    {"apartement_idx": {block: 1, building: 1, apartment: 1}, "buyer1": buyer2, "buyer2": null,
        "parking1": 3, "parking2": null, "garage_idx": 1, "purchase_date": "1/1/2020", "price": 12000,
        "assesment_number": 2, "reference": 2, "bank": "leumi", "comments": false, "scanning_form": null,
        "last_reporting_date": "29/1/2020", "was_reported": false}
];

const buyer1 = {"id": 111, "name": "avabash"};
const buyer2 = {"id": 222, "name": "yosi"};
