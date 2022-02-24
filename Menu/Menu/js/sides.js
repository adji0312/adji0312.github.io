$(document).ready(()=>{
    class Menu {
        constructor(name, price, id) {
            this.name = name;
            this.price = price;
            this.total = 0;
            this.id = '';
        }

        addTotal(){
            this.total++;
        }

        minTotal(){
            if(this.total > 0) this.total--;
        }
    }
    var menus = [];

    function addMenu(name, price){
        var food = new Menu(name, price, menus.length);
        menus.push(food);
    }

    addMenu('Fresh Herb Risotto', 70000, 0);
    addMenu('Creamed Fresh Baby Asparagus', 70000, 1);
    addMenu('Mashed Potatoes', 55000, 2);
    
    document.getElementById('clickPlus').addEventListener('click', addQty(0));
    document.getElementById('clickMinus').addEventListener('click', minusQty(0));

    function addQty(id){
        menus.addTotal;
        document.getElementById("foodQty").innerHTML = menus[id].total;
    }

    function minusQty(id){
        menus.minTotal;
        document.getElementById("foodQty").innerHTML = menus[id].total;
    }
})