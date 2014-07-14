window.onload = initial;

function initial(){
	console.log("IS THIS WORKING??");
};

// var buttonClick = document.getElementById('.button');
// console.log(button);

// buttonClick.style.cursor = 'pointer';
// buttonClick.onclick = function() {
//     this.style.backgroundColor = "red";
//     console.log("IS THIS WORKING???");
// };


 var prod_list = 	[{title:'Nike Dri FIT Shirt', price:100.40, img:'NikeDriFitShirt'}, 
 					{title:'item2', price:9.81, img:'jersey'}, 
 					{title:'item3', price:8.39, img:'shoe'}, 
 					{title:'item4', price:10.27, img:'shorts'}, 
 					{title:'item5', price:9.81, img:'jersey'}, 
 					{title:'item6', price:8.39, img:'shoe'}];
 var viewed_list = [];
 var total = 0;

function qsa(selector, element){
	return (element || document).querySelectorAll(selector);
}

function qs(selector, element){
	return (element || document).querySelector(selector);
}

// function handleBuyButtonClicks(index){
// 	var items = qsa('.items')[index];
// 	var button = qs('.button', items);
// 	var title = qs('.item_title', items);
// 	var prod_img = qs('.prod_img', items);
	
// 	div = button;

// 	div.addEventListener('click', function (event) {
// 	 		items.style.visibility='hidden';
// 	 		prod_img.style.visibility='visible';
// 	 		prod_img.innerHTML ='<h1>Added to Cart!</h1>';
// 	 		window.setTimeout(function (){
// 	 			items.style.visibility='visible';
// 	 			title.innerHTML ='New Product';
// 	 			prod_img.innerHTML ='';
// 	 			prod_img.style.background ='url(img/' + images[0] + '.jpg) no-repeat center';
// 	 			prod_img.style.backgroundSize ='cover';
// 	 		},1000);
// 	});
// }

function handleBuyButtonClicks(index){
	var items = qsa('.items')[index];
	var dynamic = qs('.dynamic', items);
	var button = qs('.button', items);
	var title = qs('.item_title', items);
	var prod_img = qs('.prod_img', items);
	var price = qs('.price', items);
	
	div = button;

	div.addEventListener('click', function (event) {
	 		dynamic.innerHTML = '';

	 		var new_img = document.createElement('li');
	 		new_img.innerHTML = '<h1>Added to Cart!</h1>';
	 		new_img.className = "cart_add";
	 		dynamic.appendChild(new_img);

	 		window.setTimeout(function (){
	 			dynamic.innerHTML = '';


	 			var new_price = document.createElement('h2');
	 			new_price.className = "price";
	 			new_price.innerHTML = '$' + prod_list[0].price.toFixed(2);

	 			var new_title = document.createElement('li');
	 			new_title.className = "item_title";
	 			new_title.innerHTML = prod_list[0].title;
	 			
	 			var new_img1 = document.createElement('li');
	 			new_img1.className = "prod_img";
				new_img1.innerHTML = '<img src="img/' + prod_list[0].img + '.jpg">';

				dynamic.appendChild(new_price);
				dynamic.appendChild(new_title);
				dynamic.appendChild(new_img1);

				total += prod_list[0].price;
				console.log(total);
				viewed_list.push(prod_list.shift());
	 		},1000);
	 		console.log(prod_list);
	 		console.log(viewed_list);
	});
}

for(var j = 0; j < 3; j++){
	handleBuyButtonClicks(j);
}