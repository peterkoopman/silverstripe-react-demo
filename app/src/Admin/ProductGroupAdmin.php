<?php

namespace ProductApp\Admin;

use SilverStripe\Admin\ModelAdmin;

class ProductGroupAdmin extends ModelAdmin
{
    private static $menu_title = 'Product groups';
    private static $url_segment = 'product-group';
    private static $menu_icon_class = 'font-icon-p-profile';

    private static $managed_models = array(
        'ProductApp\Models\ProductGroup'
    );
}
