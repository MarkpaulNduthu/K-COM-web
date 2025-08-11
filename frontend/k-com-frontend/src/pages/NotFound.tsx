// pages/NotFound.jsx
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
