
<!DOCTYPE html>
<html>
  <head> 
    @include('admin.css')
  </head>
  <body>
    @include('admin.header')
 
    @include('admin.sidebar')
      <!-- Sidebar Navigation end-->


      <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
        
     @include('admin.body')

     @include('admin.footer')


          </div>
      </div>
    </div>
    <!-- JavaScript files-->
    <script src="{{asset('/admin_dashboard/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('/admin_dashboard/vendor/popper.js/umd/popper.min.js')}}"> </script>
    <script src="{{asset('/admin_dashboard/vendor/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('/admin_dashboard/vendor/jquery.cookie/jquery.cookie.js')}}"> </script>
    <script src="{{asset('/admin_dashboard/vendor/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('/admin_dashboard/vendor/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('/admin_dashboard/js/charts-home.js')}}"></script>
    <script src="{{asset('/admin_dashboard/js/front.js')}}"></script>
  </body>
</html>