<?php

namespace ProductApp\Models;

use ProductApp\Models\Product;
use SilverStripe\ORM\DataObject;
use ProductApp\Models\ProductFamily;
use SilverStripe\Versioned\Versioned;

class ProductGroup extends DataObject
{
    private static $table_name = "ProductGroup";
    private static $versioned_gridfield_extensions = true;

    private static $db = [
        'Index' => 'Int',
        'Title' => 'Varchar(100)',
        'Slug' => 'Varchar(100)'
    ];

    private static $has_one = [
        'ProductFamily' => ProductFamily::class
    ];

    private static $has_many = [
        'Products' => Product::class
    ];

    private static $owns = [
        'ProductFamily'
    ];

    private static $extensions = [
        Versioned::class
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        return $fields;
    }

    public function publishAll()
    {
        $groups = $this->get();

        foreach ($groups as $group) {
            $group->publish();
        }
    }
}
