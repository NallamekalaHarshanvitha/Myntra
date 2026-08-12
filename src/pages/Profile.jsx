import ContactForm from "../components/Form/contact";

function Profile() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#f5f5f6] px-6 py-10">
      <div className="mx-auto max-w-[520px]">
        <h1 className="mb-2 text-3xl font-semibold text-[#222]">Profile</h1>
        <p className="mb-6 text-[#555]">Enter customer information below:</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Profile;
