// Modules
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Components
import EmptyState from "../components/global/EmptyState";

// Images
import magnus from "../images/magnus.jpg";

const Profile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="profile">
        <div className="container">
          <div className="profile-inner">
            <div className="profile-container">
              <div className="profile-left">
                <div className="profile-img">
                  <img src={magnus} alt="" />
                </div>
              </div>
              <div className="profile-right">
                <div className="profile-data">
                  <h3 className="profile-name">Carlsen, Magnus</h3>
                  <div className="profile-data-wrapper">
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                  </div>
                </div>
                <div className="profile-rating">
                  <h3 className="profile-name profile-rating">Rating</h3>
                  <div className="profile-data-wrapper">
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                    <div className="profile-item">
                      <span>ID</span>
                      <p>1503014</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Profile;
