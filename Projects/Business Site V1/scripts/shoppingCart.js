var shoppingCart = {
    total:0,
    lastTransactionAmount: 0,
    
	add: function(itemCost){
        this.total += itemCost;
        this.lastTransactionAmount = itemCost;
    },
   
    scan: function(item){
        switch (item){
        case "tab2": 
			this.add(320);
			break;
        case "victory": 
			this.add(100); 
			break;
        case "pavilion": 
			this.add(410); 
			break;
        case "m7": 
			this.add(300); 
			break;
		case "lenovo": 
			this.add(485); 
			break;
		case "moto": 
			this.add(250); 
			break;
		case "ps3": 
			this.add(250); 
			break;
        }
		alert("Product has been added to your Cart! Your total so far is: $"+this.total);
    },
   
    voidLastTransaction: function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
};