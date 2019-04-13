function addNewItem() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();

        let itemName = $(this).find('input[name="shopping-list-entry"]').val();

        console.log(itemName);

        // let newItem = function generateItemElement(itemName) {
        //     return `<li>
        //     <span class="shopping-item">${itemName}</span>
        //     <div class="shopping-item-controls">
        //         <button class="shopping-item-toggle">
        //             <span class="button-label">check</span>
        //         </button>
        //         <button class="shopping-item-delete">
        //             <span class="button-label">delete</span>
        //         </button>
        //     </div>
        //  </li>`
        // };
        
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
        $(this).parents('span.shopping-item').toggleClass("shopping-item__checked");
    });
}

function removeItem() {
    $(".shopping-list").on('click', 'button.shopping-item-delete', function(event) {
         $(this).parents('li').remove();
    });
}

function handleShoppingList () {
    addNewItem();
    checkItem();
    removeItem();
}

$(handleShoppingList);
