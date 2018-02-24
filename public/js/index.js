let socket = io();

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});

socket.on('newMessage', (msj) => {
    console.log('newMessage', msj);
    let li = $('<li></li>');
    li.text(`${msj.from}: ${msj.text}`);

    $('#messages').append(li);
});

socket.emit('createMessage', {
    from: 'Oscar',
    text: 'Hi'
}, (data) => {
    console.log('Got it', data);
});

$('#message-form').on('submit', (e) => {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('[name=message]').val()
    }, () => {

    });
});