Items = new Mongo.Collection('items');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Session.set('show_button', false);


  Template.checkList.events({
    'click .add-item': function () {
      var inputText = $('#new-item-text').val();
      Meteor.call("createItem", inputText);
    }
  });


  Template.checkList.helpers({
    items : function() {
      return Items.find();
    },
  });

  Template.buttonList.helpers({
    allButtons : function() {
      return [
        {
          name : "Johnny",
        },
        {
          name : "Clay",
        },
        {
          name : "Taylor",
        },
      ];
    }
  });

  Template.buttons.helpers({
    text : function(){
      return "foo";
    },
    show_button : function(){
      return Session.get('show_button');
    }
  });

  Template.headings.helpers({
    headings : function(){
      return [
        {
          text : "Hello World",
        },
        {
          text : "Hi world",
        },
      ]
    }
  })
}

// {{#if function}}
//   stuff
// {{else}}
//   stuff
// {{/if}}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.methods({
    createItem : function(inputText) {
      var item = {
        text : inputText,
      };
      Items.insert(item);
    },
  })
}
