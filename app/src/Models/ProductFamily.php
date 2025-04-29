<?php

namespace ProductApp\Models;

use SilverStripe\ORM\DataObject;
use ProductApp\Models\ProductGroup;
use SilverStripe\Versioned\Versioned;

class ProductFamily extends DataObject
{
    private static $table_name = "ProductFamily";
    private static $versioned_gridfield_extensions = true;

    private static $db = [
        'Index' => 'Int',
        'Title' => 'Varchar(100)',
        'Slug' => 'Varchar(100)'
    ];

    private static $has_many = [
        'ProductGroups' => ProductGroup::class
    ];

    private static $extensions = [
        Versioned::class
    ];

    private static $summary_fields = [
        'Title' => 'Name'
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        return $fields;
    }
}
