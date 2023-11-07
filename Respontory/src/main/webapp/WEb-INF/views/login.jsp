<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form action="login" method="post">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <label for="rememberMe">Ghi nhớ tôi?</label>
        <input type="checkbox" id="rememberMe" name="rememberMe">
        <button type="submit">Login</button>
    </form>
    <p>${errorMessage}</p>
</body>
</html>