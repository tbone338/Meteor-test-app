Items = new Mongo.Collection('items');

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);



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
    },

  });
}

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
