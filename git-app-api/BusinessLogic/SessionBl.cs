using BusinessLogic.Core;
using BusinessLogic.Interfaces;
using Domain.Entities.User;

namespace BusinessLogic
{
    public class SessionBl : UserApi, ISession
    {
        public bool UserLogin(ULoginData uLoginData)
        {
            //shenanigans in sql
            
            return true;
        } 
    }
}