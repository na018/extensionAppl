<?php
function retrievePermissions($userName)
{

    require_once __DIR__ . '/../dataBase/connection/DB.php';

    $db = new DB;


    $sqlQuery = 'SELECT p.menu_id menuId FROM User u ';
    $sqlQuery .= 'INNER JOIN permissions p ON u.groups_id = p.groups_id ';
    $sqlQuery .= 'INNER JOIN menu m ON p.menu_id = m.id ';
    $sqlQuery .= 'WHERE u.username = ?';




    $resultDb = $db->getRows($sqlQuery, ["$userName"]);

    $permissions = [];

    if ($resultDb) {
        foreach ($resultDb as $user) {
            $permissions[] = $user['menuId'];
        }
    }

    $resultDb = null;
    $db = null;

    return $permissions;
}

function retrieveModules($permissions)
{

    require_once __DIR__ . '/../dataBase/connection/DB.php';

    $db = new DB;

    $inClause = '(' . implode(',', $permissions) . ')';
    $placeholders = str_repeat ('?, ',  count ($permissions) - 1) . '?';

    $sqlQuery = "SELECT id, text, iconCls FROM menu WHERE menu_id IS NULL AND id in ($placeholders)";


    $resultDb = $db->getRows($sqlQuery, $permissions);

    $modules = [];

    if ($resultDb) {
        foreach ($resultDb as $module) {
            $modules[] = $module;
        }
    }

    $resultDb->null;
    $db = null;

    return $modules; // #18
}

function retrieveMenuOptions($modules, $permissions)
{

    require_once __DIR__ . '/../dataBase/connection/DB.php';

    $db = new DB;

    $inClause = '(' . implode(',', $permissions) . ')';
    $placeholders = str_repeat ('?, ',  count ($permissions) - 1) . '?';

    $result = [];

    foreach ($modules as $module) { // #2

        $sqlQuery = "SELECT * FROM menu WHERE menu_id = ? AND id IN ($placeholders)";

        $moduleId = $module['id'];

        array_unshift($permissions, $module['id']);

        $resultDb = $db->getRows($sqlQuery, $permissions);

        if ($resultDb) {

            $module['items'] = array();
            foreach ($resultDb as $item) {
                $module['items'][] = $item;
            }

            $result[] = $module;
        }
    }
    $resultDb = null;
    $db = null;

    return $result; // #10
}