<style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .top-bar {
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
            background-color: #f8fafc;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logout-button {
            background-color: #ef4444; /* Tailwind red-500 */
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .logout-button:hover {
            background-color: #dc2626; /* Tailwind red-600 */
            transform: scale(1.05);
        }

        h1 {
            text-align: center;
            margin-top: 2rem;
        }
    </style>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Me For You</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/vendor/bootstrap/css/bootstrap.min.css')}}">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/vendor/font-awesome/css/font-awesome.min.css')}}">
    <!-- Custom Font Icons CSS-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/css/font.css')}}">
    <!-- Google fonts - Muli-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/https://fonts.googleapis.com/css?family=Muli:300,400,700')}}">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/css/style.default.css')}}" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="{{asset('/admin_dashboard/css/custom.css')}}">
    <!-- Favicon-->
    <link rel="shortcut icon" href="{{asset('/admin_dashboard/img/favicon.ico')}}">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/resposnd.min.js"></script><![endif]-->
