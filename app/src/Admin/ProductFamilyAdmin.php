<?php

namespace ProductApp\Admin;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Versioned\Versioned;

class ProductFamilyAdmin extends ModelAdmin
{
    private static $menu_title = 'Product families';
    private static $url_segment = 'product-family';
    private static $menu_icon_class = 'font-icon-p-profile';

    private static $managed_models = array(
        'ProductApp\Models\ProductFamily'
    );
}
