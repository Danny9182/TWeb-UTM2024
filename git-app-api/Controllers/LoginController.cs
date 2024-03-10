﻿using System;
using System.Web.Mvc;
using BusinessLogic.Interfaces;
using Domain.Entities.User;
using git_app_api.Models;

namespace git_app_api.Controllers
{
    public class LoginController : Controller
    {
        private readonly ISession _session;

        public LoginController()
        {
            var bl = new BusinessLogic.BusinessLogic();
            _session = bl.GetSessionBl();
        }
        
        // Aquire login
        public ActionResult Index()
        {
            //return View();
            return null;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Index(UserLogin login)
        {
            if (ModelState.IsValid)
            {
                ULoginData data = new ULoginData
                {
                    Credentials = login.Credentials,
                    Password = login.Password,
                    LoginDateTime = DateTime.Now,
                    LoginIp = Request.UserHostAddress
                };

                var userLogin = _session.UserLogin(data);
                if (userLogin)
                {
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    //ModelState.AddModelError("", userLogin);
                    return null;
                }
            }

            //return View();
            return null;
        }
    }
}