
var cash = 15000;

update_wallet();

$('.item').click(function() {
	var item =$(this) .data('item');
	var amount =$(this) .data('amount');

	charge_card(amount, item);

});

function charge_card(amount, item) {

	if (cash >= amount) {
	cash = cash - amount; 
	update_wallet();
	$('.closet-items').append(item +', ');
} 
	else { 
	alert('not enough money.');
	
}
}

function update_wallet() {
	$('.cash').html(cash);
}