import "Stubs";

class Dal_stub{
    add_4g = function (file) {};

    get_appartement = function(block, building, appartement){
        if(!block || ! building || ! appartement)
            throw ErrorEvent;
        for(let prop in properties){
            if((prob.block && prop.block === block) && prop.buliding === building && prop.appartement === appartement)
                return prop;
        }
    };

    get_appartements = function (block, building) {
        if(!block || ! building)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if((prob.block && prop.block === block) && prop.buliding === building)
                ret.push(prop);
        }
        return ret;
    };

    get_buildings = function (block) {
        if(!block)
            throw ErrorEvent;
        let ret = [];
        for(let prop in properties){
            if(prob.block && prop.block === block)
                ret.push(prop);
        }
        return ret;
    };

    add_purchase = function(appartement_purchase, first_buyer_name, first_buyer_id, second_buyer_name = null,
                            second_buyer_id = null){};

    get_purchase = function(block_num, building_num, appartement_num){};

    set_purchase = function(block_num, building_num, appartement_num, new_purchase_features){};

    get_report = function(block_num, building_num, appartement_num){};

    get_all_unreported_purchases = function(){};

    register_new_costumer = function(username, password, mail){};

    register_new_lawyer = function(username, password, mail){};

    get_user = function(username){};

    extract_files_for_purchases = function(files_list){};
}
