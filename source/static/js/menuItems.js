function getMenuItemList() {
    var rows = 5;
    var cols = 5;
    var table = document.createElement('table');
    table.className = "Mitable"
    table.border = "1";
    var prevrow;
    for (var r = 0; r < (rows + 1); r++) {
        var row = document.createElement('tr');
        for (var c = 0; c < (cols + 1); c++) {
            var col = document.createElement('td');
            col.id = 'MI' + r + c;
            createButton(col,col.id);
            row.appendChild(col);
        }
        if (prevrow) {
            table.insertBefore(row, prevrow);
        } else {
            table.appendChild(row);
        }
        prevrow = row;
    }
    document.getElementById('menuItems').appendChild(table);
}

function createButton(context, text){
    var button = document.createElement("input");
    button.type = "button";
    button.value = text;
    button.className = "button";
    button.onclick = function(){  addMenuItemToCheck(); };
    context.appendChild(button);
}

function addMenuItemToCheck()
{
    alert('LOGIC to add menu items');
    // LOGIC to add menu items
}