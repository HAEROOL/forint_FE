const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        "/static/image/template.jpg",
        createProxyMiddleware({
            target: "http://localhost:8000",
            chageOrigin: true,
        })
    )
}