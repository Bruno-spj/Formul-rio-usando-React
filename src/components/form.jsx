import "./index.css";
import { useForm } from 'react-hook-form';

export const Formulario = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const handleSubmitForm = (data) => {
    console.log(data);
  };
  
  return (
    <>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <h2>Contact Us</h2>

        <div className="name-container">
          <div className="first-name">
            <label htmlFor="first-name">First Name</label>
            <input 
              className={` ${errors.firstName ? "campo-obrigatorio" : "campo-preechido"}`}
              type="text" 
              id="firstName" 
              {...register('firstName', {
                required: "Campo obrigatório *",
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div className="last-name">
            <label htmlFor="last-name">Last Name</label>
            <input 
              className={` ${errors.lastName ? "campo-obrigatorio" : "campo-preechido"}`}
              type="text" 
              id="lastName" 
              {...register('lastName', {
                required: "Campo obrigatório *",
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input 
            className={` ${errors.email ? "campo-obrigatorio" : "campo-preechido"}`}
            type="email" 
            id="email" 
            {...register('email', {
              required: "Campo obrigatório *",
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="container-radio">
          <input 
            type="radio" 
            id="generalEnquiry" 
            value="General Enquiry"
            {...register('enquiryType', {
              required: "Campo obrigatório *",
            })}
          />
          <label htmlFor="generalEnquiry">General Enquiry</label>

          <input 
            type="radio" 
            id="supportRequest" 
            value="Support Request"
            {...register('enquiryType', {
              required: "Campo obrigatório *",
            })}
          />
          <label htmlFor="supportRequest">Support Request</label>
          
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea 
            className={` ${errors.message ? "campo-obrigatorio" : "campo-preechido"}`}
            rows={10} 
            cols={50} 
            id="message" 
            {...register('message', {
              required: "Campo obrigatório *",
            })}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <div className="checkbox">
          <input 
            type="checkbox" 
            id="consent" 
            {...register('consent')}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
