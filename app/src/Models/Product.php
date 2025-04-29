<?php

namespace ProductApp\Models;

use SilverStripe\ORM\DataObject;
use SilverStripe\Versioned\Versioned;

class Product extends DataObject
{
    private static $table_name = "Product";
    private static $versioned_gridfield_extensions = true;

    private static $db = [
        'Index' => 'Int',
        'Title' => 'Varchar()',
        'Code' => 'Varchar(20)',
        'Description' => 'Text',
        'ImageFilename' => 'Varchar(100)',
        'Notes' => 'Text',
        'Slug' => 'Varchar(100)',
        'AlgoliaIndexed' => 'Datetime',
        'AlgoliaError' => 'Varchar(200)',
        'AlgoliaUUID' => 'Varchar(200)',
    ];

    private static $has_one = [
        'ProductGroup' => ProductGroup::class
    ];

    private static $summary_fields = [
        'ProductGroup.ProductFamily.Title' => 'Category',
        'ProductGroup.Title' => 'Subcategory',
        'Code' => 'Range',
        'Title' => 'Name'
    ];

    private static $owns = [
        'ProductGroup'
    ];


    private static $extensions = [
        Versioned::class
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        return $fields;
    }
}
