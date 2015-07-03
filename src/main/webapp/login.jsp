<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="common/login-header.jsp"%>
<!--  <link rel="stylesheet" href="./style/bootstrap.min.css">
 <link rel="stylesheet" href="./style/login.css"> -->






<div id="wrap">
  <div id="main" class="container clear-top ">
  	<div class="col-xs-7" style="">
  		 <img id="login_main" class="" src="images/login/loginbanner.jpg" alt="">
  	</div>
   
    
   	<form class="form-horizontal col-xs-5">
   	   <div class="form-group">
	    <div class="col-xs-10 col-xs-offset-1">
	     <img  class="col-xs-6" src="images/login/login.png" alt="">
	     <img  id="login_line" src="images/login/line.jpg" alt="">	
	    </div>
	  </div>
   	  
	  <div class="form-group">
	    <div class="col-xs-10 col-xs-offset-1">
	      <input type="text" class="form-control" id="inputName" placeholder="请输入用户名">
	    </div>
	  </div>
	  <div class="form-group">
	    <div class="col-xs-10 col-xs-offset-1">
	      <input type="password" class="form-control" id="inputTel" placeholder="请输入密码">
	    </div>
	  </div>
	  <div class="form-group">
	    <div class="col-xs-10 col-xs-offset-1">
	     <button class="btn btn-default" onclick="return login()">登 录</button>
	    </div>
	    <div id="loginErr" style="color: #F00;" class="col-xs-10 col-xs-offset-1">
	    	<%=timeoutErr %>
	    </div>
	     <img  id="login_pic" src="images/login/loginpic.jpg" alt="">
	  </div>
	</form>
    
  </div>
</div>
<footer class="footer">
<span>中兴软创科技股份有限公司</span><span class="">©</span><span>版权所有</span><span> <img src="images/login/zsmartcity.png" alt=""></span>
</footer>


<script src="./js/login.js"></script>

 


</body>
</html>