let tickets = [];

for (let i = 0, len = 100000; i < len; i++) {
  tickets.push({
      "number": i,
      "_updatedAt": "2017-01-27T21:16:44.697Z",
      "_createdAt": "2017-01-25T21:51:34.230Z",
      "_user": "5876c349ec5d9a81296b12ec",
      "date": "2017-01-25T21:51:49.351Z",
      "table": {
        "id": "588672575e2065008745889f",
        "name": "T001",
        "seats": 4,
        "area": "588672295e20650087458899",
        "shape": "square",
        "status": "OPEN",
        "position": {
          "x": 0.5985169491525424,
          "y": 0.29739776951672864,
          "height": 0.20074349442379183,
          "width": 0.19915254237288135
        }
      },
      "_scope": {
        "class": "Store",
        "id": "5873e1926884bb00857691a9"
      },
      "notes": [],
      "invoices": [
        {
          "status": "Void",
          "paid": "100",
          "items": [
            {
              "_taxes": 0,
              "_subtotal": 4.99,
              "categories": [
                "5853fa78fb470d011c098677",
                "5854234c50c18701196c344f"
              ],
              "modifiers": [],
              "quantity": 1,
              "discount": 0,
              "price": 4.99,
              "description": "",
              "name": "Mocaccino!",
              "id": "585443c350c18701196c3462"
            },
            {
              "_taxes": 0,
              "_subtotal": 4.25,
              "categories": [
                "5853fa78fb470d011c098677",
                "5854234c50c18701196c344f"
              ],
              "modifiers": [],
              "quantity": 1,
              "discount": 0,
              "price": 4.25,
              "description": "",
              "name": "Capuccinno",
              "id": "5854237b50c18701196c3453"
            },
            {
              "id": "58542bba50c18701196c3460",
              "name": "Special Sandwich",
              "description": "",
              "price": 6.75,
              "discount": 0,
              "quantity": 1,
              "modifiers": [
                {
                  "_updatedAt": "2016-12-16T14:29:50.522Z",
                  "_createdAt": "2016-12-16T14:28:50.543Z",
                  "_user": "58481988f1c14a011a83b773",
                  "name": "Sales Tax",
                  "type": "percent",
                  "isTax": true,
                  "action": "add",
                  "modifiers": [],
                  "amount": 10,
                  "id": "5853fa22fb470d011c098672"
                },
                {
                  "id": "5853fa56fb470d011c098674",
                  "name": "Extra cheese",
                  "amount": 0.5,
                  "type": "fixed",
                  "action": "add",
                  "isTax": false,
                  "group": "Extra",
                  "modifiers": [],
                  "enabled": true
                },
                {
                  "id": "585aa9ef56ed61008238c077",
                  "name": "No pickles",
                  "amount": 0,
                  "isTax": false,
                  "group": "No",
                  "modifiers": [],
                  "enabled": true
                },
                {
                  "id": "585aa9f856ed61008238c079",
                  "name": "No onions",
                  "amount": 0,
                  "isTax": false,
                  "group": "No",
                  "modifiers": [],
                  "enabled": true
                }
              ],
              "categories": [
                "58542a3850c18701196c345a",
                "58542b7250c18701196c345c"
              ],
              "_subtotal": 6.75,
              "_taxes": 0.675
            },
            {
              "id": "586a635dc71c9800835e5d53",
              "name": "Classic Burguer",
              "description": "",
              "price": 5.95,
              "discount": 0,
              "quantity": 1,
              "modifiers": [
                {
                  "_updatedAt": "2016-12-16T14:29:50.522Z",
                  "_createdAt": "2016-12-16T14:28:50.543Z",
                  "_user": "58481988f1c14a011a83b773",
                  "name": "Sales Tax",
                  "type": "percent",
                  "isTax": true,
                  "action": "add",
                  "modifiers": [],
                  "amount": 10,
                  "id": "5853fa22fb470d011c098672"
                },
                {
                  "id": "5853fa56fb470d011c098674",
                  "name": "Extra cheese",
                  "amount": 0.5,
                  "type": "fixed",
                  "action": "add",
                  "isTax": false,
                  "group": "Extra",
                  "modifiers": [],
                  "enabled": true
                }
              ],
              "categories": [
                "585bd3f705b30700928e2d89"
              ],
              "_subtotal": 5.95,
              "_taxes": 0.5950000000000001
            },
            {
              "id": "5854237b50c18701196c3453",
              "name": "Capuccinno",
              "description": "",
              "price": 4.25,
              "discount": 0,
              "quantity": 1,
              "modifiers": [],
              "categories": [
                "5853fa78fb470d011c098677",
                "5854234c50c18701196c344f"
              ],
              "_subtotal": 4.25,
              "_taxes": 0
            },
            {
              "id": "5854236c50c18701196c3451",
              "name": "Expresso",
              "description": "",
              "price": 3.99,
              "discount": 0,
              "quantity": 1,
              "modifiers": [],
              "categories": [
                "5854234c50c18701196c344f",
                "5853fa78fb470d011c098677"
              ],
              "_subtotal": 3.99,
              "_taxes": 0
            }
          ],
          "id": null
        },
        {
          "status": "Void",
          "items": [
            {
              "id": "587fddb7cd5ca4007ae8843e",
              "name": "Tiramisú",
              "description": "",
              "price": 4,
              "discount": 0,
              "quantity": 1,
              "modifiers": [
                {
                  "_updatedAt": "2016-12-16T14:29:50.522Z",
                  "_createdAt": "2016-12-16T14:28:50.543Z",
                  "_user": "58481988f1c14a011a83b773",
                  "name": "Sales Tax",
                  "type": "percent",
                  "isTax": true,
                  "action": "add",
                  "modifiers": [],
                  "amount": 10,
                  "id": "5853fa22fb470d011c098672"
                }
              ],
              "categories": [
                "587fdd88cd5ca4007ae8843c",
                "5859499f3d613000836381ae"
              ],
              "_subtotal": 4,
              "_taxes": 0.4
            },
            {
              "_taxes": 0,
              "_subtotal": 1.75,
              "categories": [
                "5853fa78fb470d011c098677",
                "5854234c50c18701196c344f"
              ],
              "modifiers": [],
              "quantity": 1,
              "discount": 0,
              "price": 1.75,
              "description": "test",
              "name": "Black Tea",
              "id": "58544c2050c18701196c3468"
            }
          ],
          "id": null
        },
        {
          "status": "Void",
          "items": [
            {
              "id": "58542ba550c18701196c345e",
              "name": "Classic Sandwich",
              "description": "",
              "price": 5.99,
              "discount": 0,
              "quantity": 1,
              "modifiers": [
                {
                  "id": "5853fa56fb470d011c098674",
                  "name": "Extra cheese",
                  "amount": 0.5,
                  "type": "fixed",
                  "action": "add",
                  "isTax": false,
                  "group": "Extra",
                  "modifiers": [],
                  "enabled": true
                },
                {
                  "id": "585aa9f856ed61008238c079",
                  "name": "No onions",
                  "amount": 0,
                  "isTax": false,
                  "group": "No",
                  "modifiers": [],
                  "enabled": true
                },
                {
                  "id": "585aaa0656ed61008238c07b",
                  "name": "Ranch Sauce",
                  "amount": 0,
                  "isTax": false,
                  "group": "Sauces",
                  "modifiers": [],
                  "enabled": true
                },
                {
                  "id": "586d6f910ad89b00812015f8",
                  "name": "Medium",
                  "amount": 2,
                  "type": "fixed",
                  "action": "add",
                  "isTax": false,
                  "group": "Size",
                  "modifiers": [],
                  "enabled": true
                }
              ],
              "categories": [
                "58542a3850c18701196c345a",
                "58542b7250c18701196c345c"
              ],
              "_subtotal": 5.99,
              "_taxes": 0
            },
            {
              "_taxes": 0,
              "_subtotal": 3.99,
              "categories": [
                "5854234c50c18701196c344f",
                "5853fa78fb470d011c098677"
              ],
              "modifiers": [],
              "quantity": 1,
              "discount": 0,
              "price": 3.99,
              "description": "",
              "name": "Expresso",
              "id": "5854236c50c18701196c3451"
            }
          ],
          "id": null
        },
        {
          "status": "Void",
          "items": [],
          "id": null
        },
        {
          "status": "Void",
          "items": [],
          "id": null
        }
      ],
      "id": "58891de642933500b51519a5"
    });
}

//
module.exports = {
  docs: tickets
};
