module.exports = {
    apps: [
        {
            name: '1907.taxi :3000',
            port: '3000',
            exec_mode: 'cluster',
            instances: '1',
            script: './.output/server/index.mjs'
        }
    ]
}