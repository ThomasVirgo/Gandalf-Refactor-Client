const SOCKET_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://socket-chat-appp.herokuapp.com'
const SERVER_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:8000' : 'https://chat-app-drf.herokuapp.com'

export {SOCKET_URL, SERVER_URL}