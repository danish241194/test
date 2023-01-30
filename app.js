const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{
    res.status(307);
    res.header("location", "intent://www.amazon.in/minitv-lite/tp/97a9fc97-4ad4-4b11-b237-f0fd3ba96cc3#Intent;scheme=com.amazon.mobile.shopping;package=in.amazon.mShop.android.shopping;S.browser_fallback_url=https://amazon.in/minitv-lite;end");
    res.removeHeader("content-length");
 res.send();
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Runni and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);
