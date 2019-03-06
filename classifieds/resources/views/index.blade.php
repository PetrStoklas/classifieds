<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
	<link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon.png">
	<link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

	<title>Classifieds Homepage</title>

	<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <meta name="viewport" content="width=device-width" />


    <!-- Bootstrap core CSS     -->
    
    <link href="{{ URL::asset('css/assets/css/bootstrap.min.css') }}" rel="stylesheet" />
    <!-- Animation library for notifications   -->
    <link href="{{ URL::asset('css/assets/css/animate.min.css') }}" rel="stylesheet" />

    <!--  Paper Dashboard core CSS    -->
    <link href="{{ URL::asset('css/assets/css/paper-dashboard.css') }}" rel="stylesheet" />


    <!--  CSS for Demo Purpose, don't include it in your project     -->
    <link href="assets/css/demo.css" rel="stylesheet" />


    <!--  Fonts and icons     -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
    <link href="assets/css/themify-icons.css" rel="stylesheet">
    {{-- FILEPOND STYLING --}}
    {{-- <link href="https://unpkg.com/filepond/dist/filepond.css" rel="stylesheet"> --}}

    <link href="/css/dist/dropzone.css" type="text/css" rel="stylesheet" />

    <script src="/js/dropzone.js"></script>
</head>
<body>
    {{-- FILEPOND --}}
    {{-- <script src="https://unpkg.com/filepond/dist/filepond.js"></script>
    <input type="file">
    <script>
    console.log('started');
    const inputElement = document.querySelector('input[type="file"]');
    const pond = FilePond.create( inputElement );
    
    FilePond.setOptions({
        server: 'api/'
    });

    document.addEventListener('FilePond:loaded', e => {
        console.log('FilePond ready for use', e.detail);
    });
    </script> --}}
    {{-- KONEC FILEPONDU --}}
    


    @include('common/errors')
    @include('common/alerts')
    @include('common.nav')
    @yield('content')
    
</body>
</html>