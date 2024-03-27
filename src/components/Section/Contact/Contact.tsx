import Image from 'next/image';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Section from '../Section';
import { TbMessages } from 'react-icons/tb';
import { FaEnvelope, FaPaperPlane, FaUserTie } from 'react-icons/fa';
import { ContactProps, FormValues } from '@/types/section/contact';
import Input from '@/components/Input/Input';
import Tilt from 'react-parallax-tilt';
import imgFormContact from '@/assets/form_contact.jpg';

const Contact = ({ data }: ContactProps) => {
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({
    status: '',
    message: '',
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const submitForm = async (dataForm: FormValues) => {



    //console.log(dataForm.name)
    


    window.location.href =  'mailto:' + dataForm.email + '?' + 'subject=Contato '+ dataForm.name  + '&body='  + dataForm.message


   /* try {
      if (!sending) {
        setSending(true);

        await fetch('/api/send-mail', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, *//**',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataForm),
        }).then(() => {
          setSending(false);
        });
      }

      reset();
      setStatusMessage({ status: 'success', message: data.alert[0] });
    } catch (error) {
      console.log('error:', error);
      setStatusMessage({ status: 'danger', message: data.alert[1] });
    }

    setTimeout(() => {
      setStatusMessage({
        status: '',
        message: '',
      });
    }, 5000);*/
  };


  

  

  return (
    <Section
      id={data.id}
      title={data.title}
      icon={<TbMessages />}
      style={{ backgroundColor: '#212529' }}
    >
   <BoxForm>
        <div className="row">
          <div className="col d-none d-md-block">
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05}>
              <Image
                src={imgFormContact}
                alt="Image form contact"
                className="img-fluid"
              />
            </Tilt>
          </div>
         <div className="col">
            <StyledForm onSubmit={handleSubmit(submitForm)}>
              {/*statusMessage.status ? (
                <div
                  className={`alert alert-${statusMessage.status}`}
                  role="alert"
                >
                  {statusMessage.message}
                </div>
              ) : null*/}

              <Input
                name="name"
                placeholder={data.input[0].name}
                errors={errors}
                register={register}
                validationSchema={{
                  required: data.input[0].error,
                }}
              >
                <FaUserTie />
              </Input>

              <Input
                name="email"
                placeholder={data.input[1].name}
                errors={errors}
                register={register}
                validationSchema={{
                  required: data.input[1].error[0],
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: data.input[1].error[1],
                  },
                }}
              >
                <FaEnvelope />
              </Input>

              <Input
                type="textarea"
                name="message"
                rows={8}
                placeholder={data.input[2].name}
                errors={errors}
                register={register}
                validationSchema={{
                  required: data.input[2].error[0],
                  minLength: { value: 10, message: data.input[2].error[1] },
                }}
              />

              <div className="m-auto m-md-0 mx-md-auto">
                <StyledButton>
                  {/*data.send}{' '}
                  {sending ? (
                    <div className="spinner-border" role="status" />
                  ) : (
                    <FaPaperPlane > Contato</FaPaperPlane>
                  /*)*/}
               Contato
               <FaPaperPlane/>
                
               {/*   <button onClick={() => submitForm }>Contact Me</button>*/}
                </StyledButton>
              </div>
            </StyledForm>
          </div>
        </div>
      </BoxForm>
    </Section>
  );
};

export default Contact;

const BoxForm = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const StyledForm = styled.form`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 25px 0;

  & input {
    padding-left: 40px;
  }

  & > div > svg {
    position: absolute;
    top: 10px;
    left: 12px;
    color: rgb(51, 51, 51);
    font-size: 17px;
    pointer-events: none;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  padding: 13px 25px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  color: #fff;
  background: #212529;
  box-shadow: 0px 5px 10px rgba(48, 68, 247, 0.6);
  user-select: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #4629caf5;

    & > svg {
      transform: translateX(10px);
    }
  }

  & > svg,
  & > div {
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
`;
