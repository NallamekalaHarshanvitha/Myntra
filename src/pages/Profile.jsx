import ContactForm from "../components/Form/contact";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-page-inner">
        <h1>Profile</h1>
        <p>Enter customer information below:</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Profile;
