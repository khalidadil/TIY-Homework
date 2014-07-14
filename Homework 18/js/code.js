$(function(){
  
  $('.card');

  var github_username = "khalidadil";
  var github_url = "https://api.github.com/users/";
  var url = github_url + github_username;

  var person_data = $.getJSON(url);

  var html_templates = $('#html_template')[0].textContent;

  var fillTemplate = _.template(html_templates);

  person_data.then(function(data){
    var github_html = fillTemplate(data);
		$('body').append(github_html);
	});
});