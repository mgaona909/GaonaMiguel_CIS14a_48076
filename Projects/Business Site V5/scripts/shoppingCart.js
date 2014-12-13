var shoppingCart = {
    items: [],
	total: 0,
    
	add: function(itemCost){
        this.total += itemCost;
    },
   
    scan: function(item){
        switch (item){
        case "tab2": 
			this.add(320);
			this.items.push("Galaxy Tab 2");
			break;
        case "victory": 
			this.add(100); 
			this.items.push("Galaxy Victory");
			break;
        case "pavilion": 
			this.add(410); 
			this.items.push("HP Pavilion G7");
			break;
        case "m7": 
			this.add(300); 
			this.items.push("HTC One M7");
			break;
		case "lenovo": 
			this.add(485); 
			this.items.push("Lenovo B540");
			break;
		case "moto": 
			this.add(250); 
			this.items.push("Moto X");
			break;
		case "ps3": 
			this.add(250); 
			this.items.push("Playstation 3");
			break;
        }
		alert("Product has been added to your Cart!");
		sessionStorage.setItem('Total', JSON.stringify(shoppingCart.total));
		sessionStorage.setItem('Items', JSON.stringify(shoppingCart.items));
    },
   
    clearCart: function(){
		sessionStorage.removeItem('Total');
		sessionStorage.removeItem('Items');
        this.total -= 0;
        this.items = [];
		location.reload();
    },
};


var setCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

var deleteCookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};