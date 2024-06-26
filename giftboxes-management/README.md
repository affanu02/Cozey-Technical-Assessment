## Task At Hand

You work for a retailer that allows customers to buy a gift box which contains multiple products. On the frontend, the customer orders 1 cart item (1 box) - however on the backend the warehouse needs to pick and pack multiple items to be a part of this order.

For example, the customer will order (line items):

- Valentines Box
- Birthday Box
- Client Gift Box

But the warehouse will ship the following sub items (individual products) for each item in the order

- Valentines Box

  - Red Roses Bouquet
  - Box of chocolates
  - Love card
  - Women’s perfume

- Birthday Box

  - Birthday cupcake
  - $100 Visa Gift Card
  - Birthday card

- Client Gift Box
  - Bottle of wine
  - Fruit basket
  - Pen

The warehouse team has 2 workflows currently:

The picking team needs a list of all items they need to pick up for that day. Right now they do this manually, by going through all orders for the previous day, taking each line item (Valentine Box, Birthday day box, or Client Gift Box) and breaking it down into a list of how much of each individual product (Red roses bouquet, box chocolates, etc) they need to pick.

For example if the previous day we have 11 order (x5 Valentine Box and 2x Birthday Box, 4x client gift box) - than the picking team will manually create the following list for the picker to pick from the shelves of the warehouse

- Red Roses Bouquet x 5
- Box of chocolates x 5
- Love card x 5
- Women’s perfume x5
- Birthday cupcake x 2
- $100 Visa Gift Card x 2
- Birthday card x2
- Bottle of wine x4
- Fruit basket x4
- Pen x4

The packing team needs a list of orders, the order information, the line items in each order, and the individual products that make up the line litem. Right now they manually create a list like this:

- Order #1
- Order Date: September 15th, 2023
- Line Items
- Birthday Box
  - Birthday cupcake
  - $100 Visa Gift Card
  - Birthday card
- Valentines Box
  - Red Roses Bouquet x1
  - Box of chocolates x1
  - Love card x1
  - Women’s perfume x1
- Ships to
- John Smith
- 100 dundas Street east

- Order #2
- Order Date: September 15th, 2023
- Line Items
- Valentines Box
  - Red Roses Bouquet x1
  - Box of chocolates x1
  - Love card x1
  - Women’s perfume x1
- Ships to
- Rob Smith
- 100 queen Street east

- Order #3
- Order Date: September 15th, 2023
- Line Items
- Birthday Box
  - Birthday cupcake
  - $100 Visa Gift Card
  - Birthday card
- Ships to
- Dan Smith
- 100 king Street east

... And so on

Build a solution for the warehouse team to use, that will automate this process. The solution can be of your choosing, and should be a simple software product you provide to the warehouse team.

Some caveats:
Do not focus on the look of the UI, use simple elements or UI kits
The focus for this problem is to see your problem solving skills

You should create a mock dataset of “Orders” called orders.json that includes an array of orders with the follow key :value pairs:

- Order ID
- Order Total
- Order Date
- Shipping address
- Customer name
- Customer email
- Line items
  - Line item id
  - Product id
  - Product name
  - Price

Please note the individual products data DOES NOT live in the orders.json file. You should create a separate data file or mapping for the individual products data.

## How To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Limitations

- code Simply ouputs what needs to be seen from the Picking/Packing teams. No other functionality added as specified
- code requires a mock dataset in order to function called orders.json located in ./src (same directory as App.js)
