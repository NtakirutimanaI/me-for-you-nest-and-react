<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class HomeController extends Controller
{
    
     public function manager()
    {
        return view('manager.index'); 
    }

     public function home()
    {
        return view('home.index'); 
    }
     public function aboutus()
    {
        return view('home.aboutus'); 
    }

       public function classes()
    {
        return view('home.classes_page'); 
    }

     public function contact()
    {
        return view('home.contact'); 
    }

    public function event_management()
{
    return view('home.event_management');
}

public function training()
{
    return view('home.training');
}

public function learning_coaching()
{
    return view('home.learning_coaching');
}

public function testimonials()
{
    return view('home.testimonials');
}


public function languages()
{
    return view('home.classes_page');
}

}
