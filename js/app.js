(function(){
    //пространство имён
    window.App = {
        Models: {},
        Views: {},
        Collections: {},
        Router: {}
    };

    var vent = _.extend({}, Backbone.Events);
    
    App.Views.SpecialTasks = Backbone.View.extend({
        initialize: function() {
            vent.on('specialTasks:show', this.show, this);
        },
        show: function(id) {
            var specialTask = this.collection.get('id');
        }
    });
    
    console.log(vent);

    //хелпер шаблона
    window.template = function(id) {
        return _.template($('#' + id).html());
    };

    App.Router = Backbone.Router.extend({
        routes: {
            ''                  : 'index',
            'page/:id/*pidor'   : 'page',
            'specialTasks/:id'  : 'specialTasks',
            'search/:query'     : 'search',
            '*other'            : 'default'
        },
        index: function() {
            console.log('Всё работает');
        },
        page: function(id, shit) {
            console.log('страница намбер '+ id +' '+ shit);
        },
        specialTasks: function(id) {
            vent.trigger('specialTasks:show', id);
        },
        search: function(query) {
            
        },
        default: function() {
            alert('suck my dick !')
        }
    });
    
    new App.Views.SpecialTasks({collection: someCollection});
    
    new App.Router();
    
    Backbone.history.start();
    

}());
