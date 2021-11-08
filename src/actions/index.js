
const initUser = data => ({"type": 'INIT_USER', 'payload': data})
const initActiveUsers = data => ({"type": 'INIT_ACTIVE_USERS', 'payload': data})
const clearUser = () => ({"type": "CLEAR_USER", "payload": {"email": "", "token": ""}})

export { initUser, initActiveUsers, clearUser }