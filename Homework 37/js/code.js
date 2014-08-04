var EtsyListing = Backbone.Model.extend({
    urlRoot: '',
    initialize: function() {
        console.log("new instance created");

        this.on("invalid", function(model, error) {
            alert(error);
        });
    },
    validate: function(attributes) {
        console.log("validate");
    }/*,
    defaults: {

    }*/
});

// var listing = new EtsyListing(); guess this doesn't need to be instatiated??

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
    /*initialize: function() {

    },*/
});

var EtsyView = Backbone.View.extend({
    initialize: function() {
        $('body').append(this.el);
        this.render();
        // this.model.view  = this; THROWS ERROR
    },
    tagName: 'div',
    className: 'myContent',
    validate: function(attributes) {
        console.log("validate");
    },
    render: function() {
        var that = this;
        var Listings = new EtsyListings(); //new instance of EtsyListings collection
        Listings.fetch({
            success: function(listings) {
                allListings = listings.toJSON();
                var theHTML = "<% _.each(allListings, function(listing) { %> <h1> <%= listing.title %> </h1> <br/> <% }); %>";

                var template = _.template(theHTML, listings);
                that.$el.html(template);
            }
        });
    }/*,
    events: {

    }*/
});

var newView = new EtsyView();
