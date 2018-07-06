<?php

  namespace App\Http\Controllers;

  use Validator;
  use App\User;
  use Firebase\JWT\JWT;
  use Illuminate\Http\Request;
  use Firebase\JWT\ExpiredException;
  use Illuminate\Support\Facades\Hash;
  use Laravel\Lumen\Routing\Controller as BaseController;

  class AuthController extends BaseController{
    //the request instance
    private $request;

    public function __construct(Request $request){
      $this->request = $request;
    }//End __construct()

    protected function jwt(User $user){
      $payload = [
        'iss' => "lumen-jwt", //Issuer of the token
        'sub' => $user->id, //Subject of the token
        'iat' => time(), //Time JWT was issued
        'exp' => time() + 60*60 //Expiration time
      ];

      return JWT::encode($payload, env('JWT_SECRET'));
    }//End jwt()

    public function authenticate(User $user){
      $this->validate($this->request, [
        'email' => 'required|email',
        'password' => 'required'
      ]);

      //find user by email
      $user = User::where('email', $this->request->input('email'))->first();

      if(!$user){
        return response()->json([
          'error' => 'Email does not exist.'
        ], 400);
      }//End if
      // else{
      //   return response()->json([
      //     'email' => $user->email,
      //     'pwd' => $user->password
      //   ], 200);
      // }

      //Verify password and generate token
      if (Hash::check($this->request->input('password'), $user->password)){
        return response()->json([
          'token' => $this->jwt($user)
        ], 200);
      }//End if()

      return response()->json([
        'error' => 'Email or password incorrect.'
      ], 400);

    }//End authenticate()

  }//End class AuthController{}


 ?>
