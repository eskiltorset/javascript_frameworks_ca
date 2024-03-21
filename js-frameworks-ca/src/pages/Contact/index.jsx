import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';


function Contact() {
    const schema = yup
    .object({
      fullName: yup
        .string()
        .min(3, 'Your full name should be at least 3 characters.')
        .max(50, 'Your full name cannot be longer than 50 characters.')
        .required('Please enter your full name'),
      email: yup
        .string().email()
        .required('Your email must be @noroff.no'),
      subject: yup
        .string()
        .min(3, 'Your subject should be at least 3 characters.')
        .max(100, 'Your subject cannot be longer than 1000 characters.')
        .required('Please enter your subject'),
      body: yup
        .string()
        .min(3, 'Your body should be at least 3 characters.')
        .max(1000, 'Your body cannot be longer than 10 characters.')
        .required('Please enter your body'),
    })
    .required();
  
    const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm({
          resolver: yupResolver(schema),
        });
      
        function onSubmit(data) {
          console.log(data);
        }
      
        return (
          <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit(onSubmit)} className='vh-100 w-50'>
              <h1 className='text-center mt-3'>Contact Us</h1>
  
              <Form.Group className="mb-3">
                <Form.Label htmlFor="fullName">Full name</Form.Label>
                <Form.Control {...register('fullName')} placeholder='Your full name ...' />
                <Form.Text className='text-danger'>{errors.fullName?.message}</Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control {...register('email')} placeholder='Your email address ...' />
                <Form.Text className='text-danger'>{errors.email?.message}</Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control {...register('subject')} placeholder='Your subject ...' />
                <Form.Text className='text-danger'>{errors.subject?.message}</Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3">
                <Form.Label htmlFor="body">Body</Form.Label>
                <Form.Control {...register('body')} placeholder='Describe your subject ...' />
                <Form.Text className='text-danger'>{errors.body?.message}</Form.Text>
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Submit
              </Button>
            
  
              {/* <label htmlFor="email">Email</label><br></br>
              <input {...register('email')} placeholder='Your email address ...' />
              <p>{errors.email?.message}</p>
  
              <label htmlFor="subject">Subject</label><br></br>
              <input {...register('subject')} placeholder='Your subject ...' />
              <p>{errors.subject?.message}</p>
  
              <label htmlFor="body">Body</label><br></br>
              <input {...register('body')} placeholder='Describe your subject ...' />
              <p>{errors.body?.message}</p> */}
  
              {/* <input type="submit" value='Submit'/> */}
            </Form>
          </div>
        );
}

export default Contact;