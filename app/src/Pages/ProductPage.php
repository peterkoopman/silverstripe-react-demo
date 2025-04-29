<?php

namespace ProductApp\Pages;

use \Page;

class ProductPage extends Page
{
    private static $table_name = 'ProductPage';
    private static $controller_name = 'ProductApp\Controllers\ProductPageController';

    private static $db = [];

    private static $has_one = [];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();


        return $fields;
    }
}
