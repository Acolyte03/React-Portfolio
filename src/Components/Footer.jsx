import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Personal Portfolio{' '}
          
          {/* Contact me! <link href = "https://github.com/Acolyte03">Github</link><link href = "www.google.com">Instagram</link> <link href = "https://www.linkedin.com/in/aeryk-andrews-5319962a3/">LinkedIn</link> */}
        </h4>
      </div>
    </footer>
  );
};

export default Footer;