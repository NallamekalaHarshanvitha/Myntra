import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  contact: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function submit(e) {
    e.preventDefault();
    console.log('Submitted', state);
    dispatch({ type: 'RESET' });
  }

  return (
    <form className="grid w-full gap-5 rounded-2xl bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.08)]" onSubmit={submit}>
      <div>
        <h2 className="m-0 mb-2 text-[26px] font-semibold text-[#333]">Customer Details</h2>
        <p className="m-0 mb-6 text-[#555]">Please enter your information to keep your profile up to date.</p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <label className="flex w-full flex-col gap-2 text-sm text-[#333]">
          <span>Name</span>
          <input
            type="text"
            value={state.name}
            onChange={(e) => dispatch({ type: 'FIELD', field: 'name', value: e.target.value })}
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-[#dcdcdc] bg-[#fdfdfd] px-4 py-3.5 text-sm text-[#333] outline-none transition duration-200 placeholder:text-[#999] focus:border-[#ff3f6c] focus:ring-4 focus:ring-[#ff3f6c]/10"
          />
        </label>

        <label className="flex w-full flex-col gap-2 text-sm text-[#333]">
          <span>Email</span>
          <input
            type="email"
            value={state.email}
            onChange={(e) => dispatch({ type: 'FIELD', field: 'email', value: e.target.value })}
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-[#dcdcdc] bg-[#fdfdfd] px-4 py-3.5 text-sm text-[#333] outline-none transition duration-200 placeholder:text-[#999] focus:border-[#ff3f6c] focus:ring-4 focus:ring-[#ff3f6c]/10"
          />
        </label>

        <label className="flex w-full flex-col gap-2 text-sm text-[#333]">
          <span>Contact</span>
          <input
            type="tel"
            value={state.contact}
            onChange={(e) => dispatch({ type: 'FIELD', field: 'contact', value: e.target.value })}
            placeholder="Enter your phone number"
            required
            className="w-full rounded-xl border border-[#dcdcdc] bg-[#fdfdfd] px-4 py-3.5 text-sm text-[#333] outline-none transition duration-200 placeholder:text-[#999] focus:border-[#ff3f6c] focus:ring-4 focus:ring-[#ff3f6c]/10"
          />
        </label>
      </div>

      <button
        type="submit"
        className="w-fit rounded-xl border-none bg-[#ff3f6c] px-7 py-3.5 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,63,108,0.2)]"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;