//* Imports
const { Plugin } = require('powercord/entities');
const { messages, channels } = require('powercord/webpack');
//* Export
module.exports = class Latex extends Plugin {
  startPlugin () {
    this.registerCommand(
      'latex',
      [],
      'Send latex messages',
      'latex <latex>',
      async args => {
        try {
          // Get data...
          let data = args.join(' ');
          let latex_link = "https://latex.codecogs.com/png.latex?%5Cbg_white%20%5CLARGE%20" + encodeURIComponent(data)+ "";
          // ...then send it
          if(latex_link.length < 2000){ //Discord max character length
              messages.sendMessage(
                channels.getChannelId(),
                { content: latex_link}
              );
          } else{
              return {
                send: false,
                result: latex_link
              };
          }
        } catch (e) {
          console.log(e);
          return {
            send: false,
            result: 'Yikes, there was an error.'
          };
        }
      });
  }
};
