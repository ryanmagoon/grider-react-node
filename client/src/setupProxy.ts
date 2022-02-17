import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app: any) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  )
}
