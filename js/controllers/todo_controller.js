/**
 * Created by shenten on 2/15/15.
 */
Todos.TodoController =  Ember.ObjectController.extend({
   isCompleted: function(key,value) {
       var model = this.get('model');

       if (value === undefined) {
           // value is empty, so used as a getter
           return model.get('isCompleted');
       } else {
           // property used as a setter
           model.set('isCompleted', value);
           model.save();
           return value;
       }
   }.property('model.isCompleted')
});