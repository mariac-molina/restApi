<?php
  namespace App\Http\Middleware;

  use Closure;
  use Auth0\SDK\JWTVerifier;

  class Auth0Middleware{

    public function handle($request, Closure $next){
      if(!$request->hasHeader('Authorization')){
          return response()->json('Authorization header not found', 401);
      }//End if

      $token = $request->bearerToken();

      if($request->header('Authorization') == null || $token == null){
        return response()->json('No token provided', 401);
      }//End if()

      $this->retrieveAndValidateToken($token);

      return $next($request);

    }//End handle()

    public function retrieveAndValidateToken($token){
      try{
        $verifier = new JWTVerifier([
          'supported_algs' => ['RS256'],
          'valid_audiences' => ['localhost:8000'],
          'authorized_iss' => ['https://mcmauthtest.eu.auth0.com/']
        ]);

        $decoded = $verifier->verifyAndDecode($token);
      } catch(\Auth0\SDK\Exception\CoreException $e){
        throw $e;
      };

    }//End retrieveAndValidateToken()

  }//End class Auth0Middleware {}

 ?>
