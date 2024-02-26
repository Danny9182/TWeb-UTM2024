using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace git_app_api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Navbar()
        {
            return PartialView("_Navbar");
        }

        public ActionResult Info()
        {
            return PartialView("_About");
        }
    }
}