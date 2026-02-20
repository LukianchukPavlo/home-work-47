
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


import './style.css';


interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
  age: number | ''; 
  gender: 'male' | 'female' | '';
}

export const SignUpForm = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agree: false,
        age: '',
        gender: '',
    };


const onSubmit = () => {
    alert('Registration successful!');
  };

const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Must be at least 2 characters')
      .required('Required field'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required field'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required field'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm your password'),
    agree: Yup.boolean()
      .oneOf([true], 'You must agree to the terms')
      .required(),
    age: Yup.number()
      .typeError('Age must be a number')
      .min(1, 'Age must be at least 1')
      .max(120, 'Age must be less than 120')
      .required('Required field'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Please select your gender')
      .required('Required field'),
  });

  return (
    <div>
      <h2>Sign Up </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty, resetForm, errors, touched }) => (
          <Form noValidate>
            
            <div className="mb-3">
              <label className='fw-semibold'>Name</label>
              <div className="input-group has-validation">
              <Field
                name="name"
                type="text"
                placeholder="Pavlo Lukianchuk"
                className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="name" component="div" className="invalid-tooltip" />
              </div>
            </div>

            <div className="mb-3">
              <label className='fw-semibold'>Age</label>
              <div className="input-group has-validation">
                <Field
                  name="age"
                  type="number"
                  placeholder="Enter your age"
                  className={`form-control ${touched.age && errors.age ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="age" component="div" className="invalid-tooltip" />
                </div>
            </div>

            <div className="mb-3">
                <label className='fw-semibold'>Gender</label>
                <div className="input-group has-validation">
                <Field
                  name="gender"
                  as="select"
                  className={`form-control ${touched.gender && errors.gender ? 'is-invalid' : ''}`}>
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="invalid-tooltip" />
                </div>
            </div>

            
            <div className="mb-3">
              <label className='fw-semibold'>Email</label>
              <div className="input-group has-validation">
                <Field
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="email" component="div" className="invalid-tooltip" />
              </div>
              
            </div>

            
            <div className="mb-3">
              <label className='fw-semibold'>Password</label>
              <div className="input-group has-validation">
              <Field
                name="password"
                type="password"
                placeholder="******"
                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="password" component="div" className="invalid-tooltip" />
              </div>
            </div>

            
            <div className="mb-3">
              <label className="fw-semibold">Confirm Password</label>
              <div className="input-group has-validation">
              <Field
                name="confirmPassword"
                type="password"
                placeholder="******"
                className={`form-control ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-tooltip" />
              </div>
            </div>

            
            <div className="mb-4 form-check">
              <Field
                name="agree"
                type="checkbox"
                id="agree"
                className={`form-check-input ${touched.agree && errors.agree ? 'is-invalid' : ''}`}
              />
              <label className="form-check-label small" htmlFor="agree">
                I agree with the company policy
              </label>
            </div>

            
            <div className="d-grid gap-2">
              <button
                type="submit"
                className="btn btn-primary fw-bold"
                disabled={!(isValid && dirty)}
              >
                Register
              </button>
              <button
                type="button"
                className="reset-button"
                onClick={() => resetForm()}
              >
                Reset Form
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

