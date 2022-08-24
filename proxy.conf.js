const PROXY_CONFIG = [{
    context: [
        "/api/v1/search-logs",
        "/api/v1/list-banks"
    ],
    target: "http://localhost:8080",
    secure: true,
    changeOrigin: true,
}]

module.exports = PROXY_CONFIG;