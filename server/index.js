const express = require('express');//instance of expree lib in a variable
const app = express();// call instance in app calls an express constructor
const http = require('http').createServer(app);//in built in node js http me app ka instance h
const io = require('socket.io')(http);//communication protcol establish krega un peer to peer and real time connection
const PORT = process.env.PORT || 3001;
const path = require('path');// node js lib 
app.set("view engine", "ejs");//
app.use(express.static("public")) // public folder ko gobal krega  sara file url se access hoga

let socketList = {};

app.use(express.static(path.join(__dirname, 'public')));//sare project ke files ko public acces krega sare project folder ko public jais tret krega 
//taki url ke through publicaly access ho 

if (process.env.NODE_ENV === 'production') {//aceess in production phase server pe deployed h
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));//jab development phase  me h 
  });//deploy kren me kam aata h 
}

// Route
app.get('/ping', (req, res) => {
  res
    .send({
      success: true,
    })
    .status(200);
});//use to check if server runs or not correctly

// Socket
io.on('connection', (socket) => {//event listner jab port 3000 kholenge   socket variableh
  console.log(`New User connected: ${socket.id}`);// socket.id se destructure kiya h 

  socket.on('disconnect', () => {
    socket.disconnect();
    console.log('User disconnected!');
  });//event listner disconnect

  socket.on('BE-check-user', ({ roomId, userName }) => {//client agar koi be check user nam ka action emit krega to ye catch rega client isse
    //id pass bhejega aur check rega ki room id exist krta h agar krta h to add krega nhi to  naya room bana dega
    let error = false;

    io.sockets.in(roomId).clients((err, clients) => {
      clients.forEach((client) => {
        if (socketList[client] == userName) {
          error = true;
        }
      });
      socket.emit('FE-error-user-exist', { error });//error handle krega
    });
  });

  /**
   * Join Room
   */
  socket.on('BE-join-room', ({ roomId, userName }) => {// request aayega
    // Socket Join RoomName
    socket.join(roomId);
    socketList[socket.id] = { userName, video: true, audio: true };// list maintain h ki room mekitna bande h 

    // Set User List
    io.sockets.in(roomId).clients((err, clients) => {//room banayega aur as a user join krayega pahle chec krega ki exist krta h ki nhi
      try {
        const users = [];
        clients.forEach((client) => {
          // Add User List
          users.push({ userId: client, info: socketList[client] });
        });
        socket.broadcast.to(roomId).emit('FE-user-join', users);// agar room nhi h to server se client ko req jayegi
        // io.sockets.in(roomId).emit('FE-user-join', users);
      } catch (e) {
        io.sockets.in(roomId).emit('FE-error-user-exist', { err: true });// error handle
      }
    });
  });

  socket.on('BE-call-user', ({ userToCall, from, signal }) => {// call user kaunse user to call  kaha se call aur kya kya bhejan h jsaise audio vedio
    io.to(userToCall).emit('FE-receive-call', {//jisase call aayi h usko req bhej dega  sath me signal 
      signal,
      from,
      info: socketList[socket.id],//sockelist me user ka info store rahegga jaise id audio on h ki nhi etc
    });
  });

  socket.on('BE-accept-call', ({ signal, to }) => {
    io.to(to).emit('FE-call-accepted', {
      signal,
      answerId: socket.id,
    });
  });

  socket.on('BE-send-message', ({ roomId, msg, sender }) => {
    io.sockets.in(roomId).emit('FE-receive-message', { msg, sender });
  });

  socket.on('BE-leave-room', ({ roomId, leaver }) => {
    delete socketList[socket.id];// delete entryu
    socket.broadcast// sbko msg jaayega ki band a leave krega aur socket wale arrays se entryu delete hogi
      .to(roomId)
      .emit('FE-user-leave', { userId: socket.id, userName: [socket.id] });
    io.sockets.sockets[socket.id].leave(roomId);
  });

  socket.on('BE-toggle-camera-audio', ({ roomId, switchTarget }) => {// batayega ki camer aon h agar on h to smane wale to sab info binary format me chala jayega
    //switch tagret ki agar cam on h to dikhoge nhi to nhi dikhoge
    if (switchTarget === 'video') {
      socketList[socket.id].video = !socketList[socket.id].video;
    } else {
      socketList[socket.id].audio = !socketList[socket.id].audio;
    }
    socket.broadcast
      .to(roomId)
      .emit('FE-toggle-camera', { userId: socket.id, switchTarget });
  });
});

http.listen(PORT, () => {
  console.log('Connected : 3001');
});
