let expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', ()=> {
    it('should generate the correct message object', () => {
        let textMessage = {from: 'text', text: 'this is a text'};
        let res = generateMessage(textMessage.from, textMessage.text);

        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from: textMessage.from,
            text: textMessage.text
        });
    })
});