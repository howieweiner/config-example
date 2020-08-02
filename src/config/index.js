module.exports = {
    port: 3000,
    handlers: {
        hello: {
            text: process.env.HELLO_TEXT,
        },
        goodbye: {
            text: process.env.HELLO_TEXT,
        }
    }
}