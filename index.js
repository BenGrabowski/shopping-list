$(function() {
    $(".js-shopping-list-form").submit(event => {
        event.preventDefault();

        let itemName = $(this).find('input [name="shopping-list-entry"]').val();

        $("#shopping-list").append(
            <li>
                <span class="shopping-item">itemName</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>);
        );
    });

    $(".shopping-item-controls").on('click', '.shopping-item-toggle', function(event) {
        $(this).toggleClass(".shopping-item_checked");
    });

    $(".shopping-item-controls").on('click', '.shopping-item-delete', function(event) {
         $(this).remove();
    });
});