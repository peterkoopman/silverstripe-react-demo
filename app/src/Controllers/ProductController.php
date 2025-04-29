<?php

namespace ProductApp\Controllers;

use ProductApp\Models\Product;
use ProductApp\Models\ProductGroup;
use ProductApp\Models\ProductFamily;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\CMS\Controllers\ContentController;

class ProductController extends ContentController
{
    private static $allowed_actions = [
        'categories',
        'category',
        'group',
        'product'
    ];

    public function categories(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'POST') {
            return $this->httpError(405, 'Method Not Allowed. Use POST.');
        }

        $catList = ProductFamily::get()->toNestedArray();

        return json_encode($catList);
    }

    public function category(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'POST') {
            return $this->httpError(405, 'Method Not Allowed. Use POST.');
        }

        $category = ProductFamily::get()
            ->filter('Slug', $request->param('ID'))
            ->first();

        $name = $category->Title;
        $groups = $category->ProductGroups()->toNestedArray();
        return json_encode([$name, $groups]);
    }

    public function group(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'POST') {
            return $this->httpError(405, 'Method Not Allowed. Use POST.');
        }

        $group = ProductGroup::get()
            ->filter('Slug', $request->param('ID'))
            ->first();
        $name = $group->Title;
        $products = $group->Products()
            ->toNestedArray();

        $path = 'https://hydraulink.co.nz/static/product_images/';

        for ($i = 0; $i < count($products); $i++) {
            $products[$i]['ImageFilename'] = $path . $products[$i]['ImageFilename'];
        }

        return json_encode([$name, $products]);
    }

    public function product(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'POST') {
            return $this->httpError(405, 'Method Not Allowed. Use POST.');
        }

        $product = Product::get()->filter('Slug', $request->param('ID'))->first();

        return json_encode([
            'template' => strval($product->renderWith('Hydraulink/Ajax/Product')),
            'breadcrumbs' => [
                $product->ProductGroup()->ProductFamily()->Title,
                $product->ProductGroup()->Title,
                $product->Title
            ]
        ]);
    }

    public function promos()
    {
        $title = 'New products / promo';
        $content = "<p>Info about new products and promotions</p>";

        $array = [
            $title,
            $content
        ];

        return json_encode($array);
    }

    public function agencies()
    {
        $title = 'Our Agencies';
        $content = '<p>Our agencies content</p>';

        $array = [
            $title,
            $content
        ];

        return json_encode($array);
    }

    public function quality()
    {
        $title = 'Our Quality';
        $content = '<p>Our quality systems</p>';

        $array = [
            $title,
            $content
        ];

        return json_encode($array);
    }
    public function datasheets()
    {
        $title = 'Datasheets';
        $content = '<p>Product datasheets available for download</p>';

        $array = [
            $title,
            $content
        ];

        return json_encode($array);
    }
}
