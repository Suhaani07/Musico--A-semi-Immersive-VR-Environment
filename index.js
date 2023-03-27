const express = require("express");
const cors = require('cors');
const app = express();
const path = require("path");
const stripe = require("stripe")("sk_test_51MY8LgSIjyhEAXRb625qmcY6ejKl07EwdOpwa0SRxtEJI1tEW5dd9Gv0WkgwJYAUSaZfWe4i8F4V8Jd95N2RG4au00lg3XeJ0m");
const nodemailer = require("nodemailer");
const YOUR_DOMAIN = "http://localhost:3000";

// static files
app.use(express.static(path.join(__dirname, "views")));

// middleware
app.use(express.json());

app.use(cors({
    origin: '*'
}));

// routes
app.post("/payment", async (req, res) => {
    const { product } = req.body;
    const username =req.body;
    console.log(username);
    console.log(product.username);
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: product.name,
                        images: [product.image]
                    },
                    unit_amount: product.amount * 100,
                },
                quantity: product.quantity,
            },
        ],
        mode: "payment",
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/checkout.html`,
    });

    res.json({ id: session.id });

    main().catch(console.error);

});


// listening...
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
