<?php


class DB extends PDO {


    public function __construct($host = 'localhost', $user = 'root', $pass = 'mypass', $dbname = 'sencha')
    {
        parent::__construct("mysql:host=$host;dbname=$dbname", $user, $pass);
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // always disable emulated prepared statement when using the MySQL driver
        $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    }


    public function disconnect()
    {

    }

    /**
     * @param $query
     * @param $param
     * @return mixed
     * @throws \MyDatabaseException
     * @internal param array $params
     */
    public function getRow($query, $param)
    {
        try {
            $stmt = $this->prepare($query);
            $stmt->execute($param);
            return $stmt->fetch();
        } catch (PDOException $e) {
            throw new MyDatabaseException($e->getMessage(), $e->getCode());
        }
    }

    public function getRows($query, array $params)
    {
        try {
            $stmt = $this->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            throw new MyDatabaseException($e->getMessage(), $e->getCode());
        }
    }

    public function insertRow($query, array $params)
    {
        try {
            $stmt = $this->prepare($query);
            $stmt->execute($params);
            return $stmt->fetchAll();
        } catch (PDOException $e) {
            throw new MyDatabaseException($e->getMessage(), $e->getCode());
        }
    }

    public function updateRow($query, array $params)
    {
        try {
            $this->insertRow($query, $params);
        } catch (PDOException $e) {
            throw new MyDatabaseException($e->getMessage(), $e->getCode());
        }
    }

    public function deleteRow($query, array $params)
    {
        try {
            $this->insertRow($query, $params);
        } catch (PDOException $e) {
            throw new MyDatabaseException($e->getMessage(), $e->getCode());

        }
    }
}

/*$dbHandle = new DBConnection();

    function get_all($dbHandle)
    {
        $sql = "SELECT * FROM information";
        $stmt = $dbHandle->prepare($sql);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        return $stmt;
    }

get_all($dbHandle);*/
