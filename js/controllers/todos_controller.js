/**
 * Created by shenten on 2/15/15.
 */
Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function() {
            //Get the todo title set by the "new todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) {
                return;
            }

            //Create the new todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // clear the "New Todo" text field
            this.set('newTitle', '');

            // save the model
            todo.save();
        },
        clearCompleted: function() {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            complete.invoke('save');
        }
    },

    remaining: function() {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function(){
        var remaining = this.get('remaining');
        return remaining === 1? 'item':'items';
    }.property('remaining'),

    hasCompleted: function() {
        return this.get('completed') > 0;
    }.property('completed'),

    completed: function() {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted')
});