using Domain.Entities.User;

namespace BusinessLogic.Interfaces
{
    public interface ISession
    {
        bool UserLogin(ULoginData uLoginData);
    }
}