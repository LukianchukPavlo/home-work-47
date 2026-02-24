import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  const initialValues: SignUpForm = {
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
    <div className="max-w-[400px] mx-auto mt-12 p-8 rounded-xl bg-[#f0fff4] shadow-md hover:shadow-lg transition-all duration-300 font-sans">
      <h2 className="text-center text-[#2e7d32] mb-6 font-bold text-[1.8rem]">
        Sign Up
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty, resetForm, errors, touched }) => (
          <Form noValidate className="space-y-4">

            {/* Name */}
            <div>
              <label className="font-semibold block mb-1">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Pavlo Lukianchuk"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300
                  ${touched.name && errors.name
                    ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:outline-none focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-700 text-sm mt-1"
              />
            </div>

            {/* Age */}
            <div>
              <label className="font-semibold block mb-1">Age</label>
              <Field
                name="age"
                type="number"
                placeholder="Enter your age"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300
                  ${touched.age && errors.age
                    ? 'border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              />
              <ErrorMessage
                name="age"
                component="div"
                className="text-red-700 text-sm mt-1"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="font-semibold block mb-1">Gender</label>
              <Field
                as="select"
                name="gender"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300 bg-white
                  ${touched.gender && errors.gender
                    ? 'border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-700 text-sm mt-1"
              />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold block mb-1">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="email@example.com"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300
                  ${touched.email && errors.email
                    ? 'border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-700 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div>
              <label className="font-semibold block mb-1">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="******"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300
                  ${touched.password && errors.password
                    ? 'border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-700 text-sm mt-1 focus:outline-none"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="font-semibold block mb-1">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="******"
                className={`w-full border-2 rounded-lg px-3 py-2 transition-all duration-300
                  ${touched.confirmPassword && errors.confirmPassword
                    ? 'border-red-500 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300'
                    : 'border-[#a5d6a7] focus:border-[#66bb6a] focus:outline-none focus:ring-2 focus:ring-[#66bb6a]/50'
                  }`}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-700 text-sm mt-1"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mt-2">
              <Field
                type="checkbox"
                name="agree"
                className="w-5 h-5 border-2 border-[#a5d6a7] rounded accent-[#2e7d32]"
              />
              <label className="text-sm text-[#2e7d32]">
                I agree with the company policy
              </label>
            </div>
            <ErrorMessage
              name="agree"
              component="div"
              className="text-red-700 text-sm"
            />

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                type="submit"
                disabled={!(isValid && dirty)}
                className="w-full bg-[#2e7d32] text-white border-2 border-[#2e7d32] font-semibold py-2.5 rounded-lg
                           transition-all duration-300 
                           hover:bg-[#1b5e20] hover:border-[#1b5e20]
                           focus:outline-none focus:border-[#66bb6a] focus:ring-2 focus:ring-[#66bb6a]/50
                           disabled:opacity-50 disabled:cursor-not-allowed
                           no-browser-focus"
              >
                Register
              </button>

              <button
                type="button"
                onClick={() => resetForm()}
                className="w-full !bg-[#a5d6a7] !text-[#1b5e20] border-2 border-[#a5d6a7]  font-semibold py-2.5 rounded-lg
                           transition-all duration-300 
                           !hover:bg-[#65c16a] !hover:border-[#65c16a] 
                           !focus:outline-none focus:border-[#65c16a] focus:ring-2 focus:ring-[#65c16a]/50 !appearance-none !no-browser-focus
                           "
                           
              >
                Reset Form
              </button>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

