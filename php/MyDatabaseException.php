<?php

/**
 * Created by PhpStorm.
 * User: nadin-katrin
 * Date: 03.03.17
 * Time: 10:57
 */
class MyDatabaseException extends PDOException
{

    /**
     * MyDatabaseException constructor.
     * @param string $getMessage
     * @param null $code
     * @internal param $§e
     */
    public function __construct($getMessage=null, $code=null)
    {
        $this->message = $getMessage;
        $this->code = $code;
    }
}