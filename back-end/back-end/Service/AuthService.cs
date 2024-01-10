namespace back_end.Service
{
    public class AuthService
    {
        public bool checkSecret(string secretKey)
        {
            return secretKey == "H%vWA<XW?4IkH5Fm";
        }
    }
}
