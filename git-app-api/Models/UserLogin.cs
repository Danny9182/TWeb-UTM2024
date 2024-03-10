namespace git_app_api.Models
{
    public class UserLogin
    {
        public string Credentials { get; set; }
        public string Password { get; set; }
        
        public bool Status { get; set; }
    }
}