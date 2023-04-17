const { Wallet: WalletModel } = require("../models/Wallet");
const { Item: ItemModel } = require("../models/Item");

const walletController = {
    create: async(req, res) => {
        if(!req.headers['x-access-token']){
            return res.status(401).json({ msg: "You are not logged in!" });
        }
        try {
            const wallet = {
                name: req.body.name,
                totalGains: 0,
                totalExpenses: 0,
                items: req.body.items
            };

            const response = await WalletModel.create(wallet);
            return res.status(201).json({ response, msg: "Wallet posted" });

        } catch (error) {
            console.log(`CreateWalletControllerError: ${error}`);
        }
    },
    find: async(req, res) => {
        // if(!req.headers['x-access-token']){
        //     return res.status(401).json({ msg: "You are not logged in!" });
        // }
        try {

            // Get wallet Ids
            let walletsIds = [];
            let itemIds = [];
            
            let walletItems = [];

            const wallets = await WalletModel.find();
            wallets.forEach((wallet) => {
                walletItems.push(wallet.name);
                walletItems.push(wallet.items);
                itemIds.push(wallet.items);
            })
            // console.log(walletItems);
            

            // wallets.forEach((wallet, index) => {
            //     walletsIds.push(wallet._id);
                
            // });

            // Verifying which item that are connected with wallet
            const items = await ItemModel.find();

            let itemData = [];

            for(let i = 0; i < walletItems.length; i++){
                if(typeof(walletItems[i]) === "string"){
                    itemData.push(walletItems[i]);
                }
                else{
                    // let promiseData = await Promise.all(walletItems.map(async (id) => {
                    //     let data = await ItemModel.find({ "_id": id.toString });
                    //     return itemData.push(data);
                    // }));

                    // for(let n = 0; n <  walletItems[i]; n++){
                    //     let item = await ItemModel.find({ "_id": walletItems[i][n]._id });
                    //     itemData.push(item);
                    // }

                    let gains = [];
                    let expenses = [];
                    
                    for (let key in walletItems[i]) {
                        let item = await ItemModel.find({ "_id": walletItems[i][key] });
                        // console.log(`walletItems[${i}]: ` + walletItems[i]);
                        // console.log(`walletItems[${i}][key]: ` + walletItems[i][key]);
                        // console.log(item);

                        itemData.push(item);
                        // console.log(itemData);
                      }
                      
                }
            }

            // itemData.forEach((item) => {
            //     if(typeof(item) != "string"){
            //         for(let i = 0; i < itemIds.length; i++){
            //             if(itemIds[i] == item[i]._id){
            //                 console.log(item._id);
            //             }
            //         }
            //     }
            // });

            let finalObj = {}

            for(let i = 0; i < itemData.length; i++){
                if(typeof(itemData[i]) != "string"){
                    for(let n = 0; n < itemData[i].length; n++){
                        // console.log(itemData[i][n]);
                        finalObj[itemData[i-1]] = [itemData[i][n]];
                    }
                }
            }
            // console.log(finalObj);

            const resultado = {};

            // Percorre o objeto e acumula os valores de ganho e gasto para cada banco
            for (const [wallet, items] of Object.entries(finalObj)) {
            resultado[wallet] = {
                gain: 0,
                expense: 0
            };
            for (const item of items) {
                if (item.gainOrExpense === 1) {
                resultado[wallet].gain += item.value;
                } else if (item.gainOrExpense === 2) {
                resultado[wallet].expense += item.value;
                }
            }
            }

            console.log(resultado);
            
            // console.log(itemIds);
            // walletItems.forEach((wallet) => {
            //     if(typeof(wallet) === "string"){
            //         itemData.push(wallet);
            //     }
            //     else{
            //         wallet.forEach(async(item) => {
            //             let data = await ItemModel.find({ "_id": item._id });
            //             itemData.push(data);
            //         });
            //         // console.log(wallet);
            //     }
            // });

            // items.forEach((item) => {
            //     for(let i = 0; i < walletsIds.length; i++){
            //         if(item.wallet == walletsIds[i]){
            //             itemIds.push(item._id);
            //         }
            //     }
            // });


            // Get data from the item
            // let itemData = await Promise.all(itemIds.map(async (id) => {
            //     let data = await ItemModel.find({ "_id": id.toString() });
            //     return data;
            //   }));


            // Get total gains and expenses
            // let totalWalletGains = [];
            // let totalWalletExpenses = [];

            // itemData.forEach((wallet) => {
                
            // });
              
            // const response = itemData;
            const response = resultado;
            
                
            return res.status(201).json({ response });
        } catch (error) {
            console.log(`FindWalletControllerError: ${error}`);
        }
    }
}

module.exports = walletController;