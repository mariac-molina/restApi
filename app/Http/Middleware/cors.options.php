<?php
  public function handle($request, Closure $next){
    return $next($request)
      ->header('Access-Control-Allow-Origin', 'localhost:4200')
      ->header('Access-Control-Allow-Methods', 'PUT, POST, DELETE')
      ->header('Access-Control-Allow-Headers', 'Accept, Content-Type, X-CSRF-TOKEN')
      ->header('Access-Control-Allow-Credentials', 'true');
  }

 ?>
