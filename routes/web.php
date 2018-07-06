<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('disconnect', function() use ($router){
  return null;
});

$router->post('auth/login',['uses' => 'AuthController@authenticate']);

$router->group(['middleware' => 'jwt.auth'], function() use($router){
  $router->get('users', function() {
    $users = \App\User::all();
    return response()->json($users);
  });
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('organismes', ['uses' => 'OrganismeController@showAllOrganismes']);
  $router->get('organismes/{id}', ['uses' => 'OrganismeController@showOneOrganisme']);
  $router->post('organismes', ['uses' => 'OrganismeController@create']);
  $router->delete('organismes/{id}', ['uses' => 'OrganismeController@delete']);
  $router->put('organismes/{id}', ['uses' => 'OrganismeController@update']);

  $router->get('organismes/{lib}/enjeux', ['uses' => 'EnjeuorganismeController@showEnjeuByOrganisme
  ']);
  $router->get('organismes/{id}/objectifs', ['uses' => 'OrganismeController@showObjectifByOrganisme']);
  $router->get('organismes/{id}/fonctionnalites', ['uses' => 'OrganismeController@showFonctionnaliteByOrganisme']);
  $router->get('organismes/{id}/leviers', ['uses' => 'OrganismeController@showLevierByOrganisme']);

  $router->get('organismes/id/{libelle}', ['uses' => 'OrganismeController@showOrganismeId']);

});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('enjeus', ['uses' => 'EnjeuController@showAllEnjeus']);
  $router->get('enjeus/{id}', ['uses' => 'EnjeuController@showOneEnjeu']);
  $router->post('enjeus', ['uses' => 'EnjeuController@create']);
  $router->delete('enjeus/{id}', ['uses' => 'EnjeuController@delete']);
  $router->put('enjeus/{id}', ['uses' => 'EnjeuController@update']);

  $router->get('enjeus/{id}/objectifs', ['uses' => 'EnjeuobjectifController@showObjectifByEnjeu']);
  $router->get('enjeus/{id}/fonctionnalites', ['uses' => 'EnjeuController@showFonctionnaliteByEnjeu']);
  $router->get('enjeus/{id}/leviers', ['uses' => 'EnjeuController@showLevierByEnjeu']);

  $router->get('enjeus/id/{libelle}', ['uses' => 'EnjeuController@showEnjeuId']);
});
$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('objectifs', ['uses' => 'ObjectifController@showAllObjectifs']);
  $router->get('objectifs/{id}', ['uses' => 'ObjectifController@showOneObjectif']);
  $router->post('objectifs', ['uses' => 'ObjectifController@create']);
  $router->delete('objectifs/{id}', ['uses' => 'ObjectifController@delete']);
  $router->put('objectifs/{id}', ['uses' => 'ObjectifController@update']);

  $router->get('objectifs/{id}/enjeux', ['uses' => 'EnjeuobjectifController@showEnjeuByObjectif']);
  $router->get('objectifs/{id}/fonctionnalites', ['uses' => 'ObjectiffonctionnaliteController@showFonctionnaliteByObjectif']);
  $router->get('objectifs/{id}/leviers', ['uses' => 'ObjectiflevierController@showLevierByObjectif']);

  $router->get('objectifs/id/{libelle}', ['uses' => 'ObjectifController@showObjectifId']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('fonctionnalites', ['uses' => 'FonctionnaliteController@showAllFonctionnalites']);
  $router->get('fonctionnalites/{id}', ['uses' => 'FonctionnaliteController@showOneFonctionnalite']);
  $router->post('fonctionnalites', ['uses' => 'FonctionnaliteController@create']);
  $router->delete('fonctionnalites/{id}', ['uses' => 'FonctionnaliteController@delete']);
  $router->put('fonctionnalites/{id}', ['uses' => 'FonctionnaliteController@update']);

  $router->get('fonctionnalites/{id}/objectifs', ['uses' => 'ObjectiffonctionnaliteController@showObjectifByFonctionnalite']);
  $router->get('fonctionnalites/{id}/leviers', ['uses' => 'FonctionnaliteController@showLevierByFonctionnalite']);
  $router->get('fonctionnalites/{id}/enjeux', ['uses' => 'FonctionnaliteController@showEnjeuByFonctionnalite']);

  $router->get('fonctionnalites/id/{libelle}', ['uses' => 'FonctionnaliteController@showFonctionnaliteId']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('leviers', ['uses' => 'LevierController@showAllLeviers']);
  $router->get('leviers/{id}', ['uses' => 'LevierController@showOneLevier']);
  $router->post('leviers', ['uses' => 'LevierController@create']);
  $router->delete('leviers/{id}', ['uses' => 'LevierController@delete']);
  $router->put('leviers/{id}', ['uses' => 'LevierController@update']);

  $router->get('leviers/{id}/objectifs', ['uses' => 'ObjectiflevierController@showObjectifByLevier']);
  $router->get('leviers/{id}/fonctionnalites', ['uses' => 'LevierController@showFonctionnaliteByLevier']);
  $router->get('leviers/{id}/enjeux', ['uses' => 'LevierController@showEnjeuByLevier']);

  $router->get('leviers/id/{libelle}', ['uses' => 'LevierController@showLevierId']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('enjeuobjectifs', ['uses' => 'EnjeuobjectifController@showAllEnjeuobjectifs']);
  $router->get('enjeuobjectifs/{id}', ['uses' => 'EnjeuobjectifController@showOneEnjeuobjectif']);
  $router->post('enjeuobjectifs', ['uses' => 'EnjeuobjectifController@create']);
  $router->delete('enjeuobjectifs/{id}', ['uses' => 'EnjeuobjectifController@delete']);
  $router->put('enjeuobjectifs/{id}', ['uses' => 'EnjeuobjectifController@update']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('enjeuorganismes', ['uses' => 'EnjeuorganismeController@showAllEnjeuorganismes']);
  $router->get('enjeuorganismes/{id}', ['uses' => 'EnjeuorganismeController@showOneEnjeuorganisme']);
  $router->post('enjeuorganismes', ['uses' => 'EnjeuorganismeController@create']);
  $router->delete('enjeuorganismes/{id}', ['uses' => 'EnjeuorganismeController@delete']);
  $router->put('enjeuorganismes/{id}', ['uses' => 'EnjeuorganismeController@update']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('objectiffonctionnalites', ['uses' => 'ObjectiffonctionnaliteController@showAllObjectiffonctionnalites']);
  $router->get('objectiffonctionnalites/{id}', ['uses' => 'ObjectiffonctionnaliteController@showOneObjectiffonctionnalite']);
  $router->post('objectiffonctionnalites', ['uses' => 'ObjectiffonctionnaliteController@create']);
  $router->delete('objectiffonctionnalites/{id}', ['uses' => 'ObjectiffonctionnaliteController@delete']);
  $router->put('objectiffonctionnalites/{id}', ['uses' => 'ObjectiffonctionnaliteController@update']);
});

$router->group(['prefix' => 'logged', 'middleware' => 'jwt.auth'], function() use ($router){
  $router->get('objectifleviers', ['uses' => 'ObjectiflevierController@showAllObjectifleviers']);
  $router->get('objectifleviers/{id}', ['uses' => 'ObjectiflevierController@showOneObjectiflevier']);
  $router->post('objectifleviers', ['uses' => 'ObjectiflevierController@create']);
  $router->delete('objectifleviers/{id}', ['uses' => 'ObjectiflevierController@delete']);
  $router->put('objectifleviers/{id}', ['uses' => 'ObjectiflevierController@update']);
});
