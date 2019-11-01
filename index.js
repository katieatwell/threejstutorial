var express = require("express"),
    app = express(),
    path = require("path"),
    less = require("less-middleware"),
    fs = require("fs");

app.use(
    less(path.join(__dirname, "source", "less"), {
        dest: path.join(__dirname, "public"),
        options: {
            compiler: {
                compress: false
            }
        },
        preprocess: {
            path: function(pathname, req) {
                return pathname.replace("/css/", "/");
            }
        },
        force: true
    })
);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
    res.sendFile("public/index.html");
});

var server = app.listen(1337, () => console.log(`Listening on port 1337`));
