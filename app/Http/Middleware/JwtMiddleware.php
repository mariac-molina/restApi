<?php

  namespace App\Http\Middleware;

  use Closure;
  use Exception;
  use App\User;
  use Firebase\JWT\JWT;
  use Firebase\JWT\ExpiredException;

  class JwtMiddleware{

    public function handle($request, Closure $next, $guard = null){
      if(!$request->hasHeader('Authorization')){
        return response()->json([
          'error' => 'Authorization header not found'
        ], 401);
      }//End if()

      $token = $request->bearertoken();

      if($request->header('Authorization') == null || $token == null){
        return response()->json([
          'error' => 'Token not provided.'
        ], 401);
      }//End if()

      try{
        $credentials = JWT::decode($token, env('JWT_SECRET'),['HS256']);
      }
      catch(ExpiredException $e){
        return response()->json([
          'error' => 'Provided token is expired.'
        ], 400);
      }
      catch(Exception $e){
        return response()->json([
          'error' => 'An error while decoding token.'
        ], 400);
      }//Ennd try/catch()

      $user = User::find($credentials->sub);

      $request->auth = $user;

      return $next($request);

    }//End handle()



  }//End JwtMiddleware class {}

 ?>
