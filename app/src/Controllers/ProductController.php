<?php

namespace ProductApp\Controllers;

use ProductApp\Models\Product;
use ProductApp\Models\ProductGroup;
use SilverStripe\Admin\LeftAndMain;
use ProductApp\Models\ProductFamily;

use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\CMS\Controllers\ContentController;

class ProductController extends ContentController
{
    private static $allowed_actions = [
        'categories',
        'category',
        'group',
        'product'
    ];

    private function returnConfig($returnArray)
    {
        return (new HTTPResponse(json_encode($returnArray)))
            ->addHeader('Content-Type', 'application/json; charset=utf-8');
    }

    public function categories(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'GET') {
            return $this->httpError(405, 'Method Not Allowed. Use GET.');
        }

        $productFamily = ProductFamily::get()->toNestedArray();

        return $this->returnConfig($productFamily);
    }

    public function category(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'GET') {
            return $this->httpError(405, 'Method Not Allowed. Use GET.');
        }

        $category = ProductFamily::get()
            ->filter('Slug', $request->param('ID'))
            ->first();

        $name = $category->Title;
        $groups = $category->ProductGroups()->toNestedArray();
        return $this->returnConfig(['Name' => $name, 'Groups' => $groups]);
    }

    public function group(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'GET') {
            return $this->httpError(405, 'Method Not Allowed. Use GET.');
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

        return $this->returnConfig(['Name' => $name, 'Products' => $products]);
    }

    public function product(HTTPRequest $request)
    {
        if ($request->httpMethod() !== 'GET') {
            return $this->httpError(405, 'Method Not Allowed. Use GET.');
        }

        $product = Product::get()->filter('Slug', $request->param('ID'))->toNestedArray()[0];

        $path = 'https://hydraulink.co.nz/static/product_images/';

        $product['ImageFilename'] = $path . $product['ImageFilename'];
        if ($product['Notes']) {
            $notes = explode("|", $product['Notes']);
            $notesList = '<ul>';
            foreach ($notes as $k => $v) {
                $notesList .= "<li>$v</li>";
            }
            $notesList .= '</ul>';
            $product['Description'] = $product['Description'] . $notesList;
        }


        return $this->returnConfig($product);
    }

    public function promos()
    {
        $title = 'New products / promo';
        $content = "<p>Info about new products and promotions</p>";

        $array = [
            $title,
            $content
        ];

        return $this->returnConfig($array);
    }

    public function agencies()
    {
        $title = 'Our Agencies';
        $content = '<p>Our agencies content</p>';

        $array = [
            $title,
            $content
        ];

        return $this->returnConfig($array);
    }

    public function quality()
    {
        $title = 'Our Quality';
        $content = '<p>Our quality systems</p>';

        $array = [
            $title,
            $content
        ];

        return $this->returnConfig($array);
    }
    public function datasheets()
    {
        $title = 'Datasheets';
        $content = '<p>Product datasheets available for download</p>';

        $array = [
            $title,
            $content
        ];

        return $this->returnConfig($array);
    }
}
