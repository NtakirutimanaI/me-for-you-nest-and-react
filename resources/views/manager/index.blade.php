<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manager Dashboard</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }

        .top-bar {
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
            background-color: #f8fafc;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .logout-button {
            background-color: #ef4444; /* Tailwind red-500 */
            color: white;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 0.375rem;
            cursor: pointer;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .logout-button:hover {
            background-color: #dc2626; /* Tailwind red-600 */
            transform: scale(1.05);
        }

        h1 {
            text-align: center;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <div class="top-bar">
        <!-- Authentication -->
        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <input type="submit" value="Logout" class="logout-button">
        </form>
    </div>

    <h1>Manager</h1>
</body>
</html>
