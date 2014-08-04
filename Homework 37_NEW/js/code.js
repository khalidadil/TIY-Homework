var EtsyListing = Backbone.Model.extend({
    urlRoot: '',
    initialize: function() {
        this.view = new EtsyView({model:this}); //passing in the model
    }
});

var EtsyListings = Backbone.Collection.extend({
    url: function() {
        return 'https://openapi.etsy.com/v2/listings/active.js?api_key=' + this.api_key + '&callback=?'
    },
    // Because Etsy doesn't return an array of models by default we need
    // to point Backbone.js at the correct property
    parse: function(resp, xhr) {
        return resp.results;
    },
    model: EtsyListing, // you will create a view and a model to show in the HTML
    api_key: "fjlg40t8hj9r07c4alcbfmoo", // put your api key here!
    query: '???'
});

var listings = new EtsyListings();
listings.fetch();

var EtsyView = Backbone.View.extend({
    initialize: function() {
        $('body').append(this.el);
        this.render();
        this.model.view  = this;
    },
    tagName: 'div',
    className: 'myContent',
    validate: function(attributes) {
        console.log("validate");
    },
    render: function() {
        var data = _.extend({}, this.model.attributes);
        this.$el.html(this.template(data));
    },
    template: _.template('<h1> <%= title %> </h1>')
});
