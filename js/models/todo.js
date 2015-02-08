/**
 * Created by shenten on 2/8/15.
 */
Todos.Todo = DS.Model.extend({
    title: DS.attr('string'),
    isCompleted: DS.attr('boolean')
});