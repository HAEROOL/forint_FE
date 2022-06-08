const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        "/static/image/template.jpg",
        createProxyMiddleware({
            target: "http://218.150.183.52:8000/",
            chageOrigin: true,
        })
    )
}