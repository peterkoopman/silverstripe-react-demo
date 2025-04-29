<?php

namespace ProductApp\Admin;

use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Versioned\Versioned;

class ProductAdmin extends ModelAdmin
{
    private static $menu_title = 'Products';
    private static $url_segment = 'product';
    private static $menu_icon_class = 'font-icon-p-profile';

    private static $managed_models = array(
        'ProductApp\Models\Product'
    );

    private static $extensions = [
        Versioned::class,
    ];

    private static $versioned_gridfield_extensions = true;
}
