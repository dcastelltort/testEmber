/**
 * Created by shenten on 2/16/15.
 */
Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function(){
        this.$().focus();
    }
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);