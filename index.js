function addNewItem() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();

        let itemName = $(this).find('input[name="shopping-list-entry"]').val();

        console.log(itemName);
        
        $(".shopping-list").append(`<li>
             <span class="shopping-item">${itemName}</span>
             <div class="shopping-item-controls">
                 <button class="shopping-item-toggle">
                     <span class="button-label">check</span>
                 </button>
                 <button class="shopping-item-delete">
                     <span class="button-label">delete</span>
                 </button>
             </div>
          </li>`);
    });

}

function checkItem() {
    $(".shopping-list").on('click', 'button.shopping-item-toggle', function(event) {
        let checkedItem = $(this).parents('li').find('.shopping-item');
        checkedItem.toggleClass("shopping-item__checked");

    });
}

function removeItem() {
    $(".shopping-list").on('click', 'button.shopping-item-delete', function(event) {
        let removedItem = $(this).parents('li'); 
        removedItem.remove();
    });
}

function handleShoppingList () {
    addNewItem();
    checkItem();
    removeItem();
}

$(handleShoppingList);
