<?php

namespace ProductApp\Tests;

use ProductApp\Models\Product;
use ProductApp\Models\ProductGroup;
use ProductApp\Models\ProductFamily;
use SilverStripe\Dev\FunctionalTest;

class ProductControllerTest extends FunctionalTest
{
    protected static $fixture_file = [
        'Product.yml'
    ];

    public function setUp(): void
    {
        parent::setUp();
        $this->objFromFixture(ProductFamily::class, 'family1')->publishSingle();
        $this->objFromFixture(ProductFamily::class, 'family2')->publishSingle();
        $this->objFromFixture(ProductFamily::class, 'family3')->publishSingle();
        $this->objFromFixture(ProductGroup::class, 'group1')->publishSingle();
        $this->objFromFixture(ProductGroup::class, 'group2')->publishSingle();
        $this->objFromFixture(ProductGroup::class, 'group3')->publishSingle();
        $this->objFromFixture(Product::class, 'product1')->publishSingle();
        $this->objFromFixture(Product::class, 'product2')->publishSingle();
        $this->objFromFixture(Product::class, 'product3')->publishSingle();
    }

    public function testCategoriesReturnSuccessful()
    {

        $response = $this->get('/api/products/categories');

        $this->assertEquals(200, $response->getStatusCode(), 'Response should be successful');
        $this->assertEquals('application/json; charset=utf-8', $response->getHeader('Content-Type'), 'Response should be JSON');

        $responseBodyObject = json_decode($response->getBody());

        $this->assertIsArray($responseBodyObject);
    }

    public function testCategoriesPostRequestUnsuccessful()
    {
        $response = $this->post('/api/products/categories', null);

        $this->assertEquals(405, $response->getStatusCode(), 'Response should be Unsuccessful and return a 405 error');
        $this->assertEquals('Method Not Allowed. Use GET.', $response->getBody(), 'Response should be an error message');
    }

    public function testCategoryReturnSuccessful()
    {
        $response = $this->get('/api/products/category/family-1');

        $this->assertEquals(200, $response->getStatusCode(), 'Response should be successful');
        $this->assertEquals('application/json; charset=utf-8', $response->getHeader('Content-Type'), 'Response should be JSON');
        $responseBodyObject = json_decode($response->getBody());
        $this->assertEquals("Family 1", $responseBodyObject->Name, "Name should be 'Family 1'");
    }

    public function testCategoryReturnUnsuccessful()
    {
        $response = $this->post('/api/products/category/family-1', null);

        $this->assertEquals(405, $response->getStatusCode(), 'Response should be Unsuccessful and return a 405 error');
        $this->assertEquals('Method Not Allowed. Use GET.', $response->getBody(), 'Response should be an error message');
    }

    public function testGroupReturnSuccessful()
    {
        $response = $this->get('/api/products/group/group-1');

        $this->assertEquals(200, $response->getStatusCode(), 'Response should be successful');
        $this->assertEquals('application/json; charset=utf-8', $response->getHeader('Content-Type'), 'Response should be JSON');
        $responseBodyObject = json_decode($response->getBody());
        $this->assertEquals("Group 1", $responseBodyObject->Name, "Name should be 'Group 1'");
    }

    public function testGroupReturnUnsuccessful()
    {
        $response = $this->post('/api/products/group/group-1', null);

        $this->assertEquals(405, $response->getStatusCode(), 'Response should be Unsuccessful and return a 405 error');
        $this->assertEquals('Method Not Allowed. Use GET.', $response->getBody(), 'Response should be an error message');
    }

    public function testProductReturnSuccessful()
    {
        $response = $this->get('/api/products/product/product-1');

        $this->assertEquals(200, $response->getStatusCode(), 'Response should be successful');
        $this->assertEquals('application/json; charset=utf-8', $response->getHeader('Content-Type'), 'Response should be JSON');
        $responseBodyObject = json_decode($response->getBody());
        echo "<pre>";
        var_dump($responseBodyObject);
        echo "</pre>";
        exit;
        // $this->assertEquals("Group 1", $responseBodyObject->Name, "Name should be 'Group 1'");
    }

    public function testProductReturnUnsuccessful()
    {
        $response = $this->post('/api/products/product/product-1', null);

        $this->assertEquals(405, $response->getStatusCode(), 'Response should be Unsuccessful and return a 405 error');
        $this->assertEquals('Method Not Allowed. Use GET.', $response->getBody(), 'Response should be an error message');
    }
}
