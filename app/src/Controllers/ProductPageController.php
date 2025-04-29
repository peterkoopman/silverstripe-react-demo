<?php

namespace ProductApp\Controllers;

use \PageController;

class ProductPageController extends PageController
{
    private static $allowed_actions = [
        'index'
    ];

    private static $url_handlers = [
        '$*' => 'index'
    ];

    protected function init()
    {
        parent::init();
    }

    public function index()
    {
        return $this->render();
    }
}
