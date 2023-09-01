import io from 'socket.io-client';
// const sockets = io('http://localhost:3001', { autoConnect: true, forceNew: true });
const sockets = io('/');//home page pe jaise jaayega socket connect ho jaayega server se
export default sockets;
