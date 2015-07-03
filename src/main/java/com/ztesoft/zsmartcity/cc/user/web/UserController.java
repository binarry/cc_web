package com.ztesoft.zsmartcity.cc.user.web;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.ztesoft.zsmartcity.cc.user.dto.UserLogin;
import com.ztesoft.zsmartcity.cc.user.dto.UserLoginResp;
import com.ztesoft.zsmartcity.cc.user.service.IUserService;


@RestController
@RequestMapping(value="/user")
public class UserController {
	@Resource
	IUserService userService;
	
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public UserLoginResp longin(UserLogin login){
		
		
		System.out.println("----------------login");
		return userService.login(login);
	}

}
