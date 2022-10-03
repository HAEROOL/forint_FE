const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(
        "/static/image/template.jpg",
        createProxyMiddleware({
            target: `${process.env.REACT_APP_API_URL}/`,
            chageOrigin: true,
        })
    )
}